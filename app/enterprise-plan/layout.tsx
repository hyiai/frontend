import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Enterprise Plan - Scalable Talent & Project Management",
  description:
    "Unlock HYI.AI's Enterprise Plan for large-scale hiring, dedicated managers, and priority support for seamless project management.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
