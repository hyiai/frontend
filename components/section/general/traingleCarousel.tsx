"use client";

import { useState, useEffect, ReactNode } from "react";

interface TriangleCarouselProps {
  children: ReactNode[];
  interval?: number;
}

export default function TriangleCarousel({
  children,
  interval = 3000,
}: TriangleCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % children.length);
    }, interval);
    return () => clearInterval(id);
  }, [children.length, interval]);

  return (
    <div className="relative perspective-1000 mx-auto w-[211px] h-[400px] min-[1024px]:w-[305px] min-[1024px]:h-[300px] min-[1200px]:w-[366px] min-[1200px]:h-[360px]">
      {children.map((child, i) => {
        const rotation = (i - active + children.length) % children.length;

        const transforms = [
          "rotate-x-0 rotate-y-0 scale-100 z-30 shadow-2xl",
          "rotate-y-[-20deg] scale-90 -translate-x-[80px] z-10 shadow-md lg:-translate-x-[100px] min-[1200px]:-translate-x-[120px]",
          "rotate-y-[20deg] scale-90 translate-x-[80px] z-10 shadow-md lg:translate-x-[100px] min-[1200px]:translate-x-[120px]",
        ];

        return (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out rounded-xl shadow-lg transform origin-center ${transforms[rotation]}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
