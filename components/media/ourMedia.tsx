"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Loader2 } from "lucide-react";
import PreviewCarousel from "@/components/section/general/previewCarousel";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";

interface MediaItem {
  id: number;
  link: string;
  title?: string;
}

const OurMedia = () => {
  const [imageErrors, setImageErrors] = useState<{
    [id: number]: boolean;
  }>({});
  const [videoTitles, setVideoTitles] = useState<{
    [id: number]: string;
  }>({});
  const [loadingTitles, setLoadingTitles] = useState<{
    [id: number]: boolean;
  }>({});
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      link: "https://www.youtube.com/watch?v=xGK02RlFNtU",
    },
    {
      id: 2,
      link: "https://www.youtube.com/watch?v=n7BQfAV28tg",
    },
    {
      id: 3,
      link: "https://www.youtube.com/watch?v=1PsWTm5YWaU",
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

  // Function to fetch video title using YouTube oEmbed API
  const fetchVideoTitle = async (videoUrl: string, itemId: number) => {
    try {
      setLoadingTitles((prev) => ({ ...prev, [itemId]: true }));
      // Using YouTube oEmbed API (no API key required)
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(
          videoUrl
        )}&format=json`
      );
      if (response.ok) {
        const data = await response.json();
        setVideoTitles((prev) => ({ ...prev, [itemId]: data.title }));
      } else {
        // Fallback title if API fails
        setVideoTitles((prev) => ({
          ...prev,
          [itemId]: "Video Title Unavailable",
        }));
      }
    } catch (error) {
      console.error(`Error fetching title for video ${itemId}:`, error);
      setVideoTitles((prev) => ({
        ...prev,
        [itemId]: "Video Title Unavailable",
      }));
    } finally {
      setLoadingTitles((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  // Fetch titles when component mounts
  useEffect(() => {
    mediaItems.forEach((item) => {
      fetchVideoTitle(item.link, item.id);
    });
  }, []);

  const handleVideoClick = (link: string) => {
    window.open(link, "_blank");
  };

  const getDisplayTitle = (itemId: number) => {
    if (loadingTitles[itemId]) {
      return (
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading title...</span>
        </div>
      );
    }
    return videoTitles[itemId] || "Loading...";
  };

  return (
    <div className="w-full max-w-7xl mx-auto text-white relative">
      <div className="hidden md:flex overflow-visible pointer-events-none absolute top-[35%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-visible core-gradient w-[1200px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <div className="relative z-10 text-center mb-12 w-full">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight mb-6">
          Our HYI.AI Media
        </h1>
        <p className="p-4 sm:p-0 text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
          At HYI.AI, we go beyond the ordinary by delivering innovative
          solutions, personalized experiences, and unparalleled support,
          ensuring your business achieves lasting success in a competitive
          landscape.
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-0 sm:gap-6">
        <CustomGradientHoverWrapper>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mediaItems.map((item) => {
              const thumbnailUrl = getYouTubeThumbnail(item.link);
              return (
                <div
                  key={item.id}
                  className="card w-full h-full p-[1px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => handleVideoClick(item.link)}
                >
                  <div className="card-content relative w-full h-full flex flex-col rounded-xl border border-white/20 overflow-hidden p-2 cursor-pointer">
                    <div className="w-full h-fit relative">
                      {thumbnailUrl ? (
                        <Image
                          src={
                            imageErrors[item.id]
                              ? `https://img.youtube.com/vi/${getYouTubeVideoId(
                                  item.link
                                )}/hqdefault.jpg`
                              : thumbnailUrl!
                          }
                          alt={videoTitles[item.id] || "Video thumbnail"}
                          width={412}
                          height={200}
                          className="w-full rounded-xl bg-cover"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }))
                          }
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-[200px] bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-50" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-brand-600 hover:bg-purple-700 rounded-md px-3 py-2 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-purple-500/50">
                          <Play className="w-4 h-4 text-white fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between mt-4 mb-2 gap-2.5 relative z-10">
                      <div className="cursor-pointer text-white leading-tight font-normal">
                        {getDisplayTitle(item.id)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CustomGradientHoverWrapper>
        <div className="w-full md:hidden">
          <PreviewCarousel>
            {mediaItems.map((item) => {
              const thumbnailUrl = getYouTubeThumbnail(item.link);
              return (
                <div
                  key={item.id}
                  className="card w-full h-full p-[1px] overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => handleVideoClick(item.link)}
                >
                  <div className="card-content relative w-full h-full flex flex-col rounded-xl border border-white/20 overflow-hidden p-2 cursor-pointer">
                    <div className="w-full h-fit relative">
                      {thumbnailUrl ? (
                        <Image
                          src={
                            imageErrors[item.id]
                              ? `https://img.youtube.com/vi/${getYouTubeVideoId(
                                  item.link
                                )}/hqdefault.jpg`
                              : thumbnailUrl!
                          }
                          alt={videoTitles[item.id] || "Video thumbnail"}
                          width={412}
                          height={200}
                          className="w-full rounded-xl bg-cover"
                          onError={() =>
                            setImageErrors((prev) => ({
                              ...prev,
                              [item.id]: true,
                            }))
                          }
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-[200px] bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white opacity-50" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-brand-600 hover:bg-purple-700 rounded-md px-3 py-2 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-purple-500/50">
                          <Play className="w-4 h-4 text-white fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between mt-4 mb-2 gap-2.5 relative z-10">
                      <div className="cursor-pointer text-white leading-tight font-normal">
                        {getDisplayTitle(item.id)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </PreviewCarousel>
        </div>
      </div>
    </div>
  );
};

export default OurMedia;
