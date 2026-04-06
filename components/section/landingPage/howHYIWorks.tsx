"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import banner1 from "@/assets/landingPage/images/videobanner-01.webp";
import banner2 from "@/assets/landingPage/images/videobanner-02.jpg";
import banner3 from "@/assets/landingPage/images/videobanner-03.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videos = [
  { _id: "video-01", image: banner1, link: "n7BQfAV28tg" },
  { _id: "video-02", image: banner2, link: "WDZV3i27W10" },
  { _id: "video-03", image: banner3, link: "xGK02RlFNtU" },
];

export default function HowHYIWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true); // new
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const loopedVideos = [...videos, ...videos, ...videos];
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const middleIndex = videos.length;
    const middleChild = el.children[middleIndex] as HTMLElement;
    el.scrollLeft =
      middleChild.offsetLeft - (el.clientWidth - middleChild.offsetWidth) / 2;
  }, []);

  useEffect(() => {
    if (!autoSlideEnabled) return;

    const interval = setInterval(() => {
      scrollToDirection(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSlideEnabled]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollTimeout: NodeJS.Timeout | null = null;

    const teleportIfNeeded = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const elCenter = el.scrollLeft + el.clientWidth / 2;

      let closestIndex = 0;
      let minDist = Infinity;
      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(elCenter - childCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = idx;
        }
      });

      if (closestIndex < videos.length || closestIndex >= 2 * videos.length) {
        const newIndex =
          closestIndex < videos.length
            ? closestIndex + videos.length
            : closestIndex - videos.length;
        const target = children[newIndex];
        el.scrollLeft =
          target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      }
    };

    const onScroll = () => {
      if (isScrollingRef.current) return;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        teleportIfNeeded();
      }, 100);
    };

    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToDirection = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    const elCenter = el.scrollLeft + el.clientWidth / 2;

    let closestIndex = 0;
    let minDist = Infinity;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(elCenter - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = idx;
      }
    });

    let targetIndex = closestIndex + dir;
    if (targetIndex < 0) targetIndex = children.length - 1;
    if (targetIndex >= children.length) targetIndex = 0;

    const target = children[targetIndex];
    if (!target) return;

    isScrollingRef.current = true;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrollingRef.current = false;
      const elCenterAfter = el.scrollLeft + el.clientWidth / 2;
      const newClosestIndex = children.reduce((closest, child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(elCenterAfter - childCenter);
        return dist <
          Math.abs(
            elCenterAfter -
              (children[closest].offsetLeft + children[closest].offsetWidth / 2)
          )
          ? idx
          : closest;
      }, 0);

      if (
        newClosestIndex < videos.length ||
        newClosestIndex >= 2 * videos.length
      ) {
        const newIndex =
          newClosestIndex < videos.length
            ? newClosestIndex + videos.length
            : newClosestIndex - videos.length;
        const target = children[newIndex];
        el.scrollLeft =
          target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2;
      }
    }, 600);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center z-10 gap-6 md:gap-10">
      <div className="w-full flex flex-col text-center px-4 gap-2 md:w-[55%]">
        <h2 className="hyi-h2">Learn How HYI Works</h2>
        <p className="hyi-p max-w-5xl">
          HYI.AI connects you with expert specialists in minutes no hiring
          delays.
        </p>
      </div>

      <div className="relative w-full">
        {!autoSlideEnabled && (
          <button
            onClick={() => scrollToDirection(-1)}
            className="hidden lg:flex absolute cursor-pointer left-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-5 shadow-md z-20 hover:scale-105 transition duration-300 ease-in-out"
          >
            <ArrowLeft size={36} className="text-brand-700" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-scroll px-6 scrollbar-hide snap-x snap-mandatory md:gap-16 lg:gap-24"
        >
          {loopedVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[90%] md:w-[50%] aspect-[16/9] rounded-2xl overflow-hidden shadow-xl snap-center"
            >
              {activeIndex !== index ? (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoSlideEnabled(false);
                  }}
                >
                  <Image
                    src={video.image}
                    alt="How HYI Works"
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="w-16 h-12 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:w-20 md:h-16 lg:w-24 lg:h-18">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-10 h-10"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.link}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>

        {!autoSlideEnabled && (
          <button
            onClick={() => scrollToDirection(1)}
            className="hidden lg:flex absolute cursor-pointer right-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-5 shadow-md z-20 hover:scale-105 transition duration-300 ease-in-out"
          >
            <ArrowRight size={36} className="text-brand-700" />
          </button>
        )}
      </div>
    </div>
  );
}
