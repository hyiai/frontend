"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import sketch from "@/assets/blogsPage/sketch.svg";
import autodesk from "@/assets/blogsPage/autodesk.svg";
import lightroom from "@/assets/blogsPage/lightroom.svg";
import illustrator from "@/assets/blogsPage/illustrator.svg";
import figma from "@/assets/blogsPage/figma.svg";
import adobe from "@/assets/blogsPage/adobe.svg";
import photoshop from "@/assets/blogsPage/photoshop.svg";
import framer from "@/assets/blogsPage/framer.svg";

const icons = [
  {
    id: "sketch",
    src: sketch,
    alt: "Sketch",
    className: "top-[10%] left-[20%]",
    delay: 0,
  },
  {
    id: "autodesk",
    src: autodesk,
    alt: "autodesk",
    className: "top-[22%] left-[5%]",
    delay: 0.5,
  },
  {
    id: "lightroom",
    src: lightroom,
    alt: "lightroom",
    className: "top-[55%] left-[13%]",
    delay: 0.75,
  },
  {
    id: "illustrator",
    src: illustrator,
    alt: "illustrator",
    className: "bottom-[2%] left-[0%]",
    delay: 1,
  },
  {
    id: "figma",
    src: figma,
    alt: "figma",
    className: "top-[10%] right-[20%]",
    delay: 1.25,
  },
  {
    id: "adobe",
    src: adobe,
    alt: "adobe",
    className: "top-[22%] right-[5%]",
    delay: 1.5,
  },
  {
    id: "photoshop",
    src: photoshop,
    alt: "photoshop",
    className: "top-[55%] right-[13%]",
    delay: 1.75,
  },
  {
    id: "framer",
    src: framer,
    alt: "framer",
    className: "bottom-[2%] right-[0%]",
    delay: 2.0,
  },
];

export default function HeroSection() {
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    setDurations(icons.map(() => 2.5 + Math.random() * 1));
  }, []);
  return (
    <div className="relative flex justify-center items-center pt-10 pb-2 md:py-24">
      {/* Floating Icons */}
      {icons.map((icon, i) => (
        <div
          key={icon.id}
          className={`hidden absolute w-16 h-16 md:flex items-center justify-center rounded-full glass-gradient-full backdrop-blur-md shadow-lg hover:scale-105 transition duration-300 ${icon.className} bounce-gentle-large`}
          style={{
            animationDelay: `${icon.delay}s`,
            animationDuration: durations[i] ? `${durations[i]}s` : "3s",
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.id === "figma" ? 24 : 30}
            height={icon.id === "figma" ? 24 : 30}
          />
        </div>
      ))}

      <div className="text-center max-w-xl z-10">
        <h1 className="text-2xl font-bold text-dark_mode-50 md:text-2xl lg:text-3xl">
          Latest <span className="text-brand-600">Insights & Articles</span>
        </h1>
        <p className="mt-4 text-dark_mode-300">
          Explore our collection of blog posts for expert tips, industry trends,
          and valuable insights to help you stay informed and inspired.
        </p>
        {/* <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none"
          />
          <button className="px-5 py-2 rounded-r-md bg-purple-600 text-white font-medium hover:bg-purple-700">
            Get Started
          </button>
        </div> */}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes gentleBounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes gentleBounceLarge {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .bounce-gentle {
          animation: gentleBounce 2.5s ease-in-out infinite;
        }

        .bounce-gentle-large {
          animation: gentleBounceLarge 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
