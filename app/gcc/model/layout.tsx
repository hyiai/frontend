import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build-Operate-Transfer GCC Solutions | HYI.AI Offshore Teams",
  description:
    "HYI.AI helps you scale with BOT Global Capability Centers - expertly built offshore teams, streamlined operations, and long-term value.",
};

export default function GCCModelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
