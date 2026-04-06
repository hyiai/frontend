import Image from "next/image";
import CustomWrapper from "@/components/shared/customWrapper";
import { insights } from "@/components/data/gcc";

export default function Insights() {
  const { customSoftwareDevelopment, aiAutomationInsights } = insights;

  return (
    <CustomWrapper divStyle="flex-col w-full" gapBetween="gap-12" padding="px-3 md:px-4 my-0 py-6 md:py-13 lg:py-15">
      {/* Custom Software Development Section */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-start relative">
        {/* Purple gradience*/}
        <div className=" overflow-hidden lg:overflow-visible pointer-events-none absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md-top-1/2  md:left-[40%] md:translate-x-0 z-0">
          <div className="w-[98vw] h-[700px] md:w-[800px] md:h-[800px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="flex-1 z-10">
          <div className="flex flex-col items-start mb-3">
            <h4 className="hyi-h4 font-semibold">{customSoftwareDevelopment.title}</h4>
          </div>
          <ul className="list-disc pl-6 text-base space-y-3">
            {customSoftwareDevelopment.points.map((point, idx) => (
              <li className="hyi-p" key={idx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex w-full justify-center items-center relative z-10">
          <Image
            width="485"
            height="321"
            src={customSoftwareDevelopment.image}
            alt="Software Development Illustration"
          />
        </div>
      </div>

      {/* AI, Automation & Insights Section */}
      <div className="flex flex-col-reverse md:flex-row-reverse gap-8 items-start relative">
        {/*Gradience*/}
        <div className="overflow-hidden lg:overflow-visible pointer-events-none absolute  top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-[40%] md:left-1/4  md:-translate-x-1/2 md:-translate-y-1/2 z-0">
          <div className="w-[98vw] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="flex-1 z-10">
          <div className="flex flex-col items-start mb-3">
            <h4 className="hyi-h4 font-semibold">{aiAutomationInsights.title}</h4>
          </div>
          <ul className="list-disc pl-6 text-base space-y-3">
            {aiAutomationInsights.points.map((point, idx) => (
              <li className="hyi-p" key={idx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center relative z-10">
          <Image
            width="485"
            height="321"
            src={aiAutomationInsights.image}
            alt="AI Automation Illustration"
            className="w-full"
          />
        </div>
      </div>
    </CustomWrapper>
  );
}
