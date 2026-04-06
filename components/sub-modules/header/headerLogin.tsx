"use client";
import React, { useState } from "react";

import CustomButton from "@/components/shared/customButton";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// import HeaderButtons from "@/components/sub-modules/header/headerButtons";

export default function HeaderLogin() {
  const [dropDownLogin, setDropDownLogin] = useState(false);
  const [dropDownSignup, setDropDownSignup] = useState(false);

  return (
    <div className="hidden min-[1360px]:flex min-[1360px]:gap-4">
      <div
        className="relative w-fit h-fit"
        onMouseEnter={() => setDropDownSignup(true)}
        onMouseLeave={() => setDropDownSignup(false)}
      >
        <CustomButton otherCSSProperty="flex items-center gap-1.5 py-2.5 mb-2">
          Get Started <ChevronDown size={20} className="text-white" />
        </CustomButton>
        {dropDownSignup && (
          <div className="absolute top-full right-0 max-w-[85vw] flex flex-col bg-black/20 backdrop-blur-md  rounded-lg border border-white/20 shadow-lg z-50 overflow-auto overflow-x-hidden transition-all duration-200 ease-out whitespace-nowrap">
            <div
              className={
                "w-full flex flex-col justify-center rounded-md border border-white/0 hover:bg-white/7 p-4 px-3 py-2.5 gap-2.5"
              }
            >
              <div>
                <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Register as a Talent/Freelancer
                </h2>
                <p className="text-[10px] text-dark_mode-300">
                  Showcase your skills. Highlight your expertise.
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <Link
                  href={"https://youtu.be/n7BQfAV28tg?feature=shared"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark_mode-300 hover:underline hover:underline-offset-4"
                >
                  <p className="text-xs font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    Walkthrough Video
                  </p>
                </Link>
                <Link
                  href={"https://va.hyi.ai/talent-signup"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton otherCSSProperty="text-[10px] px-5">
                    Register
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-white/15" />
            <div
              className={
                "w-full flex flex-col justify-center rounded-md border border-white/0 p-4 hover:bg-white/7 transition px-3 py-2.5 gap-2.5"
              }
            >
              <div>
                <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Register as a Company/Startups
                </h2>
                <p className="text-[10px] text-dark_mode-300">
                  Hire easily remote, hybrid, or in-office employees.
                </p>
              </div>
              <div className="w-full flex items-center justify-end">
                <Link
                  href={"https://va.hyi.ai/company-signup"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton otherCSSProperty="text-[10px] px-5">
                    Register
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="relative w-fit h-fit"
        onMouseEnter={() => setDropDownLogin(true)}
        onMouseLeave={() => setDropDownLogin(false)}
      >
        <ShimmerButton className="flex items-center gap-1.5 px-6 mb-2">
          Login <ChevronDown size={20} className="text-white" />
        </ShimmerButton>
        {dropDownLogin && (
          <div className="absolute top-full right-0 max-w-[85vw] flex flex-col bg-black/20 backdrop-blur-md  rounded-lg border border-white/20 shadow-lg z-50 overflow-auto overflow-x-hidden transition-all duration-200 ease-out whitespace-nowrap">
            <div
              className={
                "w-full flex flex-col justify-center rounded-md border border-white/0 hover:bg-white/7 p-4 px-3 py-2.5 gap-2.5"
              }
            >
              <div>
                <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Login as a Talent/Freelancer
                </h2>
                <p className="text-[10px] text-dark_mode-300">
                  Showcase your skills. Highlight your expertise.
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <Link
                  href={"https://youtu.be/n7BQfAV28tg?feature=shared"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark_mode-300 hover:underline hover:underline-offset-4"
                >
                  <p className="text-xs font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    Walkthrough Video
                  </p>
                </Link>
                <Link
                  href={"https://va.hyi.ai/talent-login"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton otherCSSProperty="text-[10px] px-5">
                    Login
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="w-full border-t-[1px] border-white/15" />
            <div
              className={
                "w-full flex flex-col justify-center rounded-md border border-white/0 p-4 hover:bg-white/7 transition px-3 py-2.5 gap-2.5"
              }
            >
              <div>
                <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Login as a Company/Startups
                </h2>
                <p className="text-[10px] text-dark_mode-300">
                  Hire easily remote, hybrid, or in-office employees.
                </p>
              </div>
              <div className="w-full flex items-center justify-end">
                <Link
                  href={"https://va.hyi.ai/company-login"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton otherCSSProperty="text-[10px] px-5">
                    Login
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <HeaderButtons /> */}
    </div>
  );
}
