// components/HowToGetHiredCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import mvp_01 from "@/lotties/mvp-01.json";
import Lottie from "lottie-react";

export default function HowToGetHiredCard() {
  const steps = [
    {
      title: "Register your account",
      desc: "Submit your personal details to register your account.",
    },
    {
      title: "Complete your profile and work experience",
      desc: "Submit your resume and details to onboard.",
    },
    {
      title: "Qualify the assessments and interview to get verified",
      desc: "Let us match your skills to jobs.",
    },
    {
      title: "Get hired.",
      desc: "Get reviewed, interviewed, and hired—then start working.",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % steps.length);
    }, 1250);
    return () => clearInterval(id);
  }, [steps.length]);

  return (
    <div className="relative w-full mt-1 md:mt-0 rounded-md  overflow-hidden backdrop-blur-sm border border-white/10">
      <div className="text-center pt-10">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
          How to get hired at HYI.AI
        </h2>
        <p className="text-white/70 text-sm sm:text-base mt-2">
          Learn strategies to land your next role with confidence.
        </p>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10">
          <div className="w-full">
            <div
              className="relative w-full overflow-hidden rounded-md
                          aspect-[16/10] sm:aspect-[16/9] "
            >
              <Lottie
                animationData={mvp_01}
                loop
                autoplay
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-center">
            <ol className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              {steps.map((s, idx) => {
                const isChecked = idx <= active;
                return (
                  <li key={idx} className="flex gap-3 sm:gap-4 items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`grid place-items-center h-5 w-5 sm:h-6 sm:w-6 rounded-full border transition-colors duration-300 ${isChecked
                          ? "border-violet-400 bg-violet-500/50"
                          : "border-white/30 bg-white/5"
                          }`}
                      >
                        {isChecked ? (
                          <Check
                            size={12}
                            className="text-white sm:size-4"
                            strokeWidth={3}
                          />
                        ) : (
                          <span className="text-white/70" />
                        )}
                      </div>
                      {/* {idx < steps.length - 1 && (
                        <div
                          className={`mt-1 w-[2px] grow transition-colors duration-300 ${
                            idx < active ? "bg-violet-500/50" : "bg-white/15"
                          }`}
                        />
                      )} */}
                    </div>

                    <div className="flex-1">
                      <div
                        className={`text-sm sm:text-base font-medium ${isChecked ? "text-white" : "text-white/90"
                          }`}
                      >
                        {s.title}
                      </div>
                      <p className="text-xs sm:text-sm text-white/60 mt-1">
                        {s.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
