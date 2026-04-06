"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
//import ProfileImage from "@/assets/about/LeadershipImages/ProfileImage.png";

const AboutUsStrategicAndMedia = () => {
  const [imageErrors, setImageErrors] = React.useState<{
    [id: number]: boolean;
  }>({});
  // Leadership team data
  // const strategicMindsTeam = [
  //   {
  //     id: 1,
  //     image: ProfileImage,
  //     name: "Yakub Sheikh",
  //     position: "Strategic Investor & founder",
  //   },
  // ];

  // Media items data
  const mediaItems = [
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=xGK02RlFNtU",
      title: "HYI.AI Innovation Showcase",
    },
    {
      id: 2,
      link: "https://www.youtube.com/watch?v=n7BQfAV28tg",
      title: "AI Solutions Demo",
    },
    {
      id: 3,
      link: "https://www.youtube.com/watch?v=1PsWTm5YWaU",
      title: "Quick AI Tips",
    },
  ];

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return null;
  };

  const handleVideoClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="w-full max-w-7xl mx-auto text-white relative">
      <div className=" hidden md:flex overflow-visible pointer-events-none absolute top-[65%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" overflow-visible core-gradient w-[1200px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>

      {/* Our Media Section */}
      <div className="relative z-10 text-center mb-12 w-full">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight mb-6">
          Our HYI.AI Media
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          At HYI.AI, we go beyond the ordinary by delivering innovative
          solutions, personalized experiences, and unparalleled support,
          ensuring your business achieves lasting success in a competitive
          landscape.
        </p>
      </div>

      {/* Media Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {mediaItems.map((item) => {
          const thumbnailUrl = getYouTubeThumbnail(item.link);

          return (
            <div
              key={item.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleVideoClick(item.link)}
            >
              <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20">
                {/* Video Thumbnail */}
                {thumbnailUrl ? (
                  <Image
                    src={
                      imageErrors[item.id]
                        ? `https://img.youtube.com/vi/${getYouTubeVideoId(
                            item.link
                          )}/hqdefault.jpg`
                        : thumbnailUrl!
                    }
                    alt={item.title}
                    fill
                    className="object-cover"
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [item.id]: true }))
                    }
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-50" />
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-brand-600 hover:bg-purple-700 rounded-md px-3 py-2 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-purple-500/50">
                    <Play className="w-4 h-4 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-purple-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsStrategicAndMedia;

{
  /* Strategic Minds Section */
}
// <div className="relative rounded-2xl backdrop-blur-sm overflow-hidden w-full mb-16">
//   <div className="rounded-xl backdrop-blur-md bg-opacity-10 text-white space-y-8 relative z-10">
//     {/* Header Section */}
//     <div className="text-center mb-12">
//       <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight mb-6">
//         Strategic Minds Behind HYI.AI
//       </h1>
//       <p className="text-gray-300 text-base max-w-5xl mx-auto leading-relaxed">
//         The HYI.AI Advisory Board consists of industry experts who provide
//         strategic guidance, domain insights, and governance to drive
//         long-term growth. Their diverse experience ensures innovation,
//         compliance, and alignment with global market needs.
//       </p>
//     </div>

//     {/* Leadership Grid - Centered for single card */}
//     <div className="flex justify-center w-full">
//       {strategicMindsTeam.map((leader) => (
//         <div
//           key={leader.id}
//           className="p-6 pt-8 pb-8 glass-gradient rounded-xl relative overflow-hidden group max-w-3xs w-fit h-fit"
//         >
//           <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
//           <div className="text-center mb-4">
//             <h3 className="text-white font-semibold text-base mb-2 transition-colors">
//               {leader.name}
//             </h3>
//           </div>
//           {/* Profile Image */}
//           <div className="flex justify-center mb-6">
//             <div className="relative w-38 h-38">
//               <Image
//                 src={leader.image}
//                 alt={leader.name}
//                 width={152}
//                 height={152}
//                 className="object-contain w-full h-full"
//               />
//             </div>
//           </div>
//           <div className="text-center">
//             <p className="text-gray-300 font-medium text-sm">
//               {leader.position}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
