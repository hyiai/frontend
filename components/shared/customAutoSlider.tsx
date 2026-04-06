"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CustomAutoSliderProps = {
  children: React.ReactNode;
  interval?: number;
  distance?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export default function CustomAutoSlider({
  children,
  interval = 3000,
  distance = 80,
  pauseOnHover = true,
  className,
}: CustomAutoSliderProps) {
  const slides = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [maxDims, setMaxDims] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  // measure all children once
  useEffect(() => {
    if (!wrapperRef.current) return;
    const el = wrapperRef.current;
    const childNodes = Array.from(el.children) as HTMLElement[];

    let maxW = 0;
    let maxH = 0;
    childNodes.forEach((child) => {
      maxW = Math.max(maxW, child.offsetWidth);
      maxH = Math.max(maxH, child.offsetHeight);
    });
    setMaxDims({ width: maxW, height: maxH });
  }, [slides]);

  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, paused]);

  if (slides.length === 0) return null;

  const variants = {
    enter: { x: distance, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -distance, opacity: 0 },
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={{
        minHeight: maxDims.height || undefined,
        minWidth: maxDims.width || undefined,
      }}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {/* hidden measuring wrapper */}
      <div
        ref={wrapperRef}
        className="absolute opacity-0 pointer-events-none -z-50"
      >
        {slides.map((s, i) => (
          <div key={i} className="inline-block">
            {s}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full will-change-transform"
        >
          {slides[index] as React.ReactNode}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
