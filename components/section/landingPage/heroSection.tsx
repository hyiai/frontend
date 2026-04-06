"use client";

import Image from "next/image";
import HeroMapImage from "@/public/Hero-map.png";
import HeroMapGif from "@/assets/landingPage/images/Hero-gif-03.gif";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
// import CustomRotatingHeadings from "@/components/shared/customRotatingHeadings";
// import CustomTypingHeadings from "@/components/shared/customTypingHeading";
import TypingAnimation from "./typingAnimation";
import HiringModal from "@/components/forCompaniesPage/HiringForms";
import { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex items-center py-12 px-4 lg:py-0 lg:px-0">
      <div className="flex flex-col items-center text-center z-10 gap-7 lg:items-start lg:text-left lg:-mr-40 xl:-mr-50">
        <div className="w-full min-h-[124px] min-w-[330px] transition-all duration-500 ease-in-out overflow-hidden min-[410px]:min-w-[400px] min-[768px]:min-h-[140px] md:min-w-[450px] md:max-w-[450px] flex flex-col gap-3">
          <TypingAnimation />
        </div>
        {/* <CustomRotatingHeadings>
          <div className="w-full flex flex-col gap-3">
            <h1 className="flex flex-col text-2xl font-semibold capitalize gap-2 md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Hire Top Virtual Assistance
              </span>{" "}
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                for Your Startup Success.
              </span>
            </h1>
            <p className="text-sm text-dark_mode-300 text-wrap md:text-base">
              Streamline Your Operations, Save Time, and Focus on What Matters
              Most.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="flex flex-col text-2xl font-semibold capitalize gap-2 md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Hire Top Verified Talent
              </span>{" "}
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Globally/Worldwide.
              </span>
            </h1>
            <p className="text-sm text-dark_mode-300 text-wrap md:text-base">
              Trusted Experts. Instant Access,Smart, Secure and Precision Hiring
              Powered by AI
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="flex flex-col text-2xl font-semibold capitalize gap-2 md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Active Workflow Progress
              </span>{" "}
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Monitoring And Tracking.
              </span>
            </h1>
            <p className="text-sm text-dark_mode-300 text-wrap md:text-base">
              24/7 dedicated support, easy communication, and productivity
              reports.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h1 className="flex flex-col text-2xl font-semibold capitalize gap-2 md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
                Build Your Remote Team,
              </span>{" "}
              <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Just a Click Away.
              </span>
            </h1>
            <p className="text-sm text-dark_mode-300 text-wrap md:text-base">
              Access a global workforce and elevate your business with
              world-class remote professionals.
            </p>
          </div>
        </CustomRotatingHeadings> */}
        <ShimmerButton className="px-7" onClick={() => setIsModalOpen(true)}>
          Hire Talent
        </ShimmerButton>
      </div>
      <div className="hidden z-5 lg:flex lg:relative lg:isolate lg:7/12">
        <Image src={HeroMapImage} alt="World map" fetchPriority="high" />
        <Image
          src={HeroMapGif}
          alt="People Network world wide"
          className="absolute inset-0"
          fetchPriority="high"
        />
      </div>
      <HiringModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={"Talent"}
      />
    </div>
  );
}
