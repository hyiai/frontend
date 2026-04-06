import React from "react";
import {
  Rocket,
  ScanFace,
  LayoutDashboard,
  MonitorSmartphone,
  FastForward,
  Eclipse,
  Languages,
} from "lucide-react";

const CoreValues = () => {
  const coreValues = [
    {
      icon: <ScanFace className="w-6 h-6" />,
      title: "Trust & Transparency",
      description:
        "We prioritize verified talent, secure onboarding, and clear communication to build long-term trust between clients and professionals.",
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Efficiency & Speed",
      description:
        "Our streamlined onboarding, smart matching, and project management tools drastically reduce hiring cycles and time-to-productivity.",
    },
    {
      icon: <Eclipse className="w-6 h-6" />,
      title: "Global Accessibility",
      description:
        "We empower businesses and talents globally by enabling cross-border collaboration without barriers of location, time zone, or compliance.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Scalability & Flexibility",
      description:
        "Whether it's one project or an entire remote team, the platform adapts to scale with client needs — offering B2B and B2I models.",
    },
    {
      icon: <FastForward className="w-6 h-6" />,
      title: "Quality-Driven Matching",
      description:
        "Through assessments, interviews, and profile validation, we ensure companies engage only with thoroughly evaluated and skilled talents.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Data Privacy & Security",
      description:
        "We are committed to protecting user data through robust verification, secure cloud infrastructure, and adherence to international data standards.",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Human-Centered Automation",
      description:
        "We balance automation (e.g., onboarding, verification, messaging) with relationship managers who provide personalized support.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto text-white relative mb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl"></div>
      {/* Header */}
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight capitalize">
          Core Values of Our Product Virtual Assistance by HYI.AI
        </h2>
      </div>
      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First row - 4 cards */}
        {coreValues.slice(0, 4).map((value, index) => (
          <div
            key={index}
            className="p-4 w-fit glass-gradient rounded-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
            <div className="flex items-center mb-4 relative z-10">
              <div>{value.icon}</div>
              <h3 className="text-base lg:text-lg ml-3">{value.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed relative z-10">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Second row - 3 cards centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {coreValues.slice(4).map((value, index) => (
          <div
            key={index}
            className="p-4 w-fit glass-gradient rounded-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
            <div className="flex items-center mb-4">
              <div>{value.icon}</div>
              <h3 className="text-lg text-white ml-3">
                {value.title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
