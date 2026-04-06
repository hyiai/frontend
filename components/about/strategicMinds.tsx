import React from "react";
import Image from "next/image";
import ProfileImage1 from "@/assets/about/LeadershipImages/Image1.svg";
import ProfileImage2 from "@/assets/about/LeadershipImages/Image2.svg";
import ProfileImage3 from "@/assets/about/LeadershipImages/Image3.svg";
import ProfileImage4 from "@/assets/about/LeadershipImages/Image4.svg";
import ProfileImage5 from "@/assets/about/LeadershipImages/Image5.svg";

const AboutUsStrategicMinds = () => {
  // Leadership team data matching the Figma design
  const strategicMindsTeam = [
    {
      id: 1,
      image: ProfileImage1,
      name: "Andrey Khusid",
      position: "CEO and Co-founder",
    },
    {
      id: 2,
      image: ProfileImage2,
      name: "Anna Boyarkina",
      position: "Head of Product",
    },
    {
      id: 3,
      image: ProfileImage3,
      name: "Yuliya Malysh",
      position: "CTO and Co-founder",
    },
    {
      id: 4,
      image: ProfileImage4,
      name: "Yuliya Malysh",
      position: "CTO and Co-founder",
    },
    {
      id: 5,
      image: ProfileImage5,
      name: "Yuliya Malysh",
      position: "CTO and Co-founder",
    },
  ];

  return (
    <div className="relative rounded-2xl backdrop-blur-sm overflow-hidden">
      <div className="rounded-xl backdrop-blur-md bg-opacity-10 text-white space-y-8 p-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">
            Strategic Minds Behind HYI.AI
          </h1>
          <p className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed">
            The HYI.AI Advisory Board consists of industry experts who provide
            strategic guidance, domain insights, and governance to drive
            long-term growth. Their diverse experience ensures innovation,
            compliance, and alignment with global market needs.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {strategicMindsTeam.map((leader) => (
            <div
              key={leader.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              {/* Profile Image - already polygon cut */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={128}
                    height={128}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-200 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-gray-300 font-medium text-sm">
                  {leader.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsStrategicMinds;
