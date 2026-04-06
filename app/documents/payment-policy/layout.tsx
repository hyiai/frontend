import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Payment Policy - Payouts, Settlement & Billing Terms",
  description:
    "Review HYI.AI's payment procedures, payout thresholds, settlement timelines, applicable taxes and billing methods for Talents and Clients.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
