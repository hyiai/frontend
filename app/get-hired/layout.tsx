import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Get Hired Online | Remote & Freelance Job Guide | HYI.AI",
  description:
    "Learn how to start freelancing and land online part-time or remote jobs with HYI.AI.",
};

export default function GetHiredLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
