import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageGradientSectionProps {
  title: string;
  text: string;
  image: StaticImageData | string;
}

export default function ImageGradientSection({
  title,
  text,
  image,
}: ImageGradientSectionProps) {
  return (
    <div className="relative w-full flex items-center justify-center bg-[url('/Bg-Lines.png')] bg-no-repeat bg-[length:100%_100%] overflow-hidden py-12 lg:py-16">
      <div className="relative w-full max-w-[1280px] flex flex-col gap-6 px-4 md:gap-10 md:px-6">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <div className="w-full flex flex-col text-center gap-2.5 md:w-9/12">
            <h2 className="hyi-h2">{title}</h2>
            <p className="hyi-p">{text}</p>
          </div>
        </div>
        <div className="relative isolate inline-block group overflow-hidden">
          <div className="absolute inset-0 z-0 backdrop-blur-sm" />
          <Image
            src={image}
            alt="Statistics Image"
            className="relative block z-10"
          />
          {/* <div className="hidden md:flex absolute inset-0 z-20 bg-gradient-to-b from-black/5 via-black/30 to-black/70 opacity-100 scale-100 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105 pointer-events-none" /> */}
        </div>
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center -z-1 md:-top-40">
          <div className="w-[400px] h-[400px] md:w-[700px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>
      </div>
      <div className="hidden pointer-events-none absolute top-1/2 -left-150 -translate-y-1/2 md:flex items-center justify-center -z-1">
        <div className="w-[600px] h-[600px] md:w-[1300px] md:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <div className="hidden pointer-events-none absolute top-1/2 -right-150 -translate-y-1/2 md:flex items-center justify-center -z-1">
        <div className="w-[600px] h-[600px] md:w-[1300px] md:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
    </div>
  );
}
