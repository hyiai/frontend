import React from "react";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import Image from "next/image";
import Card2Background from "@/assets/plan/card2Background.png";
import Link from "next/link";
import CustomButton from "@/components/shared/customButton";

const MileStone = () => {
  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Key Achievements ",
      subTitle1: "Platform Launch: Officially launched on May 19, 2025.",
      subTitle2:
        "Global Adoption: Over 50,000 talent professionals registered on the platform within the first months.",
      subTitle3:
        "Enterprise Traction: Secured 5 international clients onboarded, validating demand across industries and geographies.",
    },
    {
      id: 2,
      title: "Speed Without Compromise",
      subTitle1: "Growth: Scale to 500,000 registered talent worldwide.",
      subTitle2:
        "Enterprise Expansion: Onboard 100+ international clients, spanning multiple industries and regions.",
      subTitle3:
        "Innovation: Integrate advanced AI features to enhance talent matching and client experience.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl text-white space-y-8 sm:space-y-12 lg:space-y-16 mt-4 sm:mt-6 md:mt-8 lg:mt-16 px-4 sm:px-6 lg:px-8">
      <CustomGradientHoverWrapper>
        <div className="space-y-4">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-8 lg:mb-12 leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center">
            HYI.AI Milestones & Growth Roadmap
          </h1>
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="card w-full rounded-xl border border-white/20 overflow-hidden"
              >
                <div className="card-border rounded-xl"></div>
                <div className="card-content rounded-lg text-dark_mode-300 p-4 xs:p-5 sm:p-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold relative z-10 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-4">
                    {card.title}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2 text-base leading-relaxed relative z-10">
                      <span className="mt-1">•</span>
                      <span>{card.subTitle1}</span>
                    </div>

                    <div className="flex items-start gap-2 text-base leading-relaxed relative z-10">
                      <span className="mt-1">•</span>
                      <span>{card.subTitle2}</span>
                    </div>

                    <div className="flex items-start gap-2 text-base leading-relaxed relative z-10">
                      <span className="mt-1">•</span>
                      <span>{card.subTitle3}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomGradientHoverWrapper>
      <div className="relative mt-8 md:mt-16 rounded-2xl overflow-hidden mb-4">
        {/* Background image */}
        <Image
          src={Card2Background}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 -z-10"
          priority
        />
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 capitalize">
            Contact Investor Relations
          </h1>
          <p className="mt-2 text-dark_mode-300">
            For investor inquiries, partnership discussions, or to learn more
            about HYI.AI’s growth opportunities,
            <br />
            please contact us:{" "}
            <a
              href="mailto:investor@hyi.ai"
              className="text-white font-medium underline hover:text-purple-400 transition"
            >
              investor@hyi.ai
            </a>
          </p>
          <div className="pt-4">
            <Link
              href="/talk-to-our-expert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton>Connect With Us</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MileStone;
