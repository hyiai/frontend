import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Drive Measurable Value Through Strategic AI Adoption and Implementation",
  description:
    "Our system uses machine learning to find the perfect candidates based on your hiring history. As it learns, your hiring gets smarter, faster, and more successful.",
};

export default function StrategyAndPlanningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
