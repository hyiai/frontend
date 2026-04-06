import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Talent Matching With AI",
  description:
    "Our AI is intelligent enough to recommend the top talents. The system uses learnings on your previous hiring and project requirements that enable you to hire quicker and more precisely.",
};

export default function TalentMatchingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
