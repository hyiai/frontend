// app/your-page/page.tsx (server component)
// import Image from "next/image";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import RightHeroVisual from "@/components/talent/resume-hero";
import ResumeStepsVisual from "@/components/talent/resume-steps-visual";
import StepsCards from "@/components/talent/steps-cards-resume";
import WritingTipsSection from "@/components/talent/writing-tips-section";
import React from "react";
import GradientBackground from "@/components/shared/gradientBackground";
import Link from "next/link";

export const dynamic = "force-static";

export default function Page() {
  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center px-4 sm:px-6 md:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[55%] sm:w-[40%] md:w-[35%] h-[420px] sm:h-[520px] md:h-[600px] bg-[radial-gradient(ellipse_at_top_left,rgba(217,70,239,0.6)_0%,rgba(217,70,239,0.25)_35%,transparent_70%)] bg-no-repeat" />
      </div>
      <Header />

      {/* Hero section */}
      <div className="mx-auto grid max-w-7xl mt-4 sm:mt-8 md:mt-16 grid-cols-1 items-center px-0 sm:px-6 py-8 sm:py-12 md:py-16 md:grid-cols-2 gap-10 lg:gap-16 lg:py-2">
        {/* LEFT: text */}
        <div className=" flex flex-col items-center md:items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] sm:text-xs font-medium text-white/80 backdrop-blur">
            The #1 Resume Builder
          </span>
          <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Create a Job-Ready <br />
            <span className="text-brand-800">Resume in Minutes</span>
          </h1>
          <p className="mt-3 sm:mt-4 max-w-[70%] md:max-w-xl text-sm sm:text-base leading-7 text-white/70 text-center md:text-left ">
            Create your resume easily with our free builder and professional
            templates.
          </p>
          <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
            <Link
              href="https://va.hyi.ai/talent-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-3xl px-5 py-2.5 sm:py-3 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 transition hover:shadow-xl bg-gradient-to-r from-brand-600 to-brand-600"
            >
              Build My Resume
            </Link>
          </div>
          {/* <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/60">
          Deny, Ethan and <span className="font-semibold text-white">hundreds of thousands</span> of talents have succeeded getting hired and accelerating their careers with HYI.AI.
        </p> */}
        </div>

        <GradientBackground>
          <aside className="mx-auto w-full max-w-[560px]">
            <RightHeroVisual />
          </aside>
        </GradientBackground>
      </div>

      {/* Steps / Resume template section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start md:items-center gap-5 sm:gap-8 md:gap-10 px-0 md:grid-cols-2 lg:gap-16 mt-4 md:mt-20">
        {/* LEFT: resume template visual with a SMALLER spread */}
        <GradientBackground>
          <ResumeStepsVisual />
        </GradientBackground>

        {/* RIGHT: text */}
        <div>
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            3 Steps. 5 Minutes.
          </h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-7 text-white/70">
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              href="https://va.hyi.ai/talent-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-3xl px-5 py-2.5 sm:py-3 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 transition hover:shadow-xl bg-gradient-to-r from-brand-600 to-brand-600"
            >
              Build My Resume
            </Link>
          </div>
        </div>
      </div>

      {/* Steps cards (no extra orb here per your ask) */}
      <GradientBackground classGradient="md:hidden">
        <div className="w-full max-w-7xl mx-auto space-y-5 sm:space-y-10 px-0 sm:px-6">
          <StepsCards />
        </div>
      </GradientBackground>

      {/* Writing tips (clean) */}
      <div className="mx-auto max-w-7xl px-0 sm:px-6 mt-0 md:mt-12 items-start">
        <WritingTipsSection />
      </div>

      <Footer />
    </section>
  );
}
