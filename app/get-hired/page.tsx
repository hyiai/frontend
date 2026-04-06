// import HeroSection from "@/components/forCompaniesPage/herosection";
import Header from "@/components/section/general/header";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import HowToGetHiredCard from "@/components/talent/get-hired";
import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import Slack from "@/assets/common/FloatableIcons/slack.png";
import Useberry from "@/assets/common/FloatableIcons/useberry.png";
import Footer from "@/components/section/general/footer";
import BrowseCategories from "@/components/talent/browse-categories";
import WorkOptions from "@/components/talent/work-options";
import Link from "next/link";
import CustomFloatableIcons2 from "@/components/shared/customFloatableIcons2";

export default function GetHired() {
  const techIcons = [
    { id: "amazon", src: Amazon, alt: "Amazon" },
    { id: "airtable", src: Airtable, alt: "Airtable" },
    { id: "calendly", src: Calendly, alt: "Calendly" },
    { id: "clickUp", src: ClickUp, alt: "ClickUp" },
    { id: "feedback", src: Feedback, alt: "Feedback" },
    { id: "google", src: Google, alt: "Google" },
    { id: "slack", src: Slack, alt: "Slack" },
    { id: "useberry", src: Useberry, alt: "Useberry" },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-6">
      <Header />

      <div className="w-full max-w-[1280px] flex flex-col items-center justify-center px-0 pt-0 pb-0 md:py-10">
        {/* HERO */}
        <section className="relative w-full flex justify-center px-0 md:px-8 lg:items-center ">
          {/* floating icons overlay */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <CustomFloatableIcons2
              icons={techIcons}
              overlayMode={true}
              showContent={false}
            />
          </div>

          {/* hero content */}
          <div className="relative z-5 w-full">
            <div className="flex flex-col items-center justify-center gap-4 py-8 sm:pt-20 sm:pb-8 md:pt-24 md:pb-16 lg:pt-24 lg:pb-20 px-2">
              <h1 className="text-white font-semibold text-lg md:text-xl lg:text-3xl text-center leading-tight">
                Accelerate{" "}
                <span className="text-brand-600">
                  Your Career With HYI.AI
                </span>
              </h1>

              <p className="text-[#D2D0DD] text-sm xs:text-base md:text-lg lg:text-lg text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl px-2 xs:px-4 leading-relaxed">
                Work remotely with global teams at leading U.S. Companies. Solve
                cutting-edge challenges and advance AI.
              </p>

              <Link
                href="https://va.hyi.ai/talent-signup"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <ShimmerButton className="btn-primary">Apply Now</ShimmerButton>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <div className="w-full mt-3 sm:mt-0 md:mt-12 px-0 sm:px-2 md:px-0">
          <HowToGetHiredCard />
        </div>

        <div className="w-full mt-8 sm:mt-0 md:mt-8 px-0 sm:px-2 md:px-0">
          <BrowseCategories />
        </div>

        <div className="w-full px-0 sm:px-2 md:px-0">
          <WorkOptions />
        </div>
      </div>

      <Footer />
    </section>
  );
}
