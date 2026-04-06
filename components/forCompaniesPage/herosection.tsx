"use client";

import React, { useState } from "react";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { Technology } from "@/components/util/interface";
import CustomFloatableIcons from "@/components/shared/customFloatableIcons";
import HiringModal from "@/components/forCompaniesPage/HiringForms";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  technology: Technology[];
}

export default function HeroSection({
  title,
  subTitle,
  technology,
}: HeroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techIcons = technology.map((tech) => ({
    id: tech._id,
    src: tech.logo,
    alt: tech.name,
  }));

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
        <div className="flex flex-col items-center justify-center gap-4 pt-10 pb-6 md:pt-24 md:pb-24 lg:pt-24 lg:pb-20">
          <h1 className="text-white font-semibold text-lg md:text-xl lg:text-2xl text-center">
            Hire Certified <span className="text-brand-600">{title}</span>
          </h1>
          <div className="text-[#D2D0DD] text-sm xs:text-base md:text-lg lg:text-lg text-center max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl px-4">
            {subTitle}
          </div>
          {/* Button to open modal */}
          <ShimmerButton
            className="btn-primary mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Hire {title}
          </ShimmerButton>
        </div>
      </div>
      {/* Modal */}
      <HiringModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      />
    </section>
  );
}
