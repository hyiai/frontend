"use client";

import CustomWrapper from "@/components/shared/customWrapper";
// import Image from "next/image";

import {
  SectionThreeDataType,
  SectionTwoDataType,
} from "@/components/data/application-solution";
import Lottie from "lottie-react";

export interface SolutionNowProps {
  sectionTwo: SectionTwoDataType;
  sectionThree: SectionThreeDataType;
}

export default function SolutionNow({
  sectionTwo,
  sectionThree,
}: SolutionNowProps) {
  return (
    <CustomWrapper padding="px-4 py-5 md:px-6" gapBetween="gap-6">
      <div className="flex flex-col gap-2 text-center ">
        {/* Header and subheading */}
        <h2 className="hyi-h2">{sectionTwo.title}</h2>
        <p className="hyi-p">{sectionTwo.subTitle}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-4">
        {sectionTwo.smallerCards.map((item) => (
          <div
            key={item.value}
            className="h-full glass-gradient rounded-[10px] p-5 "
          >
            <div className="flex h-full w-full flex-col justify-start gap-1">
              <h3 className="hyi-h3">{item.value}</h3>
              <p className="hyi-p">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Two-column content */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mt-10 md:mt-20">
        {/* Left: content */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 lg:2/3">
          <h3 className="hyi-h2">{sectionThree.title}</h3>

          {sectionThree.para.map((item) => (
            <p className="hyi-p" key={item}>
              {item}
            </p>
          ))}
        </div>

        {/* Right: image */}
        <div className="w-full flex items-start md:w-1/2 lg:w-1/3">
          <div className="w-fit h-fit">
            <Lottie
              animationData={JSON.parse(sectionThree.image as string)}
              loop
              autoplay
              className="aspect-[2/2] flex items-start"
            />
          </div>
        </div>
        {/* <Image
                    src={sectionThree.image}
                    alt={sectionThree.imgAlt}
                    width={370}
                    height={400}
                    className="h-auto w-full md:w-[370px]"
                /> */}
      </div>
    </CustomWrapper>
  );
}
