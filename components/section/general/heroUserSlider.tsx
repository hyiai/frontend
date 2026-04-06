import React from "react";
import CustomUserCard from "@/components/shared/customUserCard";
import CustomSwiper from "@/components/shared/customSlider";
import { StaticImageData } from "next/image";
import { PublicProfileAPI } from "@/lib/services/api";

interface User {
  userId: string;
  profilePicture: StaticImageData | string;
  fullName: string;
  designation: string;
  talentId: string;
  slug: string;
  text?: string;
}

export default async function HeroUserSlider() {
  const data = await PublicProfileAPI.getFeaturedUsers();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center capitalize md:text-xl md:font-bold  lg:text-2xl">
        {"Verified Global Talents."}
      </h1>
      <CustomSwiper
        items={data.map((user: User) => (
          <CustomUserCard key={user.userId} user={user} />
        ))}
        height="h-[82px]"
      />
    </div>
  );
}
