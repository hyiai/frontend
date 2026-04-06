import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HYI.AI",
  description:
    "HYI.AI Privacy Policy ensures transparency and data protection for all users.",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
