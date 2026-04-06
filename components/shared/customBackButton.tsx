"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function CustomBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-dark_mode-300 hover:underline hover:underline-offset-4 cursor-pointer gap-1.5"
    >
      <ArrowLeft size={18} /> Back
    </button>
  );
}
