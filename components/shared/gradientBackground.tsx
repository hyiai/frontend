import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  classGradient?: string;
};

export default function GradientBackground({
  children,
  className,
  classGradient,
}: Props) {
  return (
    <div className={`relative z-10 ${className ?? ""}`}>
      {children}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center -z-10 ${classGradient}`}
      >
        <div className="w-full h-full rounded-full about-gradient blur-[200px]" />
      </div>
    </div>
  );
}
