import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";

const figtree = Figtree({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Figtree"],
});

export const metadata: Metadata = {
  title:
    "HYI.AI - Hire Virtual Assistance, Freelance & Work From Anywhere, GenAI",
  description:
    "HYI.AI is a Virtual Assistant Platform for Startups and Entrepreneur Offering Virtual  Engineers, Startup Mentors and Co-Founders For Seamless Team Scaling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          HYI.AI - Hire Virtual Assistance, Freelance & Work From Anywhere,
          GenAI
        </title>
        <meta name="description" content="" />

        <meta
          property="og:title"
          content="HYI.AI - Hire Virtual Assistance, Freelance & Work From Anywhere, GenAI"
        />
        <meta
          property="og:description"
          content="HYI.AI is a Virtual Assistant Platform for Startups and Entrepreneur Offering Virtual Engineers, Startup Mentors and Co-Founders For Seamless Team Scaling."
        />
        <meta
          property="og:image"
          content="https://www.hyi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeature-Image.d17762ab.png&w=640&q=75"
        />
        <meta property="og:url" content="https://www.hyi.ai/" />
        <meta property="og:site_name" content="Hyi.ai" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HYI.AI - Hire Virtual Assistance, Freelance & Work From Anywhere, GenAI"
        />
        <meta
          name="twitter:description"
          content="HYI.AI is a Virtual Assistant Platform for Startups and Entrepreneur Offering Virtual Engineers, Startup Mentors and Co-Founders For Seamless Team Scaling.
"
        />
        <meta
          name="twitter:image"
          content="https://www.hyi.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeature-Image.d17762ab.png&w=640&q=75"
        />

        <meta charSet="UTF-8" />
      </Head>
      <body className={`${figtree.className} antialiased`}>
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
