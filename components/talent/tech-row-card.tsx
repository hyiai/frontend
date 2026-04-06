// components/tech-row-card.tsx
"use client";
import React from "react";
import Link from "next/link";
import { Box, ChevronRight } from "lucide-react";
import tickMark from "@/assets/shared/todo-tick-mark.svg";
import Image from "next/image";

type Props = {
  icon: string; // remote URL or may be empty
  title: string;
  desc: string;
  href?: string;
};

export default function TechRowCard({ icon, title, desc, href = "#" }: Props) {
  const hasIcon = typeof icon === "string" && icon.trim().length > 0;

  return (
    <article
      className={[
        "group relative w-full rounded-xl border border-white/10",
        "px-4 sm:px-5 py-4",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        "hover:border-violet-400/40 transition-colors",
      ].join(" ")}
    >
      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        {/* Left section: icon + text */}
        <div className="flex-1 w-full min-w-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 shrink-0 rounded-lg grid place-items-center overflow-hidden">
              {hasIcon ? (
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              ) : (
                <Box className="h-6 w-6 text-white/70" />
              )}
            </div>
            <h3 className="text-white font-semibold leading-6">{title}</h3>
          </div>

          <p className="text-white/70 text-sm mt-2 line-clamp-2 text-left ml-2">
            {desc}
          </p>
        </div>
        {/* CTA */}
        <Link
          href={href}
          className={[
            "inline-flex items-center gap-2",
            "px-3 py-2 text-xs font-medium text-white rounded-lg",
            "hover:bg-white/5 transition",
            "w-full md:w-auto md:ml-2",
          ].join(" ")}
        >
          <Image src={tickMark} alt="arrow-right" width={19} height={19} />
          <span>Learn More</span>
          <ChevronRight className="size-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </article>
  );
}
