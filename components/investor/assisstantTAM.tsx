"use client";

import Image from "next/image";
import CardBackground from "@/assets/plan/CardBackground.png";
import Radio from "@/assets/plan/radio.png";
import { Brain, Globe, SquareKanban } from "lucide-react";

export default function AssisstantTAM() {
  return (
    <div className="w-full mx-auto max-w-7xl text-white relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_40%)] blur-3xl"></div>

      {/* Heading */}
      <div className="w-full flex items-center justify-center text-center mb-0 md:mb-6">
        <h1 className="relative z-10 text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 capitalize">
          HYI.AI Virtual Assistant TAM <br />
          (Total Addressable Market)
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-3 p-4">
        {/* Card 1 */}
        <div className="p-6 rounded-xl relative overflow-hidden group flex flex-col hover:scale-106 hover:shadow-xl">
          <Image
            src={CardBackground}
            alt="Card Background"
            fill
            className="object-cover absolute inset-0 -z-10"
            priority
          />
          <Globe className="mb-2" />
          <h3 className="text-lg font-semibold mb-5">
            Global Virtual Assistant Market
          </h3>
          <ul className="space-y-6 text-sm text-dark_mode-300">
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p>
                  Valued at{" "}
                  <span className="font-bold text-white">$12.76B in 2025</span>{" "}
                  → expected to hit{" "}
                  <span className="font-bold text-white">$33.4B by 2030</span>{" "}
                  (CAGR ~21%). <span className="text-xs">(NextMSC, 2025).</span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p>
                  Estimated at{" "}
                  <span className="font-bold text-white">$12.9B in 2024</span> →
                  projected to reach{" "}
                  <span className="font-bold text-white">$98.7B by 2033</span>{" "}
                  (CAGR ~24.6%).{" "}
                  <span className="text-xs">(Growth Market Reports, 2024).</span>
                </p>
              </div>
            </li>
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl relative overflow-hidden group flex flex-col hover:scale-106 hover:shadow-xl">
          <Image
            src={CardBackground}
            alt="Card Background"
            fill
            className="object-cover absolute inset-0 -z-10"
            priority
          />
          <Brain className="mb-2" />
          <h3 className="text-lg font-semibold mb-5">
            Intelligent Virtual Assistants (IVA)
          </h3>
          <ul className="space-y-6 text-sm text-dark_mode-300">
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p>
                  <span className="font-bold text-white">$24.8B in 2025</span> →{" "}
                  expected{" "}
                  <span className="font-bold text-white">$150.6B by 2032</span>{" "}
                  (CAGR ~29.6%).{" "}
                  <span className="text-xs">(Emergen Research, 2025).</span>
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p>
                  Customer service use case alone:{" "}
                  <span className="font-bold text-white">$10.8B in 2023</span> →{" "}
                  projected{" "}
                  <span className="font-bold text-white">$91.3B by 2033</span>.{" "}
                  <span className="text-xs">(Consa Insights, 2024).</span>
                </p>
              </div>
            </li>
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl relative overflow-hidden group flex flex-col hover:scale-106 hover:shadow-xl">
          <Image
            src={CardBackground}
            alt="Card Background"
            fill
            className="object-cover absolute inset-0 -z-10"
            priority
          />
          <SquareKanban className="mb-2" />
          <h3 className="text-lg font-semibold mb-5">Regional Breakdown</h3>
          <ul className="space-y-6 text-sm text-dark_mode-300">
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p className="font-semibold">Asia-Pacific IVA Market:</p>
                <p>
                  <span className="font-bold text-white">$1.9B (2025)</span> →{" "}
                  <span className="font-bold text-white">$10.07B (2030)</span>,
                  CAGR ~26%.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Image src={Radio} alt="Radio" className="w-4 h-4 mt-1 mr-2" />
              <div>
                <p className="font-semibold">U.S. IVA Market:</p>
                <p>
                  <span className="font-bold text-white">$1.5B (2025)</span> →{" "}
                  <span className="font-bold text-white">$11.4B (2030)</span>,
                  CAGR ~24%.
                </p>
              </div>
            </li>
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}
