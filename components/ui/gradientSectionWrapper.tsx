import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientSectionWrapperProps extends React.ComponentProps<"section"> {
  showBgCircle?: boolean;
  bgCircleClassName?: string;
}

export default function GradientSectionWrapper({
  className,
  children,
  showBgCircle = true,
  bgCircleClassName = "hidden md:flex pointer-events-none absolute top-[75%] left-[53%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2",
  ...props
}: GradientSectionWrapperProps) {
  return (
    <section
      className={cn(
        "w-full flex items-center justify-center overflow-hidden px-4 py-6 md:p-6 lg:py-8",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-[1280px] flex flex-col bg-background relative isolate">
        {showBgCircle && (
          <div className={bgCircleClassName}>
            <div className="h-[900px] w-[900px] md:h-[700px] md:w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
          </div>
        )}
        <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          {children}
        </div>
      </div>
    </section>
  );
}