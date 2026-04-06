import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GCC Talent Pool for Offshore Teams | HYI.AI",
  description:
    "HYI.AI powers Global Capability Centers with offshore talent ecosystems - beyond hiring, we build and manage high-performing teams.",
};

export default function GCCTalentpoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
