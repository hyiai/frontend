"use client";

// React Imports
import React, { useState } from "react";

// Next Imports
// import Image from "next/image";

// Components Imports
import CustomButton from "@/components/shared/customButton";

// import TalentIcon from "@/assets/shared/talent.svg";
// import CompanyIcon from "@/assets/shared/company.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomDialog from "@/components/shared/customDialog";
import { ShimmerButton } from "@/components/shared/customShimmerButton";

const authOptions = [
  {
    id: 1,
    title: "Navigate the path to unparalleled opportunities!",
    value: "talent",
    description: [
      "Build a professional profile that highlights your expertise.",
      "Discover remote, part-time, and full-time job opportunities.",
      "Connect with leading companies, startups, and entrepreneurs.",
      "Grow your career with access to exclusive resources and insights.",
    ],
    // icon: <Image src={TalentIcon} alt="Talent Icon" />,
  },
  {
    id: 2,
    title: "Effortless hiring: Find top-rated talent in just a few steps!",
    value: "company",
    description: [
      "Access a diverse pool of skilled professionals across industries.",
      "Hire remote, hybrid, or in-office employees with ease.",
      "Simplify recruitment with a seamless and efficient hiring process.",
      "Scale your team quickly without the hassle of traditional hiring.",
    ],
    // icon: <Image src={CompanyIcon} alt="Company Icon" />,
  },
];

export default function HeaderButtons() {
  const [selectedSignupIndex, setSelectedSignupIndex] = useState<number>(0);
  const [selectedLoginIndex, setSelectedLoginIndex] = useState<number>(0);
  const router = useRouter();
  return (
    <section className="w-full h-full flex flex-col lg:flex-row-reverse gap-3">
      <CustomDialog
        dialogTitle="Login options"
        dialogDescription="Connecting Visionaries with Opportunities"
        dialogContentCSS="w-[95dvw] max-w-6xl max-h-[90dvh] overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-12 glass-gradient-full"
        content={
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center pb-4 sm:pb-6 md:pb-10 gap-1 sm:gap-1.5">
              <h2 className="text-xl sm:text-2xl capitalize md:text-3xl font-bold text-dark_mode-100 text-center">
                Connecting Visionaries with Opportunities
              </h2>
              <p className="text-base sm:text-lg font-medium text-dark_mode-300 text-center">
                Select your user type to get started
              </p>
            </div>
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {authOptions.map((option, index) => (
                <Card
                  key={index}
                  onClick={() => setSelectedLoginIndex(index)}
                  className={`h-full bg-white/10 rounded-xl overflow-hidden select-none border-2 transition-all hover:scale-[1.03] duration-300 ease-in-out will-change-contents ${
                    selectedLoginIndex === index
                      ? "border-white/60"
                      : "border-transparent"
                  }`}
                >
                  <CardContent className="w-full h-full flex flex-col justify-between px-3 sm:px-4 sm:py-4 md:py-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="w-full h-fit gap-3 sm:gap-4 flex flex-col">
                      <div className="flex gap-2 items-center">
                        {/* <div className="w-6 h-6">{option.icon}</div> */}
                        <p className="text-lg sm:text-xl bg-gradient-to-b from-[#B6B3C9] to-[#7046E6] bg-clip-text text-transparent font-semibold">
                          {option.id === 1
                            ? "Talent"
                            : "Companies / Individuals"}
                        </p>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-dark_mode-100 capitalize">
                        {option.title}
                      </h3>
                      <ul className="text-xs sm:text-sm font-normal text-dark_mode-300 space-y-1.5 sm:space-y-2 list-disc list-outside pl-4 sm:pl-5">
                        {option.description.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full flex justify-center">
                      <Button
                        className="flex justify-center items-center gap-1.5 w-full sm:w-auto bg-[#724de0] cursor-pointer"
                        onClick={() => {
                          router.push(
                            `https://va.hyi.ai/talent-login`
                          );
                        }}
                      >
                        <span className="text-sm font-medium text-white">
                          Get started
                        </span>
                        <ChevronRight width={16} height={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        }
      >
        <ShimmerButton className="btn-primary px-6">Login</ShimmerButton>
        {/* <CustomButton otherCSSProperty="btn-secondary">Login</CustomButton> */}
      </CustomDialog>
      <CustomDialog
        dialogTitle="Signup options"
        dialogDescription="Connecting Visionaries with Opportunities"
        dialogContentCSS="w-[95dvw] max-w-[1200px] h-fit max-h-[90dvh] overflow-auto p-4 sm:p-6 md:p-8 lg:p-12 glass-gradient-full"
        content={
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center pb-4 sm:pb-6 md:pb-10 gap-1 sm:gap-1.5">
              <h2 className="text-xl sm:text-2xl capitalize md:text-3xl font-bold text-dark_mode-100 text-center">
                Connecting Visionaries with Opportunities
              </h2>
              <p className="text-base sm:text-lg font-medium text-dark_mode-300 text-center">
                Select your user type to get started
              </p>
            </div>
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {authOptions.map((option, index) => (
                <Card
                  key={index}
                  onClick={() => setSelectedSignupIndex(index)}
                  className={`h-full bg-white/10 rounded-xl overflow-hidden select-none border-2 transition-all hover:scale-[1.03] duration-300 ease-in-out will-change-contents ${
                    selectedSignupIndex === index
                      ? "border-white/60"
                      : "border-transparent"
                  }`}
                >
                  <CardContent className="w-full h-full flex flex-col justify-between px-3 sm:px-4 sm:py-4 md:py-2 gap-4 sm:gap-6 md:gap-8">
                    <div className="w-full h-fit gap-3 sm:gap-4 flex flex-col">
                      <div className="flex gap-2 items-center">
                        {/* <div className="w-6 h-6">{option.icon}</div> */}
                        <p className="text-lg sm:text-xl bg-gradient-to-b from-[#B6B3C9] to-[#7046E6] bg-clip-text text-transparent font-semibold">
                          {option.id === 1
                            ? "Talent"
                            : "Companies / Individuals"}
                        </p>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white capitalize">
                        {option.title}
                      </h3>
                      <ul className="text-xs sm:text-sm font-normal text-dark_mode-300 space-y-1.5 sm:space-y-2 list-disc list-outside pl-4 sm:pl-5">
                        {option.description.map((text, i) => (
                          <li key={i}>{text}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full flex justify-center">
                      <Button
                        className="flex justify-center items-center gap-1.5 w-full sm:w-auto bg-[#724de0] cursor-pointer"
                        onClick={() => {
                          router.push(
                            `https://va.hyi.ai/${option.value}-signup`
                          );
                        }}
                      >
                        <span className="text-sm font-medium text-white">
                          Get started
                        </span>
                        <ChevronRight width={16} height={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        }
      >
        <CustomButton>Get Started</CustomButton>
      </CustomDialog>
    </section>
  );
}
