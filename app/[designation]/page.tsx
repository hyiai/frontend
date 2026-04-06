import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import { DataProps } from "@/components/util/interface";
import { ForCompaniesPageAPI } from "@/lib/services/api";
import SkillsSection from "@/components/forCompaniesPage/skillsSection";
import HeroSection from "@/components/forCompaniesPage/herosection";
import ExploreSkillsAndTechnologies from "@/components/forCompaniesPage/exploreSkillsAndTechnologies";

export default async function ForCompaniesPage({
  params,
}: {
  params: Promise<{ designation: string }>;
}) {
  const { designation } = await params;
  const data: DataProps = await ForCompaniesPageAPI.getDesignationsPage(
    designation?.toLocaleLowerCase()
  );

  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      <HeroSection
        title={data?.title}
        subTitle={data?.subTitle}
        technology={data?.technology}
      />
      <SkillsSection
        skillTags={data.skills}
        showTabs={data.showTabs}
        designation={data?.title}
        secondaryTitle={data?.secondaryTitle}
        secondarySubTitle={data?.secondarySubTitle}
      />
      <ExploreSkillsAndTechnologies
        title={data?.title}
        secondarySubTitle={data?.secondarySubTitle}
        technology={data?.technology}
      />
      <Footer />
    </section>
  );
}
