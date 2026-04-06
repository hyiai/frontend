import React from "react";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";

const CompanyOverviewCard = () => {
  // Feature cards data
  const featureCards = [
    {
      id: 1,
      title: "Pre-Vetted Global Talent Pool",
      description:
        "Gain access to a curated network of verified professionals across key functions like tech, design, and operations. Every candidate is rigorously vetted for skills, experience, and communication, ensuring only top-tier talent joins your team.",
    },
    {
      id: 2,
      title: "Speed Without Compromise",
      description:
        "Get matched with qualified professionals in as little as 24 hours. Our AI-driven Talent Matching Engine ensures a strong alignment between your project requirements and the capabilities of our experts.",
    },
    {
      id: 3,
      title: "Trusted by Companies Worldwide",
      description:
        "From fast-growing startups to global enterprises, organizations across industries rely on HYI.AI to build scalable remote teams that accelerate growth and innovation.",
    },
    {
      id: 4,
      title: "Global Reach, Local Expertise",
      description:
        "With professionals in over 150 countries and territories, we combine global coverage with local know-how—bridging time zones, languages, and work cultures to ensure smooth collaboration.",
    },
  ];

  return (
    <CustomGradientHoverWrapper>
      <div className="space-y-8">
        {/* Overview Section */}
        <div className="card w-full rounded-xl border border-white/20 overflow-hidden">
          <div className="card-border rounded-xl"></div>
          <div className="card-content rounded-lg sm:rounded-xl text-dark_mode-300 space-y-4 xs:space-y-6 sm:space-y-8 p-4 xs:p-5 sm:p-6">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent relative z-10">
                HYI.AI Overview
              </h2>
              <div className="text-base space-y-4 text-gray-300 relative z-10">
                <p>
                  HYI.AI is a Next-Generation Global Talent Marketplace Designed
                  for Startups, Enterprises, and Scaling companies. Our Platform
                  Enables Businesses to Hire Top-Tier, Pre-Vetted Remote
                  Professionals with Speed, Flexibility, and Confidence Without
                  The Burden of Long-Term Commitments.
                </p>
                <p>
                  Whether You&apos;re Scaling Rapidly, Filling Niche Roles, or
                  Extending Your Team&apos;s Capabilities, HYI.AI offers a
                  Seamless, on-Demand Talent Solution—Available Hourly, Weekly,
                  Monthly, or Full-Time. We Connect Companies of All Sizes With
                  Skilled Professionals Across a Wide Range of Specialties,
                  Ensuring The Perfect Fit for Evolving Business needs.
                </p>
                <p>
                  HYI.AI is the world&apos;s largest remote, verified talent
                  marketplace—empowering startups, enterprises, and
                  professionals across 150+ countries, regions, and territories.
                  We enable companies to seamlessly source, hire, and manage
                  top-tier remote talent on demand, aligned precisely with
                  evolving business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 leading-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            What Makes HYI.AI Different
          </h2>
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="card w-full rounded-xl border border-white/20 overflow-hidden"
              >
                <div className="card-border rounded-xl"></div>
                <div className="card-content rounded-lg text-dark_mode-300 p-4 xs:p-5 sm:p-6">
                  <h3 className="text-lg font-semibold mb-2 relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed relative z-10">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="card w-full rounded-xl border border-white/20 overflow-hidden">
            <div className="card-border rounded-xl"></div>
            <div className="card-content rounded-lg text-dark_mode-300 p-4 xs:p-5 sm:p-6">
              <h3 className="text-lg font-semibold mb-2 relative z-10">
                On-Demand Global Talent, Just a Click Away
              </h3>
              <p className="text-base leading-relaxed relative z-10">
                Hire remote professionals by the hour, week, month, or
                full-time—no contracts, no hassle. Easily scale your team up or
                down based on real-time business needs. If a talent doesn&apos;t
                meet expectations or fails to complete tasks, HYI.AI ensures
                full accountability. We monitor progress and, if needed, replace
                the talent within 48 hours—something that sets us apart from
                traditional freelance platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomGradientHoverWrapper>
  );
};

export default CompanyOverviewCard;
