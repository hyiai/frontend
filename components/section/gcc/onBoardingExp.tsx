import {
  onBoardingExperienceSectionData,
  GccServicesSectionData,
} from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import React from "react";

export default function OnBoardingExp() {
  return (
    <div className="overflow-hidden flex flex-col items-start md:items-center justify-center w-full gap-0 px-3">
      <CustomWrapper divStyle="gap-5 ml-2 md:flex-row my-0 py-6 md:py-13 lg:py-15">
        <div className="w-full flex flex-col gap-6 md:w-1/2 md:gap-8">
          <div className="flex justify-start flex-col gap-5">
            {onBoardingExperienceSectionData.content.map((content) => (
              <div key={content._id} className="flex flex-col gap-5">
                <h2 className="hyi-h2">{content.heading}</h2>
                <ul className="list-disc flex flex-col gap-3 md:gap-5 pl-6">
                  {content.point.map((point, index) => (
                    <li key={index} className="hyi-p">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-9 md:mt-0 w-full flex md:w-1/2 md:justify-end">
          {/* gradient */}
          <div className="w-full flex flex-col gap-2 md:w-full relative isolate">
            <div className=" md:flex pointer-events-none absolute top-1/2 left-1/2 items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[90vw] h-[650px] md:w-[80vw] md:h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
            </div>
            <Image
              src={onBoardingExperienceSectionData.image}
              height={539}
              width={626}
              alt="On boarding section image"
              className="w-full object-contain z-10"
            />
          </div>
        </div>
      </CustomWrapper>

      <CustomWrapper divStyle="gap-5 md:flex-row-reverse flex-start" padding="px-4 my-0 py-6 md:py-4">
        <div className=" w-full flex flex-col gap-6 md:w-1/2 md:gap-4 text-center md:text-start md:justify-center">
          <h2 className="hyi-h2">{GccServicesSectionData.title}</h2>
          <p className="hyi-p">{GccServicesSectionData.subtitle}</p>
        </div>
        <div className="w-full flex md:w-1/2 md:justify-start">
          <Image
            src={GccServicesSectionData.image}
            alt="GCC Services section image"
            className="w-full md:w-4/5 object-contain"
          />
        </div>
      </CustomWrapper>
    </div>
  );
}
