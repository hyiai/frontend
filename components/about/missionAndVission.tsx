import Image from "next/image";

import Mission from "@/assets/about/mission.svg";
import Vision from "@/assets/about/vision.svg";
import Card5Background from "@/assets/about/backgroundCards/card5.png";

const MissionAndVision = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 md:gap-6">
      {/* Mission Card */}
      <div className="col-span-1 flex flex-col justify-between relative overflow-hidden rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 min-h-[400px] xs:min-h-[450px] sm:min-h-[500px]">
        <Image
          src={Card5Background}
          alt=""
          fill
          className="absolute inset-0 object-cover z-0"
        />
        <div className="flex flex-col h-full relative z-10">
          <h3 className="text-white text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4">
            Our Mission
          </h3>
          <div className="text-text-300 text-base leading-relaxed flex-1">
            Our mission is to bridge the gap between businesses and exceptional
            tech talent by providing a streamlined, efficient hiring process
            with access to pre-vetted software developers, CTOs, and technology
            experts from around the world. We aim to deliver personalized
            solutions that meet the unique needs of each project, ensuring
            smooth deployments, secure integrations, and scalable
            infrastructures. By leveraging the power of Generative AI, we help
            businesses optimize workflows, foster creativity, and enhance
            productivity, ultimately driving long-term success and innovation.
          </div>
          <div className="flex items-center justify-center mt-auto">
            <Image
              src={Mission}
              alt="Mission"
              className="h-36 w-36 xs:h-48 xs:w-48 sm:h-56 sm:w-56 md:h-68 md:w-68 lg:h-86 lg:w-86 object-contain"
              priority
            />
          </div>
        </div>
      </div>
      {/* Vision Card */}
      <div className="col-span-1 flex flex-col justify-between relative overflow-hidden rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 min-h-[400px] xs:min-h-[450px] sm:min-h-[500px]">
        <Image
          src={Card5Background}
          alt=""
          fill
          className="absolute inset-0 object-cover z-0"
        />
        <div className="flex flex-col h-full relative z-10">
          <h3 className="text-white text-base xs:text-lg sm:text-xl font-semibold mb-3 xs:mb-4">
            Our Vision
          </h3>
          <div className="text-text-300 text-base leading-relaxed flex-1 space-y-2">
            <div>
              HYI.AI is a cutting-edge technology platform committed to
              reshaping how businesses operate in the digital era. Established
              with a clear vision to bridge the gap between advanced technology
              and real-world business needs, we have become a trusted partner
              for organizations globally. Our diverse team of highly skilled
              professionals excels in delivering solutions across five core
              areas: Virtual Assistance, Generative AI, Custom Deployment, AI/ML
              Data, AGI Training.
            </div>
            <div>
              Our approach combines technical expertise with deep industry
              knowledge to create tailored, effective solutions. At HYI.AI, we
              believe in innovation, efficiency, and creating lasting impacts
              that help businesses thrive in an increasingly competitive
              marketplace.
            </div>
          </div>
          <div className="flex items-center justify-center mt-auto">
            <Image
              src={Vision}
              alt="Vision"
              className="h-32 w-32 xs:h-36 xs:w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-60 lg:w-60 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
