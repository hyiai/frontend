import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import Technologies from "@/components/section/general/technologies";
import Hero from "@/components/section/target-industries/hero";
import TargetIndustriesDetails from "@/components/section/target-industries/targetIndustriesDetails";
import { ForIndustriesPageAPI } from "@/lib/services/api";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}


export default async function TargetIndustries({ params }: PageProps) {

    const { id } = await params;
    const industriesData = await ForIndustriesPageAPI.getPageData(id);

    if (!industriesData) {
        return <></>;
    }

    const { heroData, targetIndustriesDetailsData } = industriesData;

    return (
        <section className="w-full min-h-screen flex flex-col items-center">
            <Header />
            <Hero data={heroData} />
            <TargetIndustriesDetails data={targetIndustriesDetailsData} />
            <Technologies />
            <Footer />
        </section>
    )
}