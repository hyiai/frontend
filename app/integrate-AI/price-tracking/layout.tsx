import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Decision-Making & Cost Control ",
  description:
    "Our price tracker indicates the variation between the estimated and the actual costs. It can make you budget, prevent any unexpected situations, and make wiser hiring choices.",
};

export default function PriceTrackingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
