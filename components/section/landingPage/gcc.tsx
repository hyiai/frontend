import { GCCData } from "@/components/data/landingPage";
import GCCImage from "@/assets/landingPage/images/GCC-Collaboration.png";
import Image from "next/image";
import React from "react";
// import CustomButton from "@/components/shared/customButton";
// import GCCHeroImage from "@/public/GCC-Bg.webp";
import CustomAutoSlider from "@/components/shared/customAutoSlider";

export default function GCC() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-6 lg:py-8">
      {/* <div className="flex md:hidden">
        <Image src={GCCHeroImage} alt="Gradient globe Image" />
      </div> */}

      <div className="w-full flex flex-col items-center text-center cursor-default gap-4 z-10 md:hidden">
        <span className="w-fit text-base label-gradient text-white/70 px-3.5 py-1.5">
          {GCCData.label}
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="hyi-h2">{GCCData.heading}</h2>
          <p className="hyi-p">{GCCData.text}</p>
        </div>
      </div>

      <div
        className={`w-full flex items-center justify-center px-4 pb-6 bg-[url('/GCC-Bg.webp')] bg-no-repeat bg-contain md:bg-cover md:px-6 lg:pb-8 md:mt-0`}
      >
        <div
          className={`w-full max-w-[1280px] flex flex-col gap-5 z-10 md:gap-10`}
        >
          <div className="hidden w-full md:flex flex-col items-center text-center cursor-default gap-4 z-10 md:pt-20 md:gap-8">
            <span className="w-fit text-base label-gradient text-white/70 px-3.5 py-1.5">
              {GCCData.label}
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="hyi-h2">{GCCData.heading}</h2>
              <p className="hyi-p">{GCCData.text}</p>
            </div>
          </div>
          <div className="hidden overflow-visible scrollbar-hide snap-x snap-mandatory cursor-default gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-10">
            <div className="min-h-[206px] flex-shrink-0 w-[90%] snap-center sm:w-full flex flex-col glass-gradient rounded-2xl p-6 transform transition-transform duration-300 ease-in-out hover:scale-106 will-change-transform hover:shadow-xl hover:shadow-brand-600/80">
              <span className="text-xs font-semibold text-white pb-2">
                Automated skill evaluations
              </span>
              <h3 className="text-base font-bold text-white pb-1.5">
                Global Capability Centers Solution
              </h3>
              <p className="text-sm text-white">
                Access certified global talent and scale fast with agile,
                goal-driven teams.
              </p>
              <div className="relative h-full flex items-center justify-end">
                <div className="absolute -bottom-6 -left-4 flex gap-2 md:-bottom-13 md:left-0">
                  <Image
                    src={GCCImage}
                    alt="Team Collaboration"
                    width={264}
                    height={146}
                  />
                </div>
                {/* <CustomButton otherCSSProperty="h-fit glass-gradient">
                  View More
                </CustomButton> */}
              </div>
            </div>
            {GCCData.cards.map((card, index) => (
              <div
                key={card._id}
                className={`flex-shrink-0 w-[90%] snap-center cursor-default sm:w-full flex flex-col rounded-2xl p-6 gap-2.5 bg-no-repeat bg-cover transition-all duration-300 ease-out hover:scale-106 hover:shadow-xl hover:shadow-brand-600/80`}
                style={{
                  backgroundImage: `url('/Card-bg-${index === 2 ? "" : "0"}${
                    index === 2 ? index + 9 : index + 4
                  }.${index === 2 ? "png" : "webp"}')`,
                }}
              >
                <h3 className="text-base font-bold text-white">{card.title}</h3>
                <p className="text-sm text-white">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="flex mt-10 md:hidden">
            <CustomAutoSlider>
              <div className="min-h-[206px] sm:w-full flex flex-col glass-gradient rounded-2xl p-6">
                <span className="text-xs font-semibold text-white pb-2">
                  Automated skill evaluations
                </span>
                <h3 className="text-base font-bold text-white pb-1.5">
                  Global Capability Centers Solution
                </h3>
                <p className="text-sm text-white">
                  Access certified global talent and scale fast with agile,
                  goal-driven teams.
                </p>
                <div className="relative h-full flex items-center justify-end">
                  <div className="absolute -bottom-30 -left-4 flex gap-2 md:-bottom-13 md:left-0">
                    <Image
                      src={GCCImage}
                      alt="Team Collaboration"
                      width={264}
                      height={146}
                    />
                  </div>
                  {/* <CustomButton otherCSSProperty="h-fit glass-gradient">
                    View More
                  </CustomButton> */}
                </div>
              </div>
              {GCCData.cards.map((card) => (
                <div
                  key={card._id}
                  className={`cursor-default sm:w-full flex flex-col rounded-2xl p-6 gap-2.5 glass-gradient`}
                >
                  <h3 className="text-base font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white">{card.text}</p>
                </div>
              ))}
            </CustomAutoSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
