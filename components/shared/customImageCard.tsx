// React Imports
import React from "react";

// Next Imports
import Image, { StaticImageData } from "next/image";

// Type/Interface declaration
interface CustomImageCardProps {
  caseStudyItem: {
    _id: string;
    coverImage: StaticImageData | string;
    title: string;
    slug: string;
    subtitle: string;
  };
  width?: number;
  height?: number;
  hideParagraph?: boolean;
}

export default function CustomImageCard({
  caseStudyItem,
  width = 392,
  height = 240,
  hideParagraph = false,
}: CustomImageCardProps) {
  return (
    <div className="card w-full h-full mx-auto p-[1px] overflow-hidden">
      {/* <div className="card-border absolute inset-0 rounded-xl"></div> */}
      <div className="card-content cursor-pointer relative w-full h-full flex flex-col rounded-xl border border-white/20">
        <div className="w-full h-fit relative md:h-full">
          {caseStudyItem.coverImage && (
            <Image
              src={caseStudyItem.coverImage}
              alt="Card image"
              width={width}
              height={height}
              className="w-full rounded-tl-xl rounded-tr-xl bg-cover"
            />
          )}
        </div>
        <div className="w-full h-full flex flex-col justify-between px-6 py-5 gap-2.5 relative z-10">
          <h3 className="hyi-h4 cursor-pointer">{caseStudyItem.title}</h3>
          <p
            className={`hyi-p line-clamp-4 cursor-pointer ${
              hideParagraph ? "hidden" : ""
            }`}
          >
            {caseStudyItem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
