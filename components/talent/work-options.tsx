// components/WorkOptions.tsx
"use client";
import Image from "next/image";
import React from "react";
// import { Star } from "lucide-react"; // you can swap this icon for your actual purple icon

const workByHour = [
  "Flexible part-time projects",
  "Get paid based on preferred hourly or project-based.",
  "Hassle-free contracts and secure payments.",
];

const fullTime = [
  "Secure full-time employment with top companies.",
  "Direct access to hiring managers & job opportunities.",
  "Competitive salaries with above-market pay.",
];

export default function WorkOptions() {
  return (
    <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 ">
      <div className="rounded-xl border border-white/10  p-8 shadow-[0_0_30px_-10px_rgba(0,0,0,0.6)]">
        {/* Heading */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
          Join a network of elite professionals and work on high-impact projects
          with global companies.
        </h2>
        <p className="mt-3 text-white/70 max-w-4xl">
          Expand your horizons and connect with industry leaders. Collaborate on
          transformative initiatives that shape the future.
        </p>

        {/* Lists */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work by Hour */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Work by the Hour
            </h3>
            <ul className="space-y-3">
              {workByHour.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Image
                    src="/starcheck.png"
                    alt="star-check"
                    className="h-4 w-4 mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Full-Time */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Join Us Full-Time
            </h3>
            <ul className="space-y-3">
              {fullTime.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  {/* <Star size={18} className="text-violet-400 mt-1 flex-shrink-0" />
                   */}
                  <Image
                    src="/starcheck.png"
                    alt="star-check"
                    className="h-4 w-4 mt-1 flex-shrink-0"
                    width={24}
                    height={24}
                  />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
