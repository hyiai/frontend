"use client";
import Image from "next/image";
import React from "react";

type Avatar = { src: string; alt?: string };

type Props = {
  title: string;
  blurb: string;
  iconSrc: string | { src: string }; // Accept string or object with src
  cta?: string;
  href?: string;
  avatars?: Avatar[];
  extraCount?: number; // e.g. 99 for “+99”
  isFeatured?: boolean;
  className?: string;
};

export default function JobCategoryCard({
  title,
  blurb,
  iconSrc,
  cta = "Apply Now",
  href = "#",
  avatars = [],
  extraCount,
  className = "",
}: Props) {
  return (
    <article
      className={[
        "relative rounded-2xl border cursor-pointer",
        "bg-[#12091d]", // default background
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        "transition-all duration-300",
        "p-5 sm:p-6 lg:p-7",
        "border-white/10",
        // hover background image
        "hover:bg-[url('/Card-bg-02.webp')] hover:bg-cover hover:bg-center",
        className,
      ].join(" ")}
    >
      <div className="relative flex flex-col items-start gap-4 z-10">
        <div className="h-12 w-12 shrink-0 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
          <Image
            src={typeof iconSrc === "string" ? iconSrc : iconSrc?.src || ""}
            alt=""
            className="h-7 w-7 object-contain"
            width={28}
            height={28}
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-lg text-start">
            {title}
          </h3>
          <p className="text-white/70 text-sm mt-1">{blurb}</p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between z-10">
        {/* avatars */}
        <div className="flex -space-x-2">
          {avatars.slice(0, 4).map((a, i) => (
            <Image
              key={i}
              src={a.src}
              alt={a.alt ?? "user"}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-black/60 object-cover"
              width={32}
              height={32}
            />
          ))}
          {typeof extraCount === "number" && (
            <span className="inline-grid place-items-center h-8 w-8 rounded-full bg-white text-black text-xs font-semibold ring-2 ring-black/60">
              +{extraCount}
            </span>
          )}
        </div>

        <a
          href={href}
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors border border-white/10"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
