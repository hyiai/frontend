import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Policy | HYI.AI - Guidelines for Brand Use & Representation",
  description:
    "Understand how to correctly use HYI.AI'ss brand, logo and visual assets across all platforms and media.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
