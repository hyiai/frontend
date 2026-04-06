// import HeroSection from "@/components/forCompaniesPage/herosection";
import Header from "@/components/section/general/header";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
// import HowToGetHiredCard from "@/components/talent/get-hired";
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
// import WorkOptions from "@/components/talent/work-options";
import TechStackList from "@/components/talent/tech-stack-list";
import CustomFloatableIcons2 from "@/components/shared/customFloatableIcons2";
import Link from "next/link";

export default function TalentResources() {
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
    <section className="w-full flex flex-col items-center justify-center overflow-hidden md:px-6">
      <Header />
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-center px-4 py-6 md:px-0 lg:py-8 ">
        <section className="relative w-full flex justify-center px-4 py-0 md:px-8 md:py-0 lg:items-center">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <CustomFloatableIcons2
              icons={techIcons}
              overlayMode={true}
              showContent={false}
            />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center gap-4 pt-6 pb-5 md:pt-24 md:pb-24 lg:pt-24">
              <h1 className="text-white font-semibold text-lg md:text-xl lg:text-3xl text-center leading-tight">
                Apply for{" "}
                <span className="text-brand-600">
                  In Demand Software Jobs
                </span>
              </h1>
              <div className="text-[#D2D0DD] text-base sm:text-md md:text-lg text-center max-w-xl px-4">
                Work remotely with global teams at leading U.S. Companies. Solve
                cutting-edge challenges and advance AI.
              </div>
              <Link
                href="https://va.hyi.ai/talent-signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton className="btn-primary mt-4">
                  Apply Now
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[url('/bg-talent.svg')] bg-contain bg-repeat-y w-full">
          <div className="max-w-full mx-auto px-4 text-center">
            <div className="mt-8">
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-tight">
                Empower Your Company With Flexible, Global Talent
              </div>
              <div className="text-[#D2D0DD] text-base md:text-lg max-w-3xl mx-auto mt-4">
                Scale faster with remote engineers, worldwide expertise, and
                hiring options that fit your growth journey.
              </div>
            </div>

            <div className="mt-8">
              <TechStackList />
            </div>
          </div>
        </section>
        <BrowseCategories browseBy="Technologies" />
      </div>
      <Footer />
    </section>
  );
}
