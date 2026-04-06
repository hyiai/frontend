"use client"


import CustomButton from "@/components/shared/customButton"
import CreditInvoicePreview, { CreditInvoice } from "@/components/shared/invoice/creditInvoicePreview";
import { ReactNode, useState, useRef, useCallback, useEffect } from "react";

export interface PDFGenerationOptions {
    margin?: number
    filename?: string
    image?: { type: string; quality: number }
    html2canvas?: { scale: number }
    jsPDF?: { unit: string; format: string; orientation: string }
    download?: boolean // Optional: if true, triggers automatic download
}

interface DownloadInvoiceButtonProps {
    heroButton?: boolean;
    otherCSSProperty?: string;
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    invoiceDetails?: CreditInvoice;
    pdfGenerationOptions?: PDFGenerationOptions;
}

export const defaultPDFGenerationOptions: PDFGenerationOptions = {
    margin: 0.5,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    download: true
}

const cssProperties = `
                :root {
  --radius: 0.625rem;
  --background: rgb(255, 255, 255); /* oklch(1 0 0) */
  --foreground: rgb(37, 37, 37);    /* oklch(0.145 0 0) */
  --card: rgb(255, 255, 255);
  --card-foreground: rgb(37, 37, 37);
  --popover: rgb(255, 255, 255);
  --popover-foreground: rgb(37, 37, 37);
  --primary: rgb(52, 52, 52);       /* oklch(0.205 0 0) */
  --primary-foreground: rgb(252, 252, 252); /* oklch(0.985 0 0) */
  --secondary: rgb(250, 250, 250); /* oklch(0.97 0 0) */
  --secondary-foreground: rgb(52, 52, 52);
  --muted: rgb(250, 250, 250);
  --muted-foreground: rgb(143, 143, 143); /* oklch(0.556 0 0) */
  --accent: rgb(250, 250, 250);
  --accent-foreground: rgb(52, 52, 52);
  --destructive: rgb(190, 80, 80);  /* oklch(0.577 0.245 27.325) */
  --border: rgb(236, 236, 236);     /* oklch(0.922 0 0) */
  --input: rgb(236, 236, 236);
  --ring: rgb(179, 179, 179);       /* oklch(0.708 0 0) */
  --chart-1: rgb(215, 161, 45);    /* oklch(0.646 0.222 41.116) */
  --chart-2: rgb(72, 136, 226);    /* oklch(0.6 0.118 184.704) */
  --chart-3: rgb(115, 95, 236);    /* oklch(0.398 0.07 227.392) */
  --chart-4: rgb(166, 216, 45);    /* oklch(0.828 0.189 84.429) */
  --chart-5: rgb(167, 186, 45);    /* oklch(0.769 0.188 70.08) */
  --sidebar: rgb(252, 252, 252);
  --sidebar-foreground: rgb(37, 37, 37);
  --sidebar-primary: rgb(52, 52, 52);
  --sidebar-primary-foreground: rgb(252, 252, 252);
  --sidebar-accent: rgb(250, 250, 250);
  --sidebar-accent-foreground: rgb(52, 52, 52);
  --sidebar-border: rgb(236, 236, 236);
  --sidebar-ring: rgb(179, 179, 179);

  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);
}
.dark {
  --background: rgb(37, 37, 37);           /* oklch(0.145 0 0) */
  --foreground: rgb(252, 252, 252);       /* oklch(0.985 0 0) */
  --card: rgb(52, 52, 52);                /* oklch(0.205 0 0) */
  --card-foreground: rgb(252, 252, 252);
  --popover: rgb(52, 52, 52);
  --popover-foreground: rgb(252, 252, 252);
  --primary: rgb(236, 236, 236);          /* oklch(0.922 0 0) */
  --primary-foreground: rgb(52, 52, 52);
  --secondary: rgb(69, 69, 69);           /* oklch(0.269 0 0) */
  --secondary-foreground: rgb(252, 252, 252);
  --muted: rgb(69, 69, 69);
  --muted-foreground: rgb(179, 179, 179); /* oklch(0.708 0 0) */
  --accent: rgb(69, 69, 69);
  --accent-foreground: rgb(252, 252, 252);
  --destructive: rgb(173, 71, 71);        /* oklch(0.704 0.191 22.216) */
  --border: rgba(255, 255, 255, 0.1);    /* oklch(1 0 0 / 10%) */
  --input: rgba(255, 255, 255, 0.15);    /* oklch(1 0 0 / 15%) */
  --ring: rgb(143, 143, 143);            /* oklch(0.556 0 0) */
  --chart-1: rgb(110, 97, 238);          /* oklch(0.488 0.243 264.376) */
  --chart-2: rgb(97, 212, 187);          /* oklch(0.696 0.17 162.48) */
  --chart-3: rgb(167, 186, 45);          /* oklch(0.769 0.188 70.08) */
  --chart-4: rgb(117, 81, 236);          /* oklch(0.627 0.265 303.9) */
  --chart-5: rgb(207, 169, 47);          /* oklch(0.645 0.246 16.439) */
  --sidebar: rgb(52, 52, 52);
  --sidebar-foreground: rgb(252, 252, 252);
  --sidebar-primary: rgb(110, 97, 238);
  --sidebar-primary-foreground: rgb(252, 252, 252);
  --sidebar-accent: rgb(69, 69, 69);
  --sidebar-accent-foreground: rgb(252, 252, 252);
  --sidebar-border: rgba(255, 255, 255, 0.1);
  --sidebar-ring: rgb(143, 143, 143);
}`;

export default function DownloadInvoiceButton({ onClick, invoiceDetails, pdfGenerationOptions, ...buttonProps }: DownloadInvoiceButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [invoicePreviewReady, setInvoicePreviewReady] = useState(false);
    const invoiceRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const waitForInvoiceEl = () => {
            return new Promise<HTMLElement>((resolve, reject) => {
                let retries = 20
                const check = () => {
                    const el = document.getElementById('invoice-content')
                    if (el) return resolve(el)
                    if (retries-- <= 0) return reject('invoice-content not found in time')
                    requestAnimationFrame(check)
                }
                check()
            })
        }
        setTimeout(async () => {
            try {
                const ref = await waitForInvoiceEl()
                invoiceRef.current = ref
                setInvoicePreviewReady(true);
            } catch (error) {
                console.error('invoice-content not found in time', error);
                setInvoicePreviewReady(false);
            }
        }, 800)



    }, [invoiceDetails]);

    const downloadInvoice = useCallback(async () => {
        if (!invoiceDetails || !invoiceRef.current) {
            console.warn('Invoice details or ref not available');
            return;
        }

        setIsGenerating(true);
        const options = pdfGenerationOptions || defaultPDFGenerationOptions;
        let tempStyle: HTMLStyleElement | null = null;

        try {
            // Dynamically import html2pdf.js only on client side
            const html2pdf = (await import('html2pdf.js')).default;

            // Create comprehensive CSS overrides to replace ALL unsupported color functions
            tempStyle = document.createElement('style');
            tempStyle.textContent = cssProperties;
            document.head.appendChild(tempStyle);

            // Wait for styles to apply
            await new Promise(resolve => setTimeout(resolve, 50));

            const pdfBlob = await html2pdf()
                .from(invoiceRef.current)
                .set({
                    margin: options.margin || 0.5,
                    filename: options.filename || 'document.pdf',
                    image: options.image || { type: 'jpeg', quality: 0.98 },
                    html2canvas: options.html2canvas || { scale: 2 },
                    jsPDF: options.jsPDF || { unit: 'in', format: 'a4', orientation: 'portrait' },
                })
                .outputPdf('blob')

            // Clean up the temporary style
            if (tempStyle) {
                document.head.removeChild(tempStyle);
            }

            if (options.download) {
                const url = URL.createObjectURL(pdfBlob)
                const link = document.createElement('a')
                link.href = url
                link.download = options.filename || 'document.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)
            }

            onClick?.({} as React.MouseEvent<HTMLButtonElement>)
            return pdfBlob
        } catch (error) {
            console.error("Error generating PDF", error)
            // Ensure cleanup even on error
            try {
                if (tempStyle && document.head.contains(tempStyle)) {
                    document.head.removeChild(tempStyle);
                }
            } catch (cleanupError) {
                console.warn("Error cleaning up temporary styles:", cleanupError);
            }
        } finally {
            setIsGenerating(false)
        }
    }, [invoiceDetails, pdfGenerationOptions, onClick]);

    return (
        <>
            <CustomButton
                onClick={downloadInvoice}
                isDisabled={!invoiceDetails || isGenerating || !!buttonProps.isDisabled || !invoicePreviewReady}
                {...buttonProps}
            >
                {buttonProps.children}
            </CustomButton>

            {invoiceDetails && (
                <div
                    id="invoice-wrapper"
                    style={{ position: 'absolute', top: 0, left: '-9999px', width: '800px' }}
                >
                    <div id="invoice-content">
                        <CreditInvoicePreview invoice={invoiceDetails} />
                    </div>
                </div>
            )}
        </>
    )
}