import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | HYI.AI Platform Usage Policy",
  description:
    "Review HYI.AI's Terms and Conditions outlining user responsibilities, platform usage policies, and legal guidelines for all services and interactions.",
};

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
