"use client";

import dynamic from "next/dynamic";
const CWDLazyAnimationLoad = dynamic(
  () => import("@/components/section/landingPage/cwdLazyAnimationLoad"),
  { ssr: false }
);

export default function ConnectWithDevelopers() {
  return <CWDLazyAnimationLoad />;
}
