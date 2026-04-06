import Image from "next/image";
import { completeOfficeExperience, smartInfrastructure, technologyDeliveryInfrastructureData } from "@/components/data/gcc";
import CustomWrapper from "@/components/shared/customWrapper";
import CustomSwiper from "@/components/shared/customSlider";

export default function OfficeExperience() {
  const { title, subTitle, sections } = completeOfficeExperience;
  const { title: infraTitle, subTitle: infraSubTitle, sections: infraSections } = smartInfrastructure;
  const { title: techTitle, subTitle: techSubTitle, cards: techCards } = technologyDeliveryInfrastructureData;

  return (
    <CustomWrapper divStyle="w-full" padding="px-3 md:px-4 my-0 py-6 md:py-10">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h2 className="hyi-h2 text-center">{title}</h2>
        <p className="hyi-p text-center md:max-w-[60%]">{subTitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-16 overflow-x-auto scroll-smooth snap-x snap-mandatory md:overflow-visible">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center lg:flex-col lg:items-start lg:text-left gap-4 min-w-[280px] snap-start"
          >
            <Image
              src={section.icon}
              alt=""
              width={36}
              height={36}
              className="shrink-0"
            />
            <div>
              <h4 className="hyi-h4 font-semibold mb-2 text-gray-300">{section.title}</h4>
              <p className="hyi-p text-gray-300 font-normal">{section.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Smart Infrastructure */}
      <div className="mt-15 md:mt-20 relative">
        {/* gradient */}
        <div className="flex pointer-events-none absolute top-[15%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="core-gradient w-[60vw] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-3 mb-10 z-10 relative">
          <h2 className="hyi-h2 text-center z-10">{infraTitle}</h2>
          <p className="hyi-p text-center max-w-4xl">{infraSubTitle}</p>
        </div>

        <div className="flex flex-col items-center md:grid justify-items-center md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-center">
          {infraSections.map((section, idx) => (
            <div key={idx} className="flex-shrink-0 w-full md:w-fit flex flex-col items-center gap-3 md:gap-5 mb-10 snap-start z-10">
              <div className="flex justify-center items-center ">
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={330}
                  height={390}
                  className="w-[330px] h-[390px] object-cover rounded-xl z-10"
                />
              </div>
              <h3 className="hyi-h3 z-10 px-1">{section.title}</h3>
              <p className="hyi-p w-full md:max-w-[60%] z-10 px-1">{section.subTitle}</p>

            </div>
          ))}
        </div>
      </div>

      {/* Technology delivery and infrastructre */}
      <div className="mt-6 md:mt-12 relative">
        {/* gradiences */}
        <div className="flex pointer-events-none absolute top-[15%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" core-gradient w-[60vw] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-3 mb:6 md:mb-10 z-10 relative">
          <h2 className="hyi-h2 text-center">{techTitle}</h2>
          <p className="hyi-p text-center">{techSubTitle}</p>
        </div>

        {/* Mobile: Horizontal scrollable, Desktop: Grid */}
        <div className="flex md:hidden mb-2 w-full">

          <CustomSwiper
            items={techCards.map((card, idx) => (
              <div
                key={idx}
                className="z-10 glass-gradient rounded-xl flex flex-col px-6 py-5 w-[300px] h-[220px]"
              >
                  <div className="flex justify-start mb-4">
                    <Image src={card.icon} alt={card.alt} width={24} height={24} />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                  <h5 className="hyi-h5 text-wrap">{card.title}</h5>
                  <p className="hyi-p text-wrap">{card.description}</p>
                  </div>

              </div>
            ))}
            height="h-[300px]"
          />
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCards.map((card) => (
            <div
              key={card._id}
              className="w-full glass-gradient rounded-xl hover:cursor-pointer
               relative overflow-hidden group"
            >
              <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
              {/* gradiences */}
              <div className="flex flex-col px-6 py-5 z-10">
                <div className="flex justify-start mb-4">
                  <Image src={card.icon} alt={card.alt} width={24} height={24} />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h5 className="hyi-h5 ">{card.title}</h5>
                  <p className="hyi-p">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </CustomWrapper>
  );
}
