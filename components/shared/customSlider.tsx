"use client";

import React, { ReactNode, useCallback, useEffect, useRef } from "react";

interface CustomSwiperProps {
  items: ReactNode[];
  speed?: number;
  height?: string;
  hasOnHoverStop?: boolean;
  slideFromRightToLeft?: boolean;
  minWidth?: string;
  gapBetweenItems?: string;
}

export default function CustomSwiper({
  items,
  speed = 1,
  height = "h-30",
  hasOnHoverStop = true,
  slideFromRightToLeft = true,
  minWidth = "min-w-[250px]",
  gapBetweenItems = "gap-5",
}: CustomSwiperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const isPaused = useRef(false);
  const pos1 = useRef(0);
  const pos2 = useRef(0);
  const trackWidth = useRef(0);

  const animate = useCallback(() => {
    if (!track1Ref.current || !track2Ref.current || isPaused.current) return;

    const direction = slideFromRightToLeft ? -1 : 1;

    pos1.current += speed * direction;
    pos2.current += speed * direction;

    if (slideFromRightToLeft) {
      if (pos1.current <= -trackWidth.current) {
        pos1.current = pos2.current + trackWidth.current;
      }
      if (pos2.current <= -trackWidth.current) {
        pos2.current = pos1.current + trackWidth.current;
      }
    } else {
      if (pos1.current >= trackWidth.current) {
        pos1.current = pos2.current - trackWidth.current;
      }
      if (pos2.current >= trackWidth.current) {
        pos2.current = pos1.current - trackWidth.current;
      }
    }

    track1Ref.current.style.transform = `translateX(${pos1.current}px)`;
    track2Ref.current.style.transform = `translateX(${pos2.current}px)`;

    animationFrameId.current = requestAnimationFrame(animate);
  }, [slideFromRightToLeft, speed]);

  useEffect(() => {
    const init = () => {
      if (track1Ref.current) {
        trackWidth.current = track1Ref.current.offsetWidth;
        pos1.current = 0;
        pos2.current = trackWidth.current;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(init);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]);

  const handleMouseEnter = () => {
    isPaused.current = true;
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${height}`}
      onMouseEnter={hasOnHoverStop ? handleMouseEnter : undefined}
      onMouseLeave={hasOnHoverStop ? handleMouseLeave : undefined}
    >
      <div
        ref={track1Ref}
        className={`flex absolute top-0 left-0 items-center ${height} ${gapBetweenItems}`}
        style={{ willChange: "transform" }}
      >
        <>
          {items.map((item, i) => (
            <div
              key={`track1-${i}`}
              className={`flex items-center justify-center text-xl font-semibold whitespace-nowrap ${minWidth}`}
            >
              {item}
            </div>
          ))}
          <div className="w-fit" />
        </>
      </div>

      <div
        ref={track2Ref}
        className={`flex absolute top-0 left-0 items-center ${height} ${gapBetweenItems}`}
        style={{ willChange: "transform" }}
      >
        {items.map((item, i) => (
          <div
            key={`track2-${i}`}
            className={`flex items-center justify-center text-xl font-semibold whitespace-nowrap ${minWidth}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
