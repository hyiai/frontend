// components/talent/writing-tips-section.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import RightHeroVisual from "./resume-hero";

export default function WritingTipsSection() {
  return (
    <section className="w-full text-white py-8 md:py-16">
      <div className="mx-auto w-full  grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-xl sm:text-3xl font-bold leading-snug">
            Get The Advantage With <br />
            <span className="">Writing Tips</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-white/70 max-w-lg">
            You don’t have to be a professional writer to create a job-winning
            resume. Our resume maker has hundreds of pre-written suggestions and
            tips that can help you craft an outstanding resume.
          </p>

          <div className="mt-8">
            <Link
              href="https://va.hyi.ai/talent-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 transition hover:shadow-xl bg-gradient-to-r from-brand-600 to-brand-600"
            >
              Build My Resume
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mx-auto w-full max-w-[500px]">
          <Image
            src="/rb-sec-4.png"
            alt="Writing Tips Visual"
            className="w-full h-auto rounded-lg shadow-lg"
            width={587}
            height={547}
          />
        </div>
      </div>
    </section>
  );
}
