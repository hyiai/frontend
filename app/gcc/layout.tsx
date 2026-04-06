import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Capability Center (GCC) & Offshore Teams | HYI.AI",
  description:
    "HYI.AI builds and manages Global Capability Centers to help enterprises scale with offshore teams, drive innovation, and reduce operational costs.",
};

export default function GCCLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
