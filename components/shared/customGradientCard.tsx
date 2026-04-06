"use client";

import { ReactNode } from "react";

interface CustomGradientCard {
  children: ReactNode;
}

export default function CustomGradientCard({ children }: CustomGradientCard) {
  return (
    <div className="relative w-fit h-full isolate">
      <div className="relative h-full z-10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full glass-gradient" />
        </div>
        <div className="absolute inset-0 z-1 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-[#090C15] to-[#080B17]" />
        </div>

        <div className="absolute inset-0 z-2 pointer-events-none">
          <div className="w-full h-full card-gradient-02 opacity-100" />
        </div>
        <div className="absolute inset-0 z-3 pointer-events-none">
          <div className="w-full h-full card-gradient-03 opacity-100" />
        </div>

        {/* <div className="absolute inset-0 z-2 pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-[#F15BB5]/30 blur-[100px]" />
        </div> */}

        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}
