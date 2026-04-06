import Hero from "@/components/section/application-solutions/hero";
import PartnerWithUsGlobally from "@/components/section/application-solutions/partnerWithUsGlobally";
import Portfolio from "@/components/section/application-solutions/portfolio";
import SolutionNow from "@/components/section/application-solutions/solutionNow";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import Technologies from "@/components/section/general/technologies";
import { partnerWithUsGloballyData } from "@/components/data/application-solution";
import { ForTechnologiesPageAPI } from "@/lib/services/api";

// Define the params type for TypeScript
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ApplicationSolutions({ params }: PageProps) {
    const { id } = await params;
    const technologyData = await ForTechnologiesPageAPI.getPageData(id);

    if (!technologyData) {
        return <></>;
    }

    const { sectionOneData, sectionTwoData, sectionThreeData, sectionFourData } = technologyData;

    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <Hero data={sectionOneData} />
            <SolutionNow sectionTwo={sectionTwoData} sectionThree={sectionThreeData} />
            <Portfolio data={sectionFourData} />
            <PartnerWithUsGlobally data={partnerWithUsGloballyData} />
            <Technologies />
            <Footer />
        </section>
    )
}