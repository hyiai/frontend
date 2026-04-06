import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Cancellation Policy - Subscription & Service Terms",
  description:
    "Learn how to cancel HYI.AI services, subscriptions or accounts. Review timelines, refund conditions and cancellation procedures.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
