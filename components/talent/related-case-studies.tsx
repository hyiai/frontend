// components/case-studies/RelatedCaseStudies.tsx
import React from "react";
import Link from "next/link";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import CustomImageCard from "@/components/shared/customImageCard";
import { caseStudyData } from "@/components/data/landingPage";
import { StaticImageData } from "next/image";
import { CaseStudyAPI } from "@/lib/services/api";

type Props = {
  currentSlug?: string; // exclude current article when provided
  limit?: number; // default 3
  title?: string; // heading above the grid
  subtitle?: string; // subtext under heading
};

export default async function RelatedCaseStudies({
  currentSlug,
  limit = 3,
  title = "Related Case Studies",
  subtitle = "At HYI.AI, we go beyond the ordinary by delivering innovative solutions, personalized experiences, and unparalleled support, ensuring your business achieves lasting success in a competitive landscape.",
}: Props) {
  const data = await CaseStudyAPI.getAllCaseStudy();

  const cards = (caseStudyData.cards || [])
    .filter((c) => (currentSlug ? c.slug !== currentSlug : true))
    .slice(0, limit);

  if (!cards.length) return null;

  return (
    <section className="relative z-10 w-full mt-10 sm:mt-12 px-4 sm:px-6 md:px-8 py-10 md:py-14">
      {/* fuchsia radial glow */}
      <div className="pointer-events-none absolute -top-30 left-1/2 -translate-x-1/2 flex items-center justify-center -z-1">
        <div className="w-[600px] h-[600px] md:w-[950px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-white/70 mt-2 sm:mt-3 max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base px-1">
              {subtitle}
            </p>
          ) : null}
        </div>

        <CustomGradientHoverWrapper>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {data.map(
              (card: {
                _id: string;
                slug: string;
                coverImage: string | StaticImageData;
                title: string;
                subtitle: string;
              }) => (
                <Link
                  key={card._id}
                  href={`/case-studies/${card.slug}`}
                  className="block h-full"
                >
                  <CustomImageCard caseStudyItem={card} />
                </Link>
              )
            )}
          </div>
        </CustomGradientHoverWrapper>
      </div>
    </section>
  );
}
