import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Cookies Policy - Manage Your Data Preferences",
  description:
    "Understand how HYI.AI uses cookies to enhance your experience. Learn about cookie types, third-party tools, and how to manage your settings.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
