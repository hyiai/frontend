import Image from "next/image";
import PositioningImage from "@/assets/investor/positioning.png";
import OppurtunityImage from "@/assets/investor/oppurtunity.png";
import SummaryImage from "@/assets/investor/summary.png";

export default function PositioningAndOpportunity() {
  return (
    <div className="mx-auto max-w-7xl text-white space-y-8 sm:space-y-12 lg:space-y-16 mt-8 sm:mt-10 md:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-8">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-28 w-full">
        <div className="w-full max-w-sm sm:max-w-md lg:w-1/3 order-1 lg:order-1">
          <Image
            src={PositioningImage}
            alt=""
            width={400}
            height={265}
            className="w-full h-auto"
          />
        </div>
        <div className="text-center lg:text-start w-full lg:w-2/3 order-2 lg:order-2 px-2 sm:px-4 lg:px-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent mb-4 mt-6 sm:mt-8 lg:mt-0 capitalize">
            HYI.AI&apos;s Positioning
          </h1>
          <p className="text-dark_mode-300 leading-relaxed mb-4">
            HYI.AI sits at the intersection of Intelligent Virtual Assistants +
            Enterprise AI, where the fastest growth is happening:
          </p>
          <ul className="text-dark_mode-300 leading-relaxed space-y-2">
            <li className="flex items-start">
              <span className="mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                Enterprise adoption of AI assistants to automate workflows and
                customer interactions.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                Focus on trust, compliance, and explain ability, making HYI.AI
                attractive in regulated industries.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 flex-shrink-0">•</span>
              <span>
                Recurring revenue SaaS model, aligning with how enterprises
                procure AI solutions.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-28 w-full">
        <div className="text-center lg:text-start w-full lg:w-2/3 max-w-3xl order-2 lg:order-1 px-2 sm:px-4 lg:px-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent mb-4 mt-6 sm:mt-8 lg:mt-0 capitalize">
            HYI.AI&apos;s Opportunity
          </h1>
          <p className="text-dark_mode-300 leading-relaxed">
            Positioned at the intersection of IVA and enterprise automation,
            HYI.AI is targeting a high-growth niche within a broader AI market
            projected to exceed $150 billion. With expansion focused on customer
            service and domain-driven verticals, HYI.AI has the runway to
            capture scalable, recurring revenue in a space growing at 20–30%
            annually.
          </p>
        </div>
        <div className="w-full max-w-sm sm:max-w-md lg:w-1/3 order-1 lg:order-2">
          <Image
            src={OppurtunityImage}
            alt=""
            width={400}
            height={265}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-28 w-full">
        <div className="w-full max-w-sm sm:max-w-md md:w-1/3 order-2 md:order-1">
          <Image
            src={SummaryImage}
            alt=""
            width={400}
            height={265}
            className="w-full h-auto"
          />
        </div>
        <div className="text-center md:text-start w-full md:w-2/3 order-1 md:order-2 px-2 sm:px-4 md:px-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-b from-dark_mode-300 to-dark_mode-400 bg-clip-text text-transparent mb-4 mt-6 sm:mt-8 md:mt-0 capitalize">
            Summary
          </h1>
          <div className="space-y-4">
            <p className="text-dark_mode-300 leading-relaxed mb-4">
              The Virtual Assistant market is experiencing exponential growth,
              expanding from $7–13B today to between $33B and $99B by 2030–2033,
              driven by enterprise adoption of conversational AI and automation.
            </p>
            <p className="text-dark_mode-300 leading-relaxed mb-4">
              Within this, the Intelligent Virtual Assistant (IVA) segment is
              the real growth engine forecasted to expand nearly 15x from $11.4B
              in 2022 to $150B+ by 2032. Customer service alone will represent a
              $91B+ opportunity by 2033.
            </p>
            <p className="text-dark_mode-300 leading-relaxed mb-4">
              Regional dynamics show both U.S. and Asia-Pacific markets growing
              at 24–26% CAGR, signaling widespread adoption.
            </p>
            <p className="text-dark_mode-300 leading-relaxed mb-4">
              HYI.AI&apos;s Opportunity: Positioned in the IVA space with a
              focus on enterprise-scale solutions, HYI.AI is targeting a slice
              of a $150B+ TAM, with growth tailwinds of 20–30% annually. This
              positions the company for scalable adoption across industries
              while maintaining differentiation through trustworthy,
              human-centered AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
