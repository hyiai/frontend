"use client";
import React from "react";
// import { ShimmerButton } from "../shared/customShimmerButton";
import JobCategoryCard from "./job-category-card";

import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import Slack from "@/assets/common/FloatableIcons/slack.png";
import Useberry from "@/assets/common/FloatableIcons/useberry.png";

const sampleAvatars = [
  { src: "https://i.pravatar.cc/150?img=1" },
  { src: "https://i.pravatar.cc/150?img=2" },
  { src: "https://i.pravatar.cc/150?img=3" },
  { src: "https://i.pravatar.cc/150?img=4" },
];

const techIcons = [
  { id: "amazon", src: Amazon, alt: "Amazon" },
  { id: "airtable", src: Airtable, alt: "Airtable" },
  { id: "calendly", src: Calendly, alt: "Calendly" },
  { id: "clickUp", src: ClickUp, alt: "ClickUp" },
  { id: "feedback", src: Feedback, alt: "Feedback" },
  { id: "google", src: Google, alt: "Google" },
  { id: "slack", src: Slack, alt: "Slack" },
  { id: "useberry", src: Useberry, alt: "Useberry" },
];

const baseCategories = [
  {
    title: "Developer",
    blurb: "Join our team of innovative developers!",
    iconSrc: techIcons[0].src,
    isFeatured: true,
  },
  {
    title: "Designers",
    blurb: "Become a part of our creative design team!",
    iconSrc: techIcons[1].src,
  },
  {
    title: "Team Leads",
    blurb: "Join our creative team as a team lead!",
    iconSrc: techIcons[2].src,
  },
  {
    title: "Software-Architect",
    blurb: "Become a key player software architect!",
    iconSrc: techIcons[3].src,
  },
  {
    title: "Project-Manager",
    blurb: "Join our team as a project manager!",
    iconSrc: techIcons[4].src,
  },
  {
    title: "Analysts",
    blurb: "Join our team as analysts!",
    iconSrc: techIcons[5].src,
  },
];

type BrowseCategoriesProps = {
  browseBy?: string; // e.g. "Job Category", "Skill", "Location"
};

export default function BrowseCategories({
  browseBy = "by Job Category",
}: BrowseCategoriesProps) {
  const maxCards = 18;
  // const [visibleCount, setVisibleCount] = useState(6);

  // Create repeated data for "Load More"
  const allCategories = Array.from(
    { length: Math.ceil(maxCards / baseCategories.length) },
    () => baseCategories
  ).flat();

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => Math.min(prev + 6, maxCards));
  // };

  return (
    <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1 md:py-12">
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
          Browse {browseBy}
        </h2>
        <p className="mt-3 text-white/70 max-w-3xl mx-auto">
          At HYI.AI, we go beyond the ordinary by delivering innovative
          solutions, personalized experiences, and unparalleled support,
          ensuring your business achieves lasting success in a competitive
          landscape.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCategories.slice(0, 6).map((c, i) => (
          <JobCategoryCard
            key={i}
            title={c.title}
            blurb={c.blurb}
            iconSrc={c.iconSrc}
            avatars={sampleAvatars}
            extraCount={99}
            isFeatured={i === 0 ? true : c.isFeatured}
            href="https://va.hyi.ai/talent-signup"
          />
        ))}
      </div>

      {/* {visibleCount < maxCards && (
        <div className="mt-8 flex justify-center">
          <ShimmerButton className="btn-primary mt-4" onClick={handleLoadMore}>
            Load More
          </ShimmerButton>
        </div>
      )} */}
    </section>
  );
}
