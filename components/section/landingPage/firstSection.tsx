"use client";

import dynamic from "next/dynamic";
import React from "react";
const MVPAnimationsComponent = dynamic(
  () => import("@/components/section/landingPage/mvpAnimations"),
  { ssr: false }
);
const Features = dynamic(
  () => import("@/components/section/landingPage/features"),
  { ssr: false }
);

export default function FirstSection() {
  return (
    <section className="w-full flex items-center justify-center overflow-hidden px-4 py-6 md:p-6 lg:py-8">
      <div className="w-full max-w-[1280px] flex flex-col bg-background relative isolate">
        <div className="flex pointer-events-none absolute top-[90%] left-[53%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2 lg:top-[75%] lg:left-[53%]">
          <div className="h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          <MVPAnimationsComponent />
          <Features />
        </div>
      </div>
    </section>
  );
}
