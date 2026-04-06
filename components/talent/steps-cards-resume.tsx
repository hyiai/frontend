// components/talent/steps-cards.tsx
import React from "react";
import CustomGradientHoverWrapper from "../shared/customGradientHoverWrapper";

type Step = {
  n: number;
  title: string;
  subtitle: string;
  variant: "indigo" | "purple";
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Choose a Free\nResume Template",
    subtitle: "You've got plenty of formatting and style options",
    variant: "indigo",
  },
  {
    n: 2,
    title: "Customize the\nDesign",
    subtitle: "Make your own resume easily and customize all content",
    variant: "purple",
  },
  {
    n: 3,
    title: "Share as PDF \nor Web",
    subtitle: "Download your resume or share your own online resume website",
    variant: "purple",
  },
];

export default function StepsCards() {
  return (
    // Section-wide glow background
    <div className="rounded-3xl p-6 sm:p-8">
      <CustomGradientHoverWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </CustomGradientHoverWrapper>
    </div>
  );
}

function StepCard({ n, title, subtitle }: Step) {
  // const defaultBg = "bg-transparent"; // transparent by default
  // const hoverBg = `
  //   hover:bg-[url('/Card-bg-03.webp')]
  //   hover:bg-cover hover:bg-center hover:bg-no-repeat
  // `;

  return (
    <article
      className={`
        card overflow-hidden text-white border border-white/10 rounded-3xl transition-all duration-300 bg-transparent cursor-pointer
      `}
    >
      {/* dark overlay on hover for readability */}
      {/* <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors duration-300 pointer-events-none z-0" /> */}

      <div className="card-border" />
      <div className="card-content h-full relative p-6 sm:p-8">
        <div className="relative z-100">
          <div className="relative mb-6">
            <div
              className="
            relative flex h-12 w-12 items-center justify-center
            rounded-full text-base font-extrabold
            bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.28),rgba(255,255,255,0.12)_60%,rgba(0,0,0,0.15))]
            ring-1 ring-white/30 shadow-[0_6px_20px_rgba(0,0,0,0.35)]
          "
            >
              {n}
              <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)]" />
            </div>
          </div>
          <h3 className="whitespace-pre-line text-xl sm:text-2xl font-bold leading-snug">
            {title}
          </h3>

          <p className="mt-4 max-w-md text-sm sm:text-base text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}
