import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Escalation Policy - Structured Issue Resolution Process",
  description:
    "Learn how HYI.AI addresses unresolved issues through a clear, tiered escalation process for Talents and Clients.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
