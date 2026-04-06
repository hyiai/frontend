"use client";

import purpleDisc from "@/assets/application-solutions/icons/purple-disc.svg";
import Image from "next/image";
import CustomWrapper from "@/components/shared/customWrapper";
import {
  TargetIndustriesDetailsDataType,
  whyHyiData,
} from "@/components/data/target-industries";
import Lottie from "lottie-react";

export interface TargetIndustriesDetailsProps {
  data: TargetIndustriesDetailsDataType;
}

export default function TargetIndustriesDetails({
  data,
}: TargetIndustriesDetailsProps) {
  return (
    <CustomWrapper
      gapBetween="gap-10 md:gap-28"
      padding="px-4 py-6 pb-0 md:p-6"
    >
      {/* zero to Ai powered */}
      <div className="w-full flex flex-col gap-10 md:flex-row-reverse md:justify-around items-center">
        {/* content section */}
        <div className=" w-full md:w-1/2 flex flex-col gap-2">
          <h2 className="hyi-h2">{data.zeroToAi.title}</h2>
          <ul className="flex flex-col gap-3 list-disc pl-6">
            <li className="hyi-p">{data.zeroToAi.startupDescription}</li>
            <li className="hyi-p">{data.zeroToAi.enterpriseDescription}</li>
          </ul>
        </div>
        <div className="w-full flex items-start md:w-1/2 lg:w-1/3">
          <div className="w-fit h-fit">
            <Lottie
              animationData={JSON.parse(data.zeroToAi.image as string)}
              loop
              autoplay
              className="aspect-[2/2] flex items-start"
            />
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 max-w-[337px] max-h-[334px]">
          <Image
            src={data.zeroToAi.image}
            width={337}
            height={334}
            alt="our ai expertise"
            className="w-full h-auto radius-lg"
          />
        </div> */}
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* our Ai expertise */}
        <div className="group flex flex-col gap-3 rounded-xl p-4 h-full glass-gradient-hover-effect">
          <h2 className="hyi-h2">{data.aiExpertise.title}</h2>
          <p className="hyi-p">{data.aiExpertise.subtitle}</p>
          {/* list items */}
          <ul className="flex flex-col gap-3">
            {data.aiExpertise.items.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col items-start gap-3">
                  <h3 className="hyi-h3 font-medium">{item.title}</h3>
                  <p className="hyi-p">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Advance use cases */}
        <div className="group flex flex-col gap-3 rounded-xl p-4 h-full glass-gradient-hover-effect">
          <h2 className="hyi-h2">{data.advancedUseCases.title}</h2>
          <p className="hyi-p mb-2">{data.advancedUseCases.subtitle}</p>
          {/* list items */}
          <ul className="flex flex-col gap-3">
            {data.advancedUseCases.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="hyi-h3 font-medium">{item.title}</h3>
                  <p className="hyi-p">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="w-full flex flex-col md:flex-row-reverse items-start justify-between gap-10 md:gap-17"> */}
      {/* content section */}

      {/* <div className="w-full md:w-1/2 max-w-[600px] max-h-[400px]">
                    <Image src={data.advancedUseCases.image} width={600} height={400} alt="partner with us" className="w-full h-auto radius-2xl" />
                </div> */}
      {/* </div> */}

      {/* Why HYI.AI? */}
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-17">
        {/* content section */}
        <div className=" w-full md:w-1/2 flex flex-col gap-4 md:mt-6">
          <h2 className="hyi-h2">{whyHyiData.title}</h2>
          <p className="hyi-p">{whyHyiData.description}</p>
          {/* list items */}
          <ul className="mt-1 flex flex-col gap-4">
            {whyHyiData.items.map((item, index) => (
              <li key={index} className="flex flex-col items-start gap-3">
                <div className="flex items-start gap-3">
                  <Image src={purpleDisc} alt="disc" width={20} height={20} />
                  <p className="hyi-p font-bold">{item.title}</p>
                </div>
                <p className="hyi-p">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 max-w-[644px] mb-10">
          <Image
            src={whyHyiData.image}
            alt="partner with us"
            className="w-full h-auto"
          />
        </div>
      </div>
    </CustomWrapper>
  );
}
