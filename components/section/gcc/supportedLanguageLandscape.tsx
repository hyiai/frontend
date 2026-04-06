import { supporTechnologyLandscape } from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";
import engagementModels from "@/assets/gcc/images/customization-model-engagement.webp";

export default function SupportedLanguageLandscape() {
  return (
    <CustomWrapper
      divStyle="flex-col gap-10 w-full mt-4 items-center justify-center"
      gapBetween="gap-6"
      padding="px-4 my-0 py-6 pb-0"
    >
      {/* Header Section */}
      <div className="w-full flex-col items-center text-center">
        <h2 className="hyi-h2 mb-4">{supporTechnologyLandscape.title}</h2>
        <div className=" md:max-w-[60%] flex justify-center mx-auto">
          <p className="hyi-p text-gray-300">
            {supporTechnologyLandscape.description}
          </p>
        </div>
      </div>

      {/* Application Development, Maintenance & Support Services */}
      <div className="w-full">
        <h4 className="hyi-h4 mb-2 text-left font-semibold">
          {supporTechnologyLandscape.applicationServices.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
          {supporTechnologyLandscape.applicationServices.services.map(
            (service, index) => (
              <div
                key={index}
                className={`flex min-h-[136px] p-6 rounded-3xl border border-white/10 backdrop-blur-sm bg-cover bg-center bg-no-repeat bg-[url('/Card-bg-11.png')]`}
              >
                {/* Icon */}
                <div className="flex items-start gap-2 w-full h-full">
                  <div>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    {/* Title */}
                    <h4 className="hyi-h4 mb-2 text-white font-semibold">
                      {service.title}
                    </h4>
                    {/* description */}
                    <p className="hyi-p text-gray-300 mt-auto">
                      {service.examples}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Infrastructure Managed Services */}
      <div className="w-full">
        <h4 className="hyi-h4 mb-5 text-left">
          {supporTechnologyLandscape.infrastructureServices.title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mx-auto">
          {supporTechnologyLandscape.infrastructureServices.services.map(
            (service, index) => (
              <div
                key={index}
                className={
                  "flex min-h-[136px] p-6 rounded-3xl border border-white/10 backdrop-blur-sm bg-cover bg-center bg-no-repeat bg-[url('/Card-bg-11.png')]"
                }
              >
                {/* Icon */}
                <div className="flex items-start gap-3 w-full h-full">
                  <div>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    {/* Title */}
                    <h4 className="hyi-h4 mb-2 text-white font-semibold">
                      {service.title}
                    </h4>
                    {/* description */}
                    <p className=" text-gray-300 mt-auto text-base md:text-lg">
                      {service.examples}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* Our customizable engagement models */}
      <div className="hidden md:flex text-center flex-col gap-10 my-0 py-6">
        <h2 className="hyi-h2 mb-2">Our customizable engagement models</h2>
        <div className="w-full sm:h-[250px] lg:h-[681px] flex justify-center items-center relative rounded-2xl">
          <Image
            src={engagementModels}
            alt="engagement models"
            className="relative z-10 rounded-xl "
          />
        </div>
      </div>
    </CustomWrapper>
  );
}
