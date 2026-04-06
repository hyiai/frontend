import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at HYI.AI | Join the Future of AI & Innovation",
  description:
    "Explore career opportunities at HYI.AI. Join our team building GenAI, AGI Training, and Virtual Assistant solutions for the future.",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
