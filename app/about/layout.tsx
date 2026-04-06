import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About HYI.AI | Virtual Assistant, GenAI, AGI Training, GCC",
  description:
    "Discover HYI.AI - your hub for Virtual Assistants, GenAI, AGI Training and Custom Deployment. Scalable AI solutions for startups and enterprises.",
};

export default function AboutPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}