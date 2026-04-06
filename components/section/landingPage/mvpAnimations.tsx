"use client";

import { useEffect, useRef } from "react";
import { mvpData } from "@/components/data/landingPage";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import { AnimationItem } from "lottie-web";

interface CustomImageCardProps {
  cardItem: {
    id: number;
    image: () => Promise<Record<string, unknown>>;
    label: string;
    heading: string;
    paragraph: string;
  };
}

function CustomImageCard({ cardItem }: CustomImageCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // create observer
    observerRef.current = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animRef.current) {
          const lottie = (await import("lottie-web")).default;
          const animationData = await cardItem.image();

          animRef.current = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData:
              "default" in animationData
                ? (animationData as Record<string, unknown>).default
                : animationData,
          });

          // optional: once loaded, disconnect observer so it doesn't reload
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.2 } // adjust sensitivity
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
      animRef.current?.destroy();
    };
  }, [cardItem]);

  return (
    <div className="card w-full rounded-xl p-1 border border-white/20 overflow-hidden">
      <div className="card-border rounded-xl"></div>
      <div className="card-content relative z-10 w-full flex flex-col rounded-xl">
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
          <div ref={containerRef} className="w-fit h-fit" />
        </div>
        <div className="w-full flex flex-col z-10 p-6 pt-4 gap-3">
          <span className="w-fit text-sm font-semibold text-dark_mode-100 bg-gradient-to-r from-white/40 via-white/15 to-white/10 border border-dark_mode-700 rounded-full px-3 py-1">
            {cardItem.label}
          </span>
          <div className="w-full flex flex-col gap-2">
            <h3 className="hyi-h4 text-dark_mode-100">{cardItem.heading}</h3>
            <p className="text-sm text-dark_mode-300">{cardItem.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MVPAnimations() {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col text-center gap-1.5 md:w-2/3">
        <h2 className="hyi-h2">{mvpData.heading}</h2>
        <p className="hyi-p">{mvpData.paragraph}</p>
      </div>
      <CustomGradientHoverWrapper>
        <div className="w-full flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-8">
            {mvpData.firstFeatures.map((feature) => (
              <CustomImageCard key={feature.id} cardItem={feature} />
            ))}
          </div>
          <div className="flex flex-col gap-8 md:pt-10">
            {mvpData.SecondFeatures.map(
              (feature: {
                id: number;
                image: () => Promise<Record<string, unknown>>;
                label: string;
                heading: string;
                paragraph: string;
              }) => (
                <CustomImageCard key={feature.id} cardItem={feature} />
              )
            )}
          </div>
        </div>
      </CustomGradientHoverWrapper>
    </div>
  );
}
