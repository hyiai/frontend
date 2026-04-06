import Image from "next/image";
import { growthAndWorkSpaceOperationData } from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import tick from "@/assets/gcc/icons/tick-with-circle.svg";

export default function GrowthAndWorkSpaceOperation() {
  const { companyGrowth, operate, workspaceAsAService } =
    growthAndWorkSpaceOperationData;

  return (
    <CustomWrapper gapBetween="gap-12 md:gap-16" padding="px-3 my-0 py-6 md:py-13 lg:py-15">
      {/* Company Growth Section */}
      <div className="growth-container flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <div className="flex-col items-center gap-4 mb-4 md:mb-6">
            <div className="mb-4">
              <Image
                src={companyGrowth.icon}
                alt="Company Growth Icon"
                width={40}
                height={40}
              />
            </div>
            <h2 className="hyi-h2">{companyGrowth.title}</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-300">
            {companyGrowth.points.map((point, idx) => (
              <li className="hyi-p" key={idx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            width="470"
            height="365"
            src={companyGrowth.image}
            alt="Growth Chart"
          />
        </div>
      </div>

      {/* Operate Section */}
      <div className=" flex flex-col md:flex-row-reverse gap-8 items-start w-full">
        <div className="flex-1">
          <div className="flex-col items-center gap-8 mb-4">
            {/* Icon */}
            <div className="mb-4">
              <Image
                src={operate.icon}
                alt="Operate Icon"
                width={40}
                height={40}
              />
            </div>
            <h2 className="hyi-h2">{operate.title}</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-300">
            {operate.points.map((point, idx) => (
              <li className="hyi-p" key={idx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            width="470"
            height="365"
            src={operate.image}
            alt="Credit Balance Card"
          />
        </div>
      </div>

      {/* Workspace-As-A-Service Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        {/* gradience */}
        <div className="flex pointer-events-none absolute top-[25%] left-[50%] md:top-1/2 md:left-[12%]  items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" core-gradient w-[750px] h-[550px] md:w-[25vw] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>


        <div className="flex pointer-events-none absolute top-[25%] left-[90%] md:top-1/2 md:left-[27%]  items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" core-gradient w-[750px] h-[550px] md:w-[25vw] md:h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(112,0,255,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="flex-1 z-10 md:mt-15">
          <h2 className="hyi-h2 md:text-start">{workspaceAsAService.title}</h2>
          <ul className="pl-0 text-gray-300 flex flex-col gap-4 mt-6">
            {workspaceAsAService.points.map((point, idx) => (
              <li className="hyi-p flex items-start gap-6 text-start" key={idx}>
                <Image src={tick} alt="tick mark" height={28} width={28} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center z-10">
          <Image
            width="602"
            height="434"
            src={workspaceAsAService.image}
            alt="Workspace Card"
          />
        </div>
      </div>
    </CustomWrapper>
  );
}
