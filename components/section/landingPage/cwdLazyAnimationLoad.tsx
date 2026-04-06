"use client";

import React from "react";

import { connectWithDeveloperData } from "@/components/data/landingPage";
// import LazyLottie from "@/components/shared/customLazyLottie";
import Lottie from "lottie-react";

export default function CWDLazyAnimationLoad() {
  return (
    <div className="w-full h-fit flex flex-col gap-5 lg:grid lg:grid-cols-5 lg:grid-rows-2">
      <div className="w-full h-full flex lg:col-span-2 lg:row-span-2">
        {connectWithDeveloperData.cards.map(
          (card, index) =>
            index === 0 && (
              <div
                key={card._id}
                className="flex justify-center items-center text-center cursor-default bg-[url('/Card-bg-01.webp')] bg-no-repeat bg-[length:100%_100%] md:text-left"
              >
                <div className="w-full h-full flex flex-col rounded-2xl px-6 py-8 gap-4">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="hyi-h4 text-dark_mode-100">{card.title}</h3>
                    <p className="text-sm text-dark_mode-300">{card?.text}</p>
                  </div>
                  <div className="w-fit h-fit">
                    <Lottie animationData={card.img} loop autoplay />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className="w-full grid grid-cols-1 gap-5 lg:col-span-3 lg:row-span-2">
        {connectWithDeveloperData.cards.map(
          (card, index) =>
            index !== 0 && (
              <div
                key={card._id}
                className={`flex flex-col justify-center items-center text-center rounded-2xl cursor-default gap-5 ${
                  index === 1
                    ? "bg-[url('/Card-bg-02.webp')] px-6 py-8"
                    : "bg-[url('/Card-bg-03.webp')] px-6 py-10 md:pr-0"
                } bg-no-repeat bg-[length:100%_100%] bg-top md:flex-row md:text-left md:gap-6 lg:row-span-1`}
              >
                <div className="w-full flex flex-col gap-2.5 lg:w-7/12">
                  <h3 className="hyi-h4 text-dark_mode-100">{card?.title}</h3>
                  <p className="text-sm text-dark_mode-300">{card?.text}</p>
                </div>
                <div className="w-full h-fit justify-center flex md:w-6/12 md:justify-end">
                  <Lottie animationData={card.img} loop autoplay />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
