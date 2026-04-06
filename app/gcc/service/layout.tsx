import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Capability Center by HYI.AI | Scalable Offshore Teams",
  description:
    "Launch a fully managed offshore team with HYI.AI's GCCaaS. Get pre-built infrastructure, expert talent, and day-one readiness.",
};

export default function GCCServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
