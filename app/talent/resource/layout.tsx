import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI Virtual Assistance - GenAI, Freelance & Work From Anywhere",
  description:
    "Explore top developer tools, insightful blogs, and curated talent resources. Stay ahead in tech with HYI.AI's hub for developers and coders.",
};

export default function TalentResourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
