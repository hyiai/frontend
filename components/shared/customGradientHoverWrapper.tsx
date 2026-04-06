"use client";

import { ReactNode, useEffect, useRef } from "react";

interface CustomGradientHoverWrapperProps {
  children: ReactNode;
}

export default function CustomGradientHoverWrapper({
  children,
}: CustomGradientHoverWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = wrapper.getElementsByClassName("card");
      for (const card of cards) {
        const target = card as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    return () => wrapper.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="cards" ref={wrapperRef}>
      {children}
    </div>
  );
}
