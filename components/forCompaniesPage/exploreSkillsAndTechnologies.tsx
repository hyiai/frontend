import Image from "next/image";
import { Technology } from "@/components/util/interface";

interface ExploreSkillsAndTechnologies {
  secondarySubTitle: string;
  title: string;
  technology: Technology[];
}

export default function ExploreSkillsAndTechnologies({
  secondarySubTitle,
  title,
  technology,
}: ExploreSkillsAndTechnologies) {
  return (
    <div className="w-full max-w-7xl mx-auto text-white relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_10%,_transparent_80%)] blur-3xl"></div>
      {/* Content on top */}
      <div className="relative z-10 mt-2">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center z-10 gap-6 md:gap-10 mb-4">
          <div className="w-full flex flex-col text-center gap-2 md:w-2/3">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Explore {title} Skills & Technologies
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed p-2">
              {secondarySubTitle}
            </p>
          </div>
        </div>
        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 p-2">
          {technology?.map((tech, index) => (
            <div
              key={index}
              className="p-4 glass-gradient rounded-xl
             relative overflow-hidden group"
            >
              <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src={tech?.logo}
                    alt={tech?.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-semibold text-base leading-tight">
                    {tech?.name}
                  </h3>
                  <p className="text-gray-400 text-sm">Talent Service</p>
                </div>
              </div>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
