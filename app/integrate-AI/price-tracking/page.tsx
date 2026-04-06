// Next imports
import Image from "next/image";

// Component imports
import CustomWrapper from "@/components/shared/customWrapper";
import HeroSection from "@/components/section/integrated-AI/heroSection";
import ImageGradientSection from "@/components/section/integrated-AI/ImageGradientSection";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";
import Footer from "@/components/section/general/footer";

// Image imports
import heroImage_04 from "@/assets/integratedAIPage/images/heroImage-04.png";
import priceTracking from "@/assets/integratedAIPage/price-images/price-tracking.png";
import talent_01 from "@/assets/integratedAIPage/price-images/talent-01.png";
import talent_02 from "@/assets/integratedAIPage/price-images/talent-02.png";
import talent_03 from "@/assets/integratedAIPage/price-images/talent-03.png";
import decision_01 from "@/assets/integratedAIPage/price-images/decision-01.png";
import decision_02 from "@/assets/integratedAIPage/price-images/decision-02.png";

export default function KPIPage() {
  return (
    <section>
      <HeroSection
        titleText={[
          "AI-Powered Price Tracking to Recommend",
          "Talent Based on Price-to-Performance",
        ]}
        imageBottom={heroImage_04}
        // imageBottomCSS="-mt-15 min-[540px]:-mt-20 sm:-mt-25 md:-mt-35 lg:-mt-40 min-[1140px]:-mt-45 xl:-mt-50"
      />
      <ImageGradientSection
        title="What is AI-Powered Price Tracking?"
        text="At HYI.AI, we leverage cutting-edge AI to simplify and optimize talent selection. Our Price Tracking system intelligently monitors estimated hourly rates and performance benchmarks, helping you identify talent that delivers the best value. Whether you're scaling fast or working within budget constraints, this system ensures smarter, cost-effective hiring."
        image={priceTracking}
      />
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col px-4">
          <div className="flex flex-col items-center justify-center gap-10 z-10">
            <div className="w-full flex flex-col text-center gap-2.5 md:w-4/5">
              <h2 className="hyi-h2">Smarter Talent Recommendations</h2>
              <p className="hyi-p">
                When you search for talent, our system doesn&apos;t just show
                you profiles-it recommends candidates based on estimated hourly
                rates and adjusts those suggestions if actual costs vary. The
                algorithm accounts for both value and affordability, aligning
                talent options with your project budgets and timelines.
              </p>
            </div>
            <div className="h-fit grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="flex flex-col justify-between bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%]">
                <div>
                  <Image
                    src={talent_01}
                    alt="Statistics Image"
                    width={413}
                    height={360}
                  />
                </div>
                <div className="flex flex-col px-6 pb-7 gap-2">
                  <h3 className="hyi-h4">Estimate + Track:</h3>
                  <p className="hyi-p text-sm">
                    Our AI uses industry-standard data to estimate hourly rates
                    for global tech talent.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%]">
                <div>
                  <Image
                    src={talent_02}
                    alt="Statistics Image"
                    width={413}
                    height={360}
                  />
                </div>
                <div className="flex flex-col px-6 pb-7 gap-2">
                  <h3 className="hyi-h4">Dynamic Adjustment</h3>
                  <p className="hyi-p text-sm">
                    If actual pricing differs, the AI recalibrates and updates
                    recommendations proportionally keeping your hiring decisions
                    accurate and adaptive.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%]">
                <div>
                  <Image
                    src={talent_03}
                    alt="Statistics Image"
                    width={413}
                    height={360}
                  />
                </div>
                <div className="flex flex-col px-6 pb-7 gap-2">
                  <h3 className="hyi-h4">Estimate + Track:</h3>
                  <p className="hyi-p text-sm">
                    Our AI uses industry-standard data to estimate hourly rates
                    for global tech talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-12 pb-6 gap-10 md:pt-16 md:pb-8 lg:overflow-visible">
            <div className="w-full flex flex-col text-center gap-2.5 z-10 md:w-4/5">
              <h2 className="hyi-h2">
                Transparent Decision-Making & Cost Control
              </h2>
              <p className="hyi-p">
                HYI.AI’s price tracking empowers your hiring team with clarity
                and control. You gain full visibility into estimated vs. actual
                costs, allowing for smarter forecasting and financial planning.
                This leads to fewer surprises, better ROI, and stronger
                alignment between business needs and hiring decisions.
              </p>
            </div>
            <div className="flex flex-col z-10 gap-4 md:flex-row md:gap-5">
              <div className="relative isolate w-full flex flex-col justify-between bg-[url('/Card-bg-11.png')] bg-no-repeat bg-[length:100%_100%] border border-white/20 rounded-4xl pl-6 pt-10 pb-5 gap-5 md:w-1/2">
                <div>
                  <Image
                    src={decision_01}
                    alt="Statistics Image"
                    width={630}
                    height={498}
                  />
                </div>
                <div className="w-full flex flex-col z-10 gap-0.5 md:w-4/5">
                  <h3 className="hyi-h3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    Accounting Automation
                  </h3>
                  <p className="hyi-p">
                    Visual dashboards comparing estimated and final pricing
                  </p>
                </div>
                <div className="absolute inset-0 rounded-4xl bg-gradient-to-b from-0% via-90% to-black/90" />
              </div>
              <div className="relative isolate w-full flex flex-col justify-between bg-[url('/Card-bg-11.png')] bg-no-repeat bg-[length:100%_100%] border border-white/20 rounded-4xl px-6 pt-10 pb-5 gap-5 md:w-1/2">
                <div>
                  <Image
                    src={decision_02}
                    alt="Statistics Image"
                    width={630}
                    height={498}
                  />
                </div>
                <div className="w-full flex flex-col z-10 gap-0.5 md:w-4/5">
                  <h3 className="hyi-h3 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                    Real-Time Financial Tracking
                  </h3>
                  <p className="hyi-p">
                    Forecasting tools to plan future talent needs. Enhanced
                    transparency for procurement and finance teams
                  </p>
                </div>
                <div className="absolute inset-0 rounded-4xl bg-gradient-to-b from-0% via-90% to-black/90" />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-170 -left-50 flex items-center justify-center z-0 md:inset-0 md:-left-100">
          <div className="w-[600px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>
        <div className="pointer-events-none absolute bottom-170 -right-50 flex items-center justify-center z-0 md:inset-0 md:-right-100">
          <div className="w-[600px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(112,0,255,0.6)_0%,_transparent_70%)] blur-3xl" />
        </div>
      </div>
      <CustomWrapper>
        <TalkToExpertSection />
      </CustomWrapper>
      <Footer />
    </section>
  );
}
