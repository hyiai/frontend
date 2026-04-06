import MediaHeroSection from "@/components/media/mediaHeroSection";
import OurMedia from "@/components/media/ourMedia";
import OurServices from "@/components/media/ourServices";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

const Media = () => {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      <MediaHeroSection />
      <OurMedia />
      <OurServices />
      <Footer />
    </section>
  );
};

export default Media;