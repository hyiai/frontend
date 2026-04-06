import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Refund Policy - Process & Terms",
  description:
    "Review HYI.AI's refund guidelines for Clients and Talents, including eligibility criteria, request procedures and timelines for processing.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
