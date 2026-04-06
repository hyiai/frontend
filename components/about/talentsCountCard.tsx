"use client";

import Image from "next/image";
import MiddleIcon from "@/assets/about/middle.png";
import MillionTalents from "@/assets/about/millionTalents.png";
import Card1Background from "@/assets/about/backgroundCards/card1.png";

interface TalentsCountCardProps {
  totalCount: number;
}

const TalentsCard: React.FC<TalentsCountCardProps> = ({ totalCount }) => {
  function formatCompactFloor(num: number): string {
    if (num >= 1_000_000_000) {
      return Math.floor(num / 1_000_000_000) + "B";
    }
    if (num >= 1_000_000) {
      return Math.floor(num / 1_000_000) + "M";
    }
    if (num >= 1_000) {
      return Math.floor(num / 1_000) + "K";
    }
    return num.toString();
  }

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 relative overflow-hidden rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6">
      <Image
        src={Card1Background}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 h-full flex items-center justify-between">
        {/* Left side - Text */}
        <div className="space-y-3 xs:space-y-4">
          <div>
            <p className="text-text-300 text-xs xs:text-sm mb-1 mt-2 xs:mt-4">
              Welcome to HYI.AI
            </p>
            <p className="text-xs sm:text-sm bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent flex items-center gap-1">
              Trusted Talent
              <Image
                src={MiddleIcon}
                alt="Middle Icon"
                width={12}
                height={12}
              />
              Exceptional Growth
            </p>
          </div>
          <div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              {formatCompactFloor(totalCount)} +
            </h2>
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Talents
            </h2>
          </div>
        </div>
        {/* Right side - Image */}
        <div className="mt-12 flex-shrink-0">
          <Image
            src={MillionTalents}
            alt="MillionTalents"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TalentsCard;
