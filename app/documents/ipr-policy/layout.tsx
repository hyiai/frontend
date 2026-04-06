import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI IPR Policy - Protecting Intellectual Property & User Rights",
  description:
    "Learn about HYI.AI's approach to intellectual property, including platform asset ownership, user content rights and reporting infringements.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
