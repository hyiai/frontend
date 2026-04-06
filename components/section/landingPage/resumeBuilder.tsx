import { resumeBuilderData } from "@/components/data/landingPage";
import CustomParagraph from "@/components/shared/customParagraph";
import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import React from "react";

export default function ResumeBuilder() {
  return (
    <div className="relative overflow-hidden isolate">
      <div className="flex pointer-events-none absolute top-[70%] left-[53%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2 lg:hidden">
        <div className="h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <CustomWrapper divStyle="gap-5 lg:flex-row">
        <div className="w-full flex flex-col text-center gap-6 lg:w-1/2 lg:text-left lg:gap-8">
          <div className="flex justify-start flex-col gap-2">
            <h2 className="hyi-h2">{resumeBuilderData.heading}</h2>
            <p className="hyi-p">{resumeBuilderData.text}</p>
          </div>
          <div className="w-full flex justify-center lg:hidden">
            <div className="w-full flex flex-col gap-2 md:w-4/5">
              <Image
                src={resumeBuilderData.image}
                width={640}
                height={439}
                alt="Resume Builder price"
              />
              <p className="text-sm text-dark_mode-300 cursor-default">
                Deny, Ethan and{" "}
                <span className="font-bold text-dark_mode-100">
                  hundreds of thousands
                </span>{" "}
                of Talents have succeeded get hired and accelerating their
                careers with HYI.AI
              </p>
            </div>
          </div>
          <div className="flex flex-col border border-dark_mode-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.012),rgba(255,255,255,0.04))] backdrop-blur-md shadow-lg p-4 rounded-xl gap-2.5 lg:bg-none lg:p-0 lg:border-0">
            <h3 className="hyi-h3">{resumeBuilderData.subHeading}</h3>
            <CustomParagraph paragraph={resumeBuilderData.subText} />
          </div>
        </div>
        <div className="hidden w-full lg:flex justify-center lg:w-1/2 lg:justify-end">
          <div className="w-full flex flex-col gap-2 md:w-4/5">
            <Image
              src={resumeBuilderData.image}
              width={517}
              height={420}
              alt="Resume Builder price"
            />
            <p className="text-sm text-dark_mode-300 cursor-default">
              Deny, Ethan and{" "}
              <span className="font-bold text-dark_mode-100">
                hundreds of thousands
              </span>{" "}
              of Talents have succeeded get hired and accelerating their careers
              with HYI.AI
            </p>
          </div>
        </div>
      </CustomWrapper>
    </div>
  );
}
