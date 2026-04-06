import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import HeroSection from "@/components/career/herosection";
import CareerCards from "@/components/career/careerCards";

const Career = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      <HeroSection />
      <section className="w-full flex justify-center px-4 py-6 md:px-8 md:py-8 lg:items-center lg:py-10">
        <CareerCards />
      </section>
      <Footer />
    </section>
  );
};

export default Career;
