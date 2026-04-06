"use client";

import dynamic from "next/dynamic";
const ResumeBuilder = dynamic(
  () => import("@/components/section/landingPage/resumeBuilder"),
  { ssr: false }
);
const GCC = dynamic(() => import("@/components/section/landingPage/gcc"), {
  ssr: false,
});

export default function SecondSection() {
  return (
    <>
      <ResumeBuilder />
      <GCC />
    </>
  );
}
