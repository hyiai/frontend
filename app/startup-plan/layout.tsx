import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYI.AI Startup Plan - Scale with Verified Talent & Expert Support",
  description:
    "Accelerate your startup's growth with HYI.AI's Startup Plan. Access 5M+ verified professionals, dedicated managers and flexible global hiring solutions.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
