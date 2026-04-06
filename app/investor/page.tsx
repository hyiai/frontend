import AssisstantTAM from "@/components/investor/assisstantTAM";
import HeroSection from "@/components/investor/herosection";
import MileStone from "@/components/investor/milestone";
import PositioningAndOpportunity from "@/components/investor/positioningAndOpportunity";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

const Investor = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      <HeroSection />
      <AssisstantTAM />
      <PositioningAndOpportunity />
      <MileStone />
      <Footer />
    </section>
  );
};

export default Investor;