"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import python from "@/assets/companies/python.svg";
import git from "@/assets/companies/git.svg";
import jquerry from "@/assets/companies/jquerry.svg";
import html from "@/assets/companies/html.svg";
import bitbucket from "@/assets/companies/bitbucket.svg";
import vscode from "@/assets/companies/vscode.svg";
import css from "@/assets/companies/css.svg";
import javascript from "@/assets/companies/javascript.svg";

import MiddleIcon from "@/assets/shared/sparkle.svg";
import CustomLabel from "@/components/shared/customLabel";

const icons = [
  {
    id: "python",
    src: python,
    alt: "python",
    className: "top-[10%] left-[20%]",
    delay: 0,
  },
  {
    id: "git",
    src: git,
    alt: "git",
    className: "top-[22%] left-[4%]",
    delay: 0.5,
  },
  {
    id: "jquerry",
    src: jquerry,
    alt: "jquerry",
    className: "top-[58%] left-[11%]",
    delay: 0.75,
  },
  {
    id: "html",
    src: html,
    alt: "html",
    className: "bottom-[2%] left-[25%]",
    delay: 1,
  },
  {
    id: "bitbucket",
    src: bitbucket,
    alt: "bitbucket",
    className: "top-[10%] right-[20%]",
    delay: 1.25,
  },
  {
    id: "vscode",
    src: vscode,
    alt: "vscode",
    className: "top-[22%] right-[4%]",
    delay: 1.5,
  },
  {
    id: "css",
    src: css,
    alt: "css",
    className: "top-[58%] right-[11%]",
    delay: 1.75,
  },
  {
    id: "javascript",
    src: javascript,
    alt: "javascript",
    className: "bottom-[2%] right-[25%]",
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

      <div className="flex flex-col items-center justify-center text-center max-w-2xl gap-3.5 z-10">
        <div className="mb-2">
        <CustomLabel >AGI Training & Certification</CustomLabel>
        </div>
        
        <h2 className="hyi-h2 font-bold text-2xl md:text-3xl lg:text-4xl">
          Learning that&apos;s powerful and intuitive
        </h2>
        <p className=" text-dark_mode-300 lg:w-4/5">
          HYI.AI provides the foundation any business needs to deliver scalable,
          personalized learning to any audience, anywhere.
        </p>
        <p className="flex justify-center items-center text-xs sm:text-sm bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent text-center gap-1 md:text-base">
          Artificial General Intelligence
          <Image src={MiddleIcon} alt="Middle Icon" width={14} height={14} />
          Verified Certifications
        </p>
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
