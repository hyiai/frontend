"use client";

import React from "react";
import Image from "next/image";
import MiddleIcon from "@/assets/about/middle.png";
import CustomFloatableIcons from "@/components/shared/customFloatableIcons";
import Youtube from "@/assets/media/youtube.png";
import Facebook from "@/assets/media/facebook.png";
import Flickr from "@/assets/media/flickr.png";
import Instagram from "@/assets/media/instagram.png";
import Twitter from "@/assets/media/twitter.png";
import Whatsapp from "@/assets/media/whatsapp.png";
import LinkedIn from "@/assets/media/linkedin.png";
import Pintrest from "@/assets/media/pintrest.png";

const techIcons = [
  { id: "Youtube", src: Youtube, alt: "Youtube" },
  { id: "Facebook", src: Facebook, alt: "Facebook" },
  { id: "Flickr", src: Flickr, alt: "Flickr" },
  { id: "Instagram", src: Instagram, alt: "Instagram" },
  { id: "Twitter", src: Twitter, alt: "Twitter" },
  { id: "Whatsapp", src: Whatsapp, alt: "Whatsapp" },
  { id: "LinkedIn", src: LinkedIn, alt: "LinkedIn" },
  { id: "Pintrest", src: Pintrest, alt: "Pintrest" },
];

export default function MediaHeroSection() {
  return (
    <section className="relative w-full flex justify-center px-4 py-4 md:px-8 md:py-0 lg:items-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <CustomFloatableIcons
          icons={techIcons}
          overlayMode={true}
          showContent={false}
        />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-20 capitalize">
          <div className="text-white text-lg md:text-xl lg:text-2xl font-bold text-center">
            From industry news to inspiring stories, <br></br>
            <span className="text-brand-600">
              discover how we&apos;re making waves.
            </span>
          </div>
          <div className="text-dark_mode-300 text-base text-center max-w-sm sm:max-w-md md:max-w-xl lg:max-w-xl px-4 mb-2">
            Stay updated with the latest news, press releases, and media
            coverage about our company. Explore stories, announcements, and
            insights that highlight our journey and global impact.
          </div>
          <p className="text-xs sm:text-sm flex items-center gap-1">
            <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
              Instant Talent Services
            </span>
            <Image src={MiddleIcon} alt="Middle Icon" width={12} height={12} />
            <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
              Smart Career Support
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
