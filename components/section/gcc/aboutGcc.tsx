import { gccSubHeroSectionData } from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import Image from "next/image";

export default function AboutGcc() {
  return (
    <CustomWrapper gapBetween="gap-5" padding="my-0 pt-12 md:pt-0 py-1 md:py-2 px-3">
      <div className="w-full flex flex-col justify-start items-center gap-4 md:gap-8">
        <div className="w-full flex flex-col text-center gap-1.5 md:w-[55%] px-2">
          <h2 className="hyi-h2">{gccSubHeroSectionData.title}</h2>
          <p className="hyi-p">{gccSubHeroSectionData.subtitle}</p>
        </div>
        <div className="md:mt-5 w-full h-fit flex flex-col gap-4 md:gap-5 md:flex-row md:items-stretch">
          {gccSubHeroSectionData.cards.map((card) => (
            <div key={card._id} className=" flex flex-col gap-3 md:gap-6 flex-1 items-center md:flex-row md:items-start px-2">
              <Image className="mt-2" src={card.icon} alt="Icon" width={30} height={30} />
              <div className="flex flex-col text-center md:text-left gap:1 md:gap-3">
                <h3 className="hyi-h4 text-dark_mode-100">{card.title}</h3>
                <p className="hyi-p text-dark_mode-300">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomWrapper>
  );
}
