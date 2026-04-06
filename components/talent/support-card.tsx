"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";

type SupportCardProps = {
  title: string;
  items: React.ReactNode[]; // strings or JSX (for links)
  className?: string;
  footer?: React.ReactNode; // optional footer row (e.g., Google Maps link)
};

export default function SupportCard({
  title,
  items,
  className,
  footer,
}: SupportCardProps) {
  return (
    <article
      className={clsx(
        "relative rounded-2xl border border-white/10",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        "hover:border-violet-400/40 transition-colors",
        "p-5 sm:p-6",
        className
      )}
    >
      <h3 className="text-white font-semibold text-lg">{title}</h3>

      <ul className="mt-3 space-y-2.5">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-sm leading-6 text-white/80"
          >
            <Image
              src="/starcheck.png"
              alt=""
              className="h-4 w-4 mt-1 object-contain"
              width={24}
              height={24}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      {footer ? (
        <div className="mt-4 pt-3 border-t border-white/10 text-sm text-white/70">
          {footer}
        </div>
      ) : null}
    </article>
  );
}
