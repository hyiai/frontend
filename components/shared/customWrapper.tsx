// React Imports
import React, { ReactNode } from "react";

interface CustomWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
  padding?: string;
  divStyle?: string;
  gapBetween?: string;
  className?: string;
}

export default function CustomWrapper({
  children,
  backgroundColor = "bg-background",
  divStyle = "",
  padding = "px-4 py-6 md:p-6 lg:py-8",
  gapBetween = "",
  className = ""
}: CustomWrapperProps) {
  return (
    <section
      className={` w-full flex items-center justify-center ${backgroundColor} ${padding} ${className}`}
    >
      <div
        className={`w-full max-w-[1280px] flex flex-col ${gapBetween} ${divStyle}`}
      >
        {children}
      </div>
    </section>
  );
}
