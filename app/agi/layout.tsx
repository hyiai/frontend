import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial General Intelligence Course: AGI Training & Certification",
  description:
    "Learn the basics to advanced levels of artificial intelligence with hyi; this course will provide you with expert-level knowledge in AGI. Join now!",
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
