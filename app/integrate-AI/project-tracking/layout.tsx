import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Visibility Across The Project Lifestyle",
  description:
    "With HYI.AI, you get live project updates. Our tool tracks tasks and progress, giving you one reliable place to see the exact status of your project anytime.",
};

export default function ProjectTrackingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
