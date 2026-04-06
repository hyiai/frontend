import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import { entitySetupComplianceData } from "@/components/data/gcc";

export default function EntitySetupCompliance() {
  return (
    <CustomWrapper divStyle=" flex flex-col items-center justify-center w-full gap-10 relative" padding="px-3 my-0 py-6 md:py-10 md:pb-6">
      {/* Gradience */}
      <div className=" flex pointer-events-none absolute top-[30%] left-1/2 md:top-1/2 md:left-1/2 items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="core-gradient w-[650px] h-[700px] md:w-[1000px] md:h-[1200px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>

      {/* Title and subtitle */}
      <div className="w-full flex flex-col items-center justify-center gap-3 z-10 text-center">
        <h2 className="hyi-h2">{entitySetupComplianceData.title}</h2>
        <p className="hyi-p md:max-w-[60%]">{entitySetupComplianceData.subtitle}</p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 z-10">
        {/* Left column */}
        <div className="order-2 md:order-1 flex flex-col justify-evenly gap-9 md:gap-11 md:w-1/4 w-full">
          {entitySetupComplianceData.leftFeatures.map((feature) => (
            <div key={feature._id} className="flex flex-col items-center md:items-start text-center md:text-start">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                className="hyi-icon mb-2"
              />
              <h4 className="hyi-h4 mb-1">{feature.title}</h4>
              <p className="hyi-p">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Center column */}
        <div className="order-1 md:order-2 flex justify-center items-center md:w-2/4 w-full z-10">
          <Image
            src={entitySetupComplianceData.image}
            alt="GCC Services Centre Image"
            width={641}
            height={603}
          />
        </div>

        {/* Right column */}
        <div className="order-3 md:order-3 flex flex-col justify-evenly gap-9 md:gap-11 md:w-1/4 w-full z-10">
          {entitySetupComplianceData.rightFeatures.map((feature) => (
            <div key={feature._id} className="flex flex-col items-center md:items-start text-center md:text-start">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                className="hyi-icon mb-2"
              />
              <h4 className="hyi-h4 mb-1">{feature.title}</h4>
              <p className="hyi-p items-center ">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </CustomWrapper>
  );
}
