// Next imports
import Image from "next/image";

// Component imports
import CustomWrapper from "@/components/shared/customWrapper";
import HeroSection from "@/components/section/integrated-AI/heroSection";
import ImageGradientSection from "@/components/section/integrated-AI/ImageGradientSection";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";
import CustomButton from "@/components/shared/customButton";
import Footer from "@/components/section/general/footer";

// Image imports
import heroImage_05 from "@/assets/integratedAIPage/images/heroImage-05.png";
import talent from "@/assets/integratedAIPage/talent-images/talent-01.png";
import note from "@/assets/integratedAIPage/icons/note.svg";
import list_check from "@/assets/integratedAIPage/icons/list-check.svg";
import arrow_up from "@/assets/integratedAIPage/icons/arrow-up.svg";
import Stars from "@/assets/integratedAIPage/icons/Stars.svg";

import hiring from "@/assets/integratedAIPage/talent-images/hiring.png";
import StarsIcon from "@/assets/integratedAIPage/icons/Union.svg";
import CustomLabel from "@/components/shared/customLabel";
import GrowthChart from "@/components/sub-modules/integratedAI/growthChart";

export default function TalentMatchingPage() {
  return (
    <section>
      <HeroSection
        titleText={[
          "AI-driven platforms intelligently match",
          "talent to your specific industry needs",
        ]}
        imageBottom={heroImage_05}
      />
      <ImageGradientSection
        title="Intelligent Talent Matching with AI"
        text="We leverage machine learning to deliver tailored candidate recommendations based on your hiring patterns, team structure, and project goals. As the system learns and adapts, your hiring becomes more efficient, insightful, and aligned with long-term success."
        image={talent}
      />
      <CustomWrapper
        padding="px-4 py-0 md:py-0"
        divStyle="items-center  gap-6 md:gap-10"
      >
        <div className="w-full flex flex-col text-center gap-1.5 md:w-9/12">
          <h2 className="hyi-h2">Personalized, Data-Driven Recommendations</h2>
          <p className="hyi-p">
            We leverage machine learning to deliver tailored candidate
            recommendations based on your hiring patterns, team structure, and
            project goals. As the system learns and adapts, your hiring becomes
            more efficient, insightful, and aligned with long-term success.
          </p>
        </div>
        <div className="flex flex-col bg-[url('/performance.png')] bg-no-repeat bg-[length:100%_100%] p-6 gap-10 md:p-10 lg:p-14 rounded-3xl border border-white/20">
          <div className="w-full flex flex-col text-center justify-between gap-4 md:flex-row md:text-start">
            <h3 className="hyi-h2 w-full flex flex-col items-center md:w-1/2 md:items-start lg:text-5xl lg:leading-[56px]">
              <span className="flex gap-4">
                AI Powered{" "}
                <Image
                  src={Stars}
                  alt="Stars"
                  width={47}
                  height={67}
                  className="hidden md:flex md:-mt-8"
                />
              </span>
              <span>Talent Matching</span>
            </h3>
            <div className="w-full flex justify-end md:w-1/2">
              <p className="hyi-p w-full md:w-4/5">
                An Al-powered tool that analyzes the most commonly utilized
                portfolio analysis methods by investors and financial
                professionals.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="w-full flex flex-col gap-10 md:w-1/2">
              <div className="w-full flex gap-6 md:w-2/3">
                <div className="w-fit h-fit rounded-full glass-gradient p-2">
                  <Image src={note} alt="Icon" width={32} height={32} />
                </div>
                <div>
                  <h4 className="hyi-h3">Al Summary</h4>
                  <p className="hyi-p">
                    Emailed within 5 minutes and added to your dashboard
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-6 md:w-2/3">
                <div className="w-fit h-fit rounded-full glass-gradient p-2">
                  <Image src={list_check} alt="Icon" width={32} height={32} />
                </div>
                <div>
                  <h4 className="hyi-h3">27+ Terms</h4>
                  <p className="hyi-p">
                    Parsed from company updates and investment documents
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex gap-6 md:w-2/3 md:-mb-14">
                <div className="w-fit h-fit rounded-full glass-gradient p-2">
                  <Image src={arrow_up} alt="Icon" width={32} height={32} />
                </div>
                <div>
                  <h4 className="hyi-h3">98,3%</h4>
                  <p className="hyi-p">Growth every year</p>
                </div>
              </div>
              <GrowthChart />
            </div>
          </div>
        </div>
      </CustomWrapper>
      <section className="w-full flex items-center justify-center overflow-hidden px-4 py-0 md:py-0">
        <div className="w-full max-w-[1280px] flex flex-col">
          <div className="relative flex flex-col items-center justify-center py-12 gap-10 md:py-16 lg:flex-row">
            <div className="w-full flex flex-col text-center items-center gap-2.5 z-10 md:w-4/5 lg:w-1/2 lg:text-left lg:items-start">
              <CustomLabel icon={StarsIcon}>AI Powered Hiring</CustomLabel>
              <h2 className="hyi-h2">Streamlined Hiring, Maximum Impact</h2>
              <p className="hyi-p">
                Save time and reduce hiring friction. Our AI matching automates
                the screening process, surfaces high-quality candidates early,
                and empowers you to make faster, smarter decisions. The result?
                Reduced time-to-hire, improved retention, and greater team
                productivity.
              </p>
              <div className="w-fit pt-4.5">
                <CustomButton>Talk To Our Expert</CustomButton>
              </div>{" "}
            </div>
            <div className="w-full flex justify-center z-10 lg:w-1/2 lg:justify-end">
              <Image
                src={hiring}
                alt="Statistics Image"
                width={512}
                height={440}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-30 flex items-center justify-center z-0 lg:-top-10">
              <div className="w-[600px] h-[600px] md:w-[650px] md:h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.8)_0%,_transparent_70%)] blur-3xl" />
            </div>
            <div className="pointer-events-none absolute -bottom-15 -right-45 flex items-center justify-center z-0 lg:-top-15">
              <div className="w-[600px] h-[600px] md:w-[650px] md:h-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(112,0,255,0.6)_0%,_transparent_70%)] blur-3xl" />
            </div>
          </div>
        </div>
      </section>
      <CustomWrapper padding="px-4 pb-6 md:px-6 md:pb-6 lg:pb-8">
        <TalkToExpertSection />
      </CustomWrapper>
      <Footer />
    </section>
  );
}
