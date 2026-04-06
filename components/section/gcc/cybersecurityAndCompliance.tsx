import {
  cybersecurityData,
  variousFeatures,
  gccAdvisoryDetails,
} from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import Link from "next/link";

export default function CybersecurityAndCompliance() {
  return (
    <CustomWrapper
      divStyle="flex-col gap-10 w-full items-center justify-center"
      gapBetween="gap-14 md:gap-14"
      padding="px-3 md:px-4 my-0 py-6"
    >
      <div className="flex flex-col md:flex-row gap-8 relative items-center">
        {/* Left side  */}
        <div className="w-full lg:flex-3 md:max-w-[60%]">
          <h2 className="hyi-h2 mb-3">{cybersecurityData.title}</h2>
          <p className="hyi-p leading-relaxed">
            {cybersecurityData.description}
          </p>
        </div>

        {/* Right side*/}
        <div className="w-full flex-1 flex flex-row gap-6 md:self-center z-10">
          {cybersecurityData.statistics.map((stat, index) => (
            <div key={index} className="flex-1 border-l-2 border-gray-400 pl-6">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Various amount of features */}
      <div className="overflow-hidden md:overflow-visible grid grid-cols-1 md:grid-cols-4 gap-6 md:mx-auto mt-0 md:mt-10 relative">
        {/* First gradient*/}
        <div className="pointer-events-none absolute top-[500px] left-1/2 md:top-1/2 md:left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[300px] h-[1600px] md:w-[900px] md:h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        {/* Second purple gradient*/}
        <div className=" pointer-events-none absolute top-[750px] left-1/2 md:top-[30%] md:left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[300px] h-[700px] md:w-[800px] md:h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(112,0,255,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="md:min-h-[136px] rounded-[10px] p-3 pb-0 md:pt-0 md:pb-3 relative flex items-start justify-start">
          {/* Text */}
          <h4 className="hyi-h4">{variousFeatures.title}</h4>
        </div>
        {/* First 6 smaller cards with glass-gradient */}
        {variousFeatures.features.map((feature, index) => (
          <div
            key={index}
            className="min-h-[136px] glass-gradient rounded-[10px]  text-white hover:cursor-pointer
               relative overflow-hidden group"
          >
            <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />

            <div className="flex flex-col px-6 py-5 z-10">
              {/* Icon */}
              <div className="mb-2">
                <Image
                  src={feature.icon}
                  height={38}
                  width={38}
                  alt={feature.alt}
                />
              </div>
              {/* Text */}
              <p className="hyi-p">{feature.text}</p>
            </div>
          </div>
        ))}

        {/* Last wider card using DarkPurpleGradientCard */}
        <div className="md:col-span-1 min-h-[136px] rounded-xl overflow-hidden">
          <div className="h-full w-full text-white relative bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%]">
            {/* Content */}
            <div className="px-6 py-4 flex justify-between items-start h-full">
              <div className="flex-1 mt-2 mr-3">
                <h4 className="hyi-h4 font-normal">
                  {variousFeatures.redirectFeature.text}
                </h4>
              </div>
              <Link target="_blank" href="/talk-to-our-expert">
                <Image
                  src={variousFeatures.redirectFeature.icon}
                  height={40}
                  width={40}
                  alt="Arrow Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Services GCC Advisory */}
      <div className="flex flex-col lg:flex-row gap-8 relative items-center">
        {/* Left side */}
        <div className="w-full lg:flex-3">
          <h2 className="hyi-h2 mb-6 md:pt-8">{gccAdvisoryDetails.title}</h2>
          <p className="hyi-p leading-relaxed text-gray-300">
            {gccAdvisoryDetails.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6 ">
            {gccAdvisoryDetails.points.map((point, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <h3 className="hyi-h3 text-gray-300">{`0${index + 1}`}</h3>
                <p className="hyi-p text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image placeholder */}
        <div className="flex justify-center items-center md:items-start">
          <Image
            src={gccAdvisoryDetails.image}
            height={457}
            width={531}
            alt="Services GCC Advisory"
            className="rounded-lg"
          />
        </div>
      </div>
    </CustomWrapper>
  );
}
