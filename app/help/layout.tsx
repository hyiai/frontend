import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Support | We're Here to Help",
  description:
    "Need assistance? Visit the HYI.AI Support page for help, FAQs, and customer service. We're here to ensure you get the support you need, fast.",
};

export default function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
