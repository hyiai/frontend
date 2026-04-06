import React from "react";
import Image from "next/image";
import ProfileImage1 from "@/assets/about/LeadershipImages/ProfileImage1.png";
import ProfileImage2 from "@/assets/about/LeadershipImages/ProfileImage2.png";
import ProfileImage3 from "@/assets/about/LeadershipImages/ProfileImage3.png";
import ProfileImage4 from "@/assets/about/LeadershipImages/ProfileImage4.png";
import ProfileImage5 from "@/assets/about/LeadershipImages/ProfileImage5.png";
import ProfileImage6 from "@/assets/about/LeadershipImages/ProfileImage6.png";
import ProfileImage7 from "@/assets/about/LeadershipImages/ProfileImage7.png";
import ProfileImage8 from "@/assets/about/LeadershipImages/ProfileImage8.png";
import ProfileImage9 from "@/assets/about/LeadershipImages/ProfileImage9.png";
import ProfileImage10 from "@/assets/about/LeadershipImages/ProfileImage10.png";

const AboutUsLeaderShip = () => {
  // Leadership team data matching the Figma design
  const leadershipTeam = [
    {
      id: 1,
      image: ProfileImage1,
      name: "Priya Jain",
      position: "HRBP Director",
    },
    {
      id: 2,
      image: ProfileImage2,
      name: "Saha Banibrata",
      position: "Senior Sales VP",
    },
    {
      id: 3,
      image: ProfileImage3,
      name: "Rajanish S. Sharma",
      position: "Chief Strategic Officer",
    },
    {
      id: 4,
      image: ProfileImage4,
      name: "Noorullah Shariff R",
      position: "Admin & Operation Head",
    },
    {
      id: 5,
      image: ProfileImage5,
      name: "Adithya M",
      position: "Technical Head",
    },
    {
      id: 6,
      image: ProfileImage6,
      name: "Mohd Danyaal Irfan",
      position: "Creative Head",
    },
    {
      id: 7,
      image: ProfileImage7,
      name: "Shashidhara Holla",
      position: "Senior Developer",
    },
    {
      id: 8,
      image: ProfileImage8,
      name: "Navya Yadlapalli",
      position: "Senior Developer",
    },
    {
      id: 9,
      image: ProfileImage9,
      name: "Abhishek Adeppa",
      position: "Sales Manager",
    },
    {
      id: 10,
      image: ProfileImage10,
      name: "Pooja K.S",
      position: "Quality Analyst",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl"></div>
      {/* Header Section */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight mb-6">
          Leadership That Builds the Future of Work
        </h1>
        <p className="text-gray-300 text-base max-w-5xl mx-auto leading-relaxed">
          At HYI.AI, leadership is driven by a clear vision to transform digital
          hiring through innovation, trust, and user-centric design. Our team
          brings together expertise across technology, operations, and talent
          engagement to build a platform that balances automation with human
          support.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {leadershipTeam.map((leader) => (
          <div
            key={leader.id}
            className="p-6 glass-gradient rounded-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
            <div className="text-center mb-4">
              <h3 className="text-white font-semibold text-base mb-2 transition-colors">
                {leader.name}
              </h3>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="relative w-38 h-38">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={152}
                  height={152}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-300 font-medium text-sm">
                {leader.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsLeaderShip;
