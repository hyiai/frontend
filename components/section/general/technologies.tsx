import React from "react";
import Image from "next/image";
import CustomSwiper from "@/components/shared/customSlider";
import CustomWrapper from "@/components/shared/customWrapper";
import { techSwiperOne, techSwiperTwo } from "@/components/data/landingPage";

export default function Technologies() {
  return (
    <CustomWrapper gapBetween="gap-4">
      <CustomSwiper
        items={techSwiperOne.map((tech) => (
          <div
            key={tech._id}
            className="w-[74px] h-[74px]  flex items-center justify-center rounded-2xl tech-gardient"
          >
            <Image
              src={tech.software}
              alt="Software Icon"
              width={44}
              height={44}
            />
          </div>
        ))}
        speed={0.5}
        height="h-[74px]"
        hasOnHoverStop={false}
        minWidth="min-w-[74px]"
      />
      <CustomSwiper
        items={techSwiperTwo.map((tech) => (
          <div
            key={tech._id}
            className="w-[74px] h-[74px]  flex items-center justify-center rounded-2xl tech-gardient"
          >
            <Image
              src={tech.software}
              alt="Software Icon"
              width={tech._id === "tech-10" ? 29 : 44}
              height={44}
            />
          </div>
        ))}
        speed={0.3}
        height="h-[74px]"
        hasOnHoverStop={false}
        minWidth="min-w-[74px]"
        slideFromRightToLeft={false}
      />
    </CustomWrapper>
  );
}
