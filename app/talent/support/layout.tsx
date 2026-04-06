import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Support | Expert Help for Developers & Professionals",
  description:
    "Get expert assistance whenever you're stuck. Access top-tier talent support from HYI.AI and resolve your challenges with expert guidance and resources.",
};

export default function TalentSupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
