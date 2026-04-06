import { Wrench, Users, BarChart3, Clock } from "lucide-react";
import Image from "next/image";
import Radio from "@/assets/plan/radio.png";
import Check from "@/assets/plan/check.png";

const gains = [
  {
    icon: Wrench,
    title: "Project Efficiency",
    description: "Your work is managed by experts — no hidden fees, no delays.",
  },
  {
    icon: Users,
    title: "Strategic Tech Leadership",
    description:
      "Guidance from CTOs and Architects to future-proof your systems.",
  },
  {
    icon: BarChart3,
    title: "Business-Centric Focus",
    description: "Business analysts work closely to align tech with your KPIs.",
  },
  {
    icon: Clock,
    title: "Speed to Market",
    description: "Skip hiring delays. We deploy teams fast and flexibly.",
  },
];

export default function GlobalWorkForce() {
  return (
    <div className="w-full relative mx-auto max-w-7xl text-white mt-10 md:mt-12 lg:mt-16">
      <div className=" hidden md:flex overflow-visible pointer-events-none absolute top-[50%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" overflow-visible core-gradient w-[1200px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 capitalize">
          One platform for your global workforce
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center lg:items-start justify-items-center lg:justify-items-start">
        {/* Left Column - What You Gain */}
        <div>
          <h2 className="text-2xl mb-8">What You Gain</h2>
          <div className="space-y-6">
            {gains.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 glass-gradient rounded-xl relative overflow-hidden group"
                >
                  {/* Radial hover gradient */}
                  <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
                  <div className="flex items-center mb-3">
                    <Icon className="w-6 h-6 mr-2" />
                    <h3 className="text-lg font-semibold text-dark_mode-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="ml-8 text-dark_mode-300">{item.description}</p>
                  {/* Glass hover overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Right Column */}
        <div className="space-y-8">
          {/* Why Choose US? */}
          <div className="relative z-10">
            <h2 className="text-2xl mb-4">Why Choose US?</h2>
            <p className="text-base mb-6 text-dark_mode-300">
              Empower Your Vision with Elite Talent
            </p>
            <div className="space-y-3 text-dark_mode-300">
              <div className="flex items-center">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                <span>Rapid Scaling with 5M Verified Professionals</span>
              </div>
              <div className="flex items-center">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                <span>100% Talent Match Assurance</span>
              </div>
              <div className="flex items-center">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                <span>Global Delivery with Local Expertise</span>
              </div>
              <div className="flex items-center">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                <span>Flexible Engagement Models</span>
              </div>
            </div>
          </div>
          {/* Trusted By Industry Leaders */}
          <div className="relative z-10">
            <h2 className="text-2xl mb-4">
              Trusted By Industry Leaders
            </h2>
            <div className="space-y-3 text-dark_mode-300">
              <div className="flex items-center">
                <Image src={Check} alt="Check" className="w-4 h-4 mr-2" />
                <span>100% Talent Match Assurance</span>
              </div>
              <div className="flex items-center">
                <Image src={Check} alt="Check" className="w-4 h-4 mr-2" />
                <span>24/7 Global Support</span>
              </div>
            </div>
          </div>
          {/* Features */}
          <div className="relative z-10">
            <h2 className="text-2xl mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column Features */}
              <div className="space-y-4 text-dark_mode-300">
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">5M</span>
                    <span className=" ml-1">Professionals</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">24×7</span>
                    <span className=" ml-1">Premium Support</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">Included</span>
                    <div>Product Manager</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">Included</span>
                    <div>Business Analyst</div>
                  </div>
                </div>
              </div>
              {/* Right Column Features */}
              <div className="space-y-4 text-dark_mode-300">
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">Dedicated</span>
                    <span className=" ml-1">Relationship Manager</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">Guaranteed</span>
                    <span className=" ml-1">Talent Replacement</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">Strategic</span>
                    <span className=" ml-1">CTO/Architect Leadership</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                  <div>
                    <span className="font-semibold text-white">One Month</span>
                    <div>free cloud server</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
