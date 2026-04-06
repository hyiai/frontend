"use client";

import CustomMultiTypingHeadings from "@/components/shared/customMultiTypingHeading";
import React, { useEffect, useState } from "react";

const textSets = [
  [
    "Hire Top  Virtual Assistance",
    "for Your  Startup Success.",
    "Streamline Your Operations, Save Time, and Focus on What Matters Most",
  ],
  [
    "Hire Top Verified Talent",
    "Globally",
    "Trusted Experts. Instant Access, Smart, Secure and Precision Hiring Powered by AI",
  ],
  [
    "Build Your Remote Team,",
    "Just a Click Away",
    "Access a global workforce and elevate your business with world-class remote professionals.",
  ],
  [
    "Real-time Workflow Progress",
    "Monitoring And Tracking.",
    "24/7 dedicated support, easy communication, and productivity reports.",
  ],
];

export default function TypingAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted ? (
        <CustomMultiTypingHeadings textSets={textSets} />
      ) : (
        <div className="flex flex-col gap-2">
          <h2 className="flex flex-col text-2xl font-semibold capitalize cursor-default gap-2 lg:text-3xl">
            <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
              Hire Top Virtual Assistance
            </span>
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              for Your Startup Success.
            </span>
          </h2>
          <p className="text-sm text-dark_mode-300 md:text-base">
            Streamline Your Operations, Save Time, and Focus on What Matters
            Most
          </p>
        </div>
      )}
    </div>
  );
}
