"use client";

import plan_talent from "@/assets/plan/plan-talent.json";
import plan_rm from "@/assets/plan/plan-rm.json";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import Link from "next/link";
import Lottie from "lottie-react";

export default function HireGlobally() {
  return (
    <div className="mx-auto max-w-7xl text-white space-y-4 mt-8 sm:mt-10 md:mt-12 lg:mt-20">
      {/* First Section */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-start mb-16 max-w-lg">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 mt-12 lg:mt-0 capitalize">
            <span className="text-brand-600">HYI.AI</span> is a truly global
            platform, connecting businesses with verified talent worldwide.
          </h1>
          <p className="text-dark_mode-300">
            We believe in building with passion and purpose by bringing together
            a diverse team and nurturing a culture where talent thrives.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <Link
              href="/talk-to-our-expert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton>Talk to our expert</ShimmerButton>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Lottie animationData={plan_talent} loop autoplay />
        </div>
      </div>
      {/* Second Section */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center mb-0 md:mb-6 lg:mb-12">
        <div className="w-full">
          <Lottie
            animationData={plan_rm}
            loop
            autoplay
            className="w-full h-auto object-left"
          />
        </div>
        <div className="text-center lg:text-start mb-16 max-w-lg">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 mt-12 lg:mt-0 capitalize">
            Get personalized support with a dedicated relationship manager from{" "}
            <span className="text-brand-600">HYI.AI.</span>
          </h1>
          <p className="text-dark_mode-300">
            We believe in building with passion and purpose by bringing together
            a diverse team and nurturing a culture where talent thrives.
          </p>
          <div className="pt-4 flex justify-center lg:justify-start">
            <Link
              href="/talk-to-our-expert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton>Talk to our expert</ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
