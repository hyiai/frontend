import dynamic from "next/dynamic";
import Header from "@/components/section/general/header";
import HeroSection from "@/components/section/landingPage/heroSection";
import HeroUserSlider from "@/components/section/general/heroUserSlider";
// const ConnectWithDevelopers = dynamic(
//   () => import("@/components/section/landingPage/connectWithDevelopers")
// );
import ConnectWithDevelopers from "@/components/section/landingPage/connectWithDevelopers";
import { connectWithDeveloperData } from "@/components/data/landingPage";
import Footer from "@/components/section/general/footer";
import FirstSection from "@/components/section/landingPage/firstSection";
import SecondSection from "@/components/section/landingPage/secondSection";
import ThirdSection from "@/components/section/landingPage/thirdSection";

 

const Technologies = dynamic(
  () => import("@/components/section/general/technologies")
);

export default function Home() {
  return (
    <section>
      <Header />
      <section className="w-full flex flex-col items-center justify-center overflow-hidden md:px-6">
        <div className="w-full flex items-center justify-center bg-[url('/Hero-map.png')] bg-no-repeat bg-cover lg:hidden">
          <HeroSection />
        </div>
        <div className="w-full max-w-[1280px] flex flex-col bg-background relative isolate  px-4 py-6 md:px-0 lg:py-8">
          <div className="flex flex-col gap-12 md:gap-16">
            <div className="hidden lg:flex">
              <HeroSection />
            </div>
            {/* <div className="relative">
              <HeroUserSlider />
              <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 flex items-center justify-center -z-1">
                <div className="w-[600px] h-[600px] md:w-[950px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
              </div>
            </div> */}
            <div className="w-full flex flex-col items-center gap-8">
              <div className="w-full flex flex-col text-center gap-1.5 lg:w-[55%]">
                <h2 className="hyi-h2">{connectWithDeveloperData.heading}</h2>
                <p className="hyi-p">{connectWithDeveloperData.paragraph}</p>
              </div>
              <ConnectWithDevelopers />
            </div>
          </div>
        </div>
      </section>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Technologies />
      <Footer />
    </section>
  );
}
