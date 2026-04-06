"use client";

import React from "react";
import Image from "next/image";
import CustomFloatableIcons from "@/components/shared/customFloatableIcons";
import Verified from "@/assets/common/verified.png";
import Gitlab from "@/assets/career/gitlab.png";
import Postman from "@/assets/career/postman.png";
import Meet from "@/assets/career/meet.png";
import Cypress from "@/assets/career/cypress.png";
import Kubernetes from "@/assets/career/kubernetes.png";
import OpenCv from "@/assets/career/openCv.png";
import PHP from "@/assets/career/php.png";
import Figma from "@/assets/career/figma.png";

const techIcons = [
  { id: "gitlab", src: Gitlab, alt: "Gitlab" },
  { id: "postman", src: Postman, alt: "Postman" },
  { id: "meet", src: Meet, alt: "Meet" },
  { id: "cypress", src: Cypress, alt: "Cypress" },
  { id: "kubernetes", src: Kubernetes, alt: "Kubernetes" },
  { id: "openCv", src: OpenCv, alt: "OpenCv" },
  { id: "php", src: PHP, alt: "PHP" },
  { id: "figma", src: Figma, alt: "Figma" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center px-4 py-4 md:px-8 md:py-0 lg:items-center">
      {/* Floating icons background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <CustomFloatableIcons
          icons={techIcons}
          overlayMode={true}
          showContent={false}
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-20">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold text-center">
            Join{" "}
            <span className="text-brand-600">
              Our HYI.AI Team
            </span>
          </h1>
          <div className="text-dark_mode-300 text-base text-center max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl px-4 mb-2">
            We would love to learn more about you. Please share your CV to
            hr@hyi.ai
          </div>
          <div className="text-dark_mode-100 text-base font-semibold flex flex-wrap items-center gap-6 mb-2">
            <span className="inline-flex items-center gap-2">
              <Image src={Verified} alt="verified" className="w-5 h-5" />
              Update Everyday
            </span>
            <span className="inline-flex items-center gap-2">
              <Image src={Verified} alt="verified" className="w-5 h-5" />
              Easy Application
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold text-center">
            Job Oppurtunity
          </div>
          <div className="text-[#535862] text-base md:text-lg text-center max-w-4xl px-4 mt-4">
            We connect top developers with exciting projects and companies in
            need of their expertise.
          </div>
        </div>
      </div>
    </section>
  );
}
