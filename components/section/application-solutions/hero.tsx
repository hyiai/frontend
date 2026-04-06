"use client";

import { SectionOneType } from "@/components/data/application-solution";
import CustomWrapper from "@/components/shared/customWrapper";
import Lottie from "lottie-react";
//import { CloudCog } from "lucide-react";
//import Image from "next/image";

type HeroProps = {
  data: SectionOneType;
};

export default function Hero({ data }: HeroProps) {
  return (
    <CustomWrapper padding="px-4 py-6 md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center md:items-center">
        {/* left section */}
        <div className="flex flex-col gap-3 w-full max-w-2xl md:max-w-[50%] mx-auto md:mx-0 text-center md:text-left">
          <h1 className="hyi-h1 ">{data.title}</h1>
          <p className="hyi-p">{data.description}</p>
        </div>

        {/* right section */}
        {/* <Image
                    src={data.coverImage}
                    alt={data.alt}
                    width={400}
                    height={265}
                    className="w-full max-w-[400px] h-auto"
                /> */}
        <div className="w-full flex items-start md:w-1/2 lg:w-1/3">
        <div className="w-fit h-fit">
          <Lottie
            animationData={JSON.parse(data.coverImage as string)}
            loop
            autoplay
            className="aspect-[2/2] flex items-start"
          />
          </div>
        </div>
      </div>
    </CustomWrapper>
  );
}
