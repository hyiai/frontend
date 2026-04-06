import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Insights and Reporting",
  description:
    "Our visual dashboards provide you with real time insights, alerts and performance summary. Our AI identifies patterns and anticipates problems in advance.",
};

export default function KPILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
