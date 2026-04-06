import Image from "next/image";
import React from "react";

export default function ResumeStepsVisual() {
  return (
    <div className="relative flex items-center justify-center rounded-xl">
      {/* Back image */}
      <Image
        src="/rb-sec-3.png"
        alt="Resume example 1"
        className="w-full rounded-xl shadow-lg relative z-10"
        height={560}
        width={540}
      />

      {/* Front image */}
      {/* <img
        src="/rb-sec-4.png.png"
        alt="Resume example 2"
        className="absolute left-20 top-10 w-[250px] rounded-xl shadow-lg border border-white/10"
      /> */}
    </div>
  );
}
