import { caseStudyData } from "@/components/data/landingPage";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import CustomImageCard from "@/components/shared/customImageCard";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import { CaseStudyAPI } from "@/lib/services/api";
import { StaticImageData } from "next/image";
import Link from "next/link";
// import PreviewCarousel from "./previewCarousel";

export default async function CaseStudies() {
  const data = await CaseStudyAPI.getAllCaseStudy();
  return (
    <div className="flex flex-col justify-center items-center z-10 px-4 gap-4 md:gap-10">
      <div className="w-full flex flex-col text-center gap-2 md:w-2/3">
        <h2 className="hyi-h2">{caseStudyData.heading}</h2>
        <p className="hyi-p">{caseStudyData.text}</p>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <CustomGradientHoverWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map(
              (card: {
                _id: string;
                slug: string;
                coverImage: string | StaticImageData;
                title: string;
                subtitle: string;
              }) => (
                <Link key={card._id} href={`/case-studies/${card.slug}`}>
                  <CustomImageCard caseStudyItem={card} />
                </Link>
              )
            )}
          </div>
        </CustomGradientHoverWrapper>

        {/* <div className="w-full md:hidden">
          <PreviewCarousel>
            {data.map(
              (card: {
                _id: string;
                slug: string;
                coverImage: string | StaticImageData;
                title: string;
                subtitle: string;
              }) => (
                <Link key={card._id} href={`/case-studies/${card.slug}`}>
                  <CustomImageCard caseStudyItem={card} />
                </Link>
              )
            )}
          </PreviewCarousel>
        </div> */}

        <Link href="/case-studies">
          <ShimmerButton className="px-7">View All</ShimmerButton>
        </Link>
      </div>
    </div>
  );
}
