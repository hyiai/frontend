"use client";

import { featureData } from "@/components/data/landingPage";
import featureMobileheroImage from "@/assets/landingPage/images/Feature-Image-mobile.png";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DISTANCE = 110;

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [maxHeight, setMaxHeight] = useState(0);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (blocksRef.current.length > 0) {
      const heights = blocksRef.current.map((el) => el?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === featureData.featureBlock.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? DISTANCE : -DISTANCE,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -DISTANCE : DISTANCE,
      opacity: 0,
    }),
  };

  const currentBlock = featureData.featureBlock[currentIndex];

  return (
    <div className="flex flex-col text-center lg:flex-row lg:text-start lg:items-center lg:gap-10">
      {/* Hero Images */}
      <div className="flex items-center justify-center lg:hidden">
        <Image
          src={featureMobileheroImage}
          alt="Hero Image"
          width={418}
          height={550}
        />
      </div>
      <div className="hidden w-full h-full lg:flex">
        <Image
          src={featureData.heroImage}
          alt="Hero Image"
          width={542}
          height={712}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col cursor-default -mt-20 gap-8 md:mt-0">
        <div className="flex flex-col items-center gap-5 lg:items-start">
          <span className="w-fit flex items-center text-sm font-semibold text-dark_mode-100 rounded-full bg-white/10 border border-white/5 px-2.5 py-1.5 gap-2.5">
            <Image
              src={featureData.labelIcon}
              alt="Lightning Icon"
              width={24}
              height={24}
            />
            {featureData.label}
          </span>

          <h2 className="hyi-h2">{featureData.heading}</h2>
          <p className="hyi-p">{featureData.text}</p>
        </div>

        {/* Animated Feature Block */}
        <div
          className="relative w-full overflow-hidden"
          style={{ minHeight: maxHeight }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentBlock._id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              ref={(el) => {
                if (el) blocksRef.current[currentIndex] = el;
              }}
              className="absolute top-0 left-0 border border-dark_mode-500 bg-[linear-gradient(135deg,rgba(255,255,255,0.012),rgba(255,255,255,0.04))] backdrop-blur-md shadow-lg p-4 rounded-xl w-full grid gap-y-4 lg:bg-none lg:p-0 lg:border-none"
            >
              {currentBlock.features.map((feature) => (
                <div
                  key={feature._id}
                  className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-x-10"
                >
                  <h3 className="text-base font-medium text-dark_mode-100 md:font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark_mode-300">{feature.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
