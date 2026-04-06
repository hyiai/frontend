import { testimonialsData } from "@/components/data/landingPage";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center z-10 px-4 gap-6 md:gap-10 md:px-0">
      <div className="w-[90dvw] flex flex-col text-center gap-2 md:w-2/3">
        <h2 className="hyi-h2">{testimonialsData.heading}</h2>
        <p className="hyi-p">{testimonialsData.text}</p>
      </div>
      <div className="w-[90dvw] max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonialsData.cards.map((card) => (
          <div
            key={card._id}
            className="w-fit glass-gradient rounded-xl hover:cursor-default
             relative overflow-hidden group"
          >
            <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
            <div className="flex flex-col px-6 py-5 z-10">
              <div className="flex gap-2.5">
                <div className="w-[55px] h-[55px] rounded-full">
                  <Image
                    src={card.image}
                    alt="Card image"
                    width={55}
                    height={55}
                    className="w-full bg-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="hyi-h5">{card.name}</h3>
                  <span className="text-base text-dark_mode-300">
                    {card.designation}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col pt-4 gap-2.5">
                <p className={`hyi-p`}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
