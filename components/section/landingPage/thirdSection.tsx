import dynamic from "next/dynamic";
import React from "react";
const HowHYIWorks = dynamic(
  () => import("@/components/section/landingPage/howHYIWorks")
);
const CaseStudies = dynamic(
  () => import("@/components/section/general/caseStudies")
);
const Testimonials = dynamic(
  () => import("@/components/section/general/testimonials")
);

export default function ThirdSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden gap-12 md:gap-16 py-6 md:py-6 lg:py-8">
      <HowHYIWorks />
      <div className=" md:px-6">
        <div className="w-full max-w-[1280px] flex flex-col bg-background relative isolate">
          <div className="flex flex-col gap-12 md:gap-16">
            <div className="relative">
              <CaseStudies />
              <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 flex items-center justify-center -z-1">
                <div className="w-[600px] h-[600px] md:w-[950px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
              </div>
            </div>
            <div className="w-full">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
