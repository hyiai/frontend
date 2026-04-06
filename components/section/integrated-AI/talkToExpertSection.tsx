import CustomButton from "@/components/shared/customButton";
import Link from "next/link";
import React from "react";

export default function TalkToExpertSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center bg-[url('/Card-bg-09.webp')] bg-no-repeat bg-[length:100%_100%] px-4 py-7 gap-1.5 z-10 md:py-14">
      <h2 className="hyi-h2">Ready to Transform Talent Performance?</h2>
      <p className="hyi-p text-sm">
        Let AI help your team perform with clarity, purpose, and measurable
        outcomes.
      </p>
      <div className="w-fit pt-4.5">
        <Link
          href="/talk-to-our-expert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton>Talk To Our Expert</CustomButton>
        </Link>
      </div>{" "}
    </div>
  );
}
