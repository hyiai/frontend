import GetHelpSection from "@/components/talent/get-help";
import React from "react";
import Image from "next/image";
import MiddleIcon from "@/assets/about/middle.png";
import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import Slack from "@/assets/common/FloatableIcons/slack.png";
import Useberry from "@/assets/common/FloatableIcons/useberry.png";
import Footer from "@/components/section/general/footer";
// import WorkOptions from "@/components/talent/work-options";
import CustomFloatableIcons2 from "@/components/shared/customFloatableIcons2";
import Header from "@/components/section/general/header";
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
const Page = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden md:px-6">
      <Header />
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-center px-4 py-1 md:py-6 md:px-0">
        <section className="relative w-full flex justify-center px-4 py-2 md:px-8 md:py-0 lg:items-center">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <CustomFloatableIcons2
              icons={techIcons}
              overlayMode={true}
              showContent={false}
            />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center gap-4 pt-4 md:pt-10 pb-5 md:py-24 lg:py-24">
              <h1 className="text-white font-semibold hyi-h1 text-center leading-tight">
                Talent Support Services<br></br>
                <span className="text-brand-600">Hire. Grow. Succeed.</span>
              </h1>
              <div className="text-[#D2D0DD] hyi-p text-center max-w-xl px-4">
                Fast, friendly support to keep you and your business moving
                forward.
              </div>
              <p className="text-xs sm:text-sm flex items-center gap-1">
                <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
                  Instant Talent Services
                </span>
                <Image
                  src={MiddleIcon}
                  alt="Middle Icon"
                  width={12}
                  height={12}
                />
                <span className="bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent">
                  Smart Career Support
                </span>
              </p>
              {/* <Link
                href="https://va.hyi.ai/talent-signup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton className="btn-primary mt-2 md:mt-4">
                  Apply Now
                </ShimmerButton>
              </Link> */}
            </div>
          </div>
        </section>
      </div>
      {/* HERO */}
      {/* <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-6 bg-[url('/support-bg.png')] bg-no-repeat bg-center bg-[length:220%_auto] sm:bg-[length:150%_auto] md:bg-[length:100%_auto]">
        <Header />
        <div className="w-full max-w-[1280px] flex flex-col items-center justify-center px-0 py-10 sm:py-12 md:py-16">
          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
            Got Questions?
          </h1>
          <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight mt-2 sm:mt-3">
            We&apos;ve Got Answers
          </h2>

          <p className="text-white font-semibold text-sm sm:text-base md:text-lg text-center max-w-2xl mt-4 sm:mt-6 mb-6 sm:mb-8">
            Fast, friendly support to keep you and your business moving forward.
          </p>
        </div>
      </section> */}

      {/* CONTENT */}
      <div className="max-w-[1280px] mx-auto">
        <GetHelpSection />
      </div>
      <Footer />
    </section>
  );
};

export default Page;
