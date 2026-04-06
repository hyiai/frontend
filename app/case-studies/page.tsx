// app/case-studies/page.tsx (server component, static)
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import BackButton from "@/components/shared/backButton";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import { caseStudyData } from "@/components/data/landingPage";
import CustomImageCard from "@/components/shared/customImageCard";
import Link from "next/link";
import { CaseStudyAPI } from "@/lib/services/api";
import { StaticImageData } from "next/image";
import { Suspense } from "react";

export default async function CaseStudiesPage() {
  const data = await CaseStudyAPI.getAllCaseStudy();
  return (
    <section className="relative z-10 flex w-full flex-col items-center justify-center md:px-6">
      {/* fuchsia radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_40%_top,rgba(217,70,239,0.6)_0%,rgba(217,70,239,0.25)_35%,transparent_70%)] bg-no-repeat" />
      </div>

      <Header />

      <div className="w-full max-w-[1280px] flex flex-col relative isolate px-4 py-6 md:px-0 lg:py-8">
        <Suspense fallback={null}>
          <BackButton className="mb-3" />
        </Suspense>

        <h1 className="text-2xl sm:text-3xl font-semibold text-white">
          {caseStudyData.heading || "Case Studies"}
        </h1>
        {caseStudyData.text ? (
          <p className="mt-2 text-white/70 max-w-3xl mb-8">
            {caseStudyData.text}
          </p>
        ) : null}

        <CustomGradientHoverWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
      </div>

      <Footer />
    </section>
  );
}
