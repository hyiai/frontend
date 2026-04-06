"use client";

// React Imports
import React, { useState } from "react";

// Next Imports
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Image/Icon Imports
import verifiedCheck from "@/assets/landingPage/icons/verified-check.svg";
import Case from "@/assets/landingPage/icons/case.svg";
import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

interface CustomUserCard {
  user: {
    userId: string;
    profilePicture: string | StaticImageData;
    fullName: string;
    designation: string;
    talentId: string;
    slug: string;
    text?: string;
  };
  hasLink?: boolean;
}

export default function CustomUserCard({
  user,
  hasLink = false,
}: CustomUserCard) {
  const [openPublicProfileDialog, setOpenPublicProfileDialog] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>("");

  const handleViewProfile = (candidateId?: string) => {
    if (!candidateId) return;
    setSelectedCandidateId(candidateId);
    setOpenPublicProfileDialog(true);
  };

  return hasLink ? (
    <Link
      href={`/resume/${user?.slug}`}
      className="w-full flex items-center glass-gradient shadow-xl rounded-xl cursor-pointer gap-3.5"
    >
      <div className="w-[52px] h-[52px] rounded-full">
        <Image
          src={user?.profilePicture}
          alt="User profile image"
          width={58}
          height={58}
          className="rounded-full bg-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-bold text-white capitalize">
            {user?.fullName}
          </h2>
          <p className="w-fit flex items-center gap-1">
            <Image
              src={verifiedCheck}
              alt="Check mark Icon"
              height={14}
              width={14}
              className="w-3.5 h-3.5"
            />
            <span className="text-xs font-normal text-dark_mode-300">
              {"Verified Talent"}
            </span>
          </p>
          <p className="w-fit flex items-center gap-1">
            <Image
              src={Case}
              alt="Case"
              height={14}
              width={14}
              className="w-3.5 h-3.5"
            />
            <span className="text-xs text-dark_mode-300 capitalize">
              {user?.designation}
            </span>
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <>
      <div
        className="w-full flex items-center glass-gradient-full shadow-xl rounded-xl cursor-pointer px-4 py-2.5 gap-3.5"
        onClick={() => handleViewProfile(user.talentId)}
      >
        <div className="w-[52px] h-[52px] rounded-full">
          <Image
            src={user?.profilePicture}
            alt="User profile image"
            width={52}
            height={52}
            className="rounded-full bg-cover"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="w-full flex flex-col gap-1">
            <h2 className="text-sm font-bold text-white capitalize">
              {user?.fullName}
            </h2>
            <p className="w-fit flex items-center gap-1">
              <Image
                src={verifiedCheck}
                alt="Check mark Icon"
                height={14}
                width={14}
                className="w-3.5 h-3.5"
              />
              <span className="text-xs font-normal text-dark_mode-300">
                {"Verified Talent"}
              </span>
            </p>
            <p className="w-fit flex items-center gap-1">
              <Image
                src={Case}
                alt="Case"
                height={14}
                width={14}
                className="w-3.5 h-3.5"
              />
              <span className="text-xs font-normal text-dark_mode-300 capitalize">
                {user?.designation}
              </span>
            </p>
          </div>
        </div>
      </div>
      {openPublicProfileDialog && selectedCandidateId && (
        <ViewPublicProfile
          open={openPublicProfileDialog}
          onClose={() => setOpenPublicProfileDialog(false)}
          selectedCandidateId={selectedCandidateId}
        />
      )}
    </>
  );
}
