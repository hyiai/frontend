// components/shared/BackButton.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = {
  fallbackHref?: string; // where to go when no query string
  className?: string;
  label?: string;
};

export default function BackButton({
  fallbackHref = "/",
  className = "",
  label = "Back",
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    if (searchParams.toString()) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 text-white/80 hover:text-white transition
                  rounded-lg px-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${className} cursor-pointer`}
      aria-label={label}
    >
      <ArrowLeft size={18} />
      <span className="text-sm">{label}</span>
    </button>
  );
}
