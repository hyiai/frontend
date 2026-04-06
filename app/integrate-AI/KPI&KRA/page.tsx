// Next imports
import Image from "next/image";

// Component imports
import CustomWrapper from "@/components/shared/customWrapper";
import HeroSection from "@/components/section/integrated-AI/heroSection";
import ImageGradientSection from "@/components/section/integrated-AI/ImageGradientSection";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";
import Footer from "@/components/section/general/footer";

// Image imports
import heroImage_02 from "@/assets/integratedAIPage/images/heroImage-02.png";
import insights from "@/assets/integratedAIPage/kpi-images/insights.png";
import performance_01 from "@/assets/integratedAIPage/kpi-images/performance-01.png";
import performance_02 from "@/assets/integratedAIPage/kpi-images/performance-02.png";
import performance_03 from "@/assets/integratedAIPage/kpi-images/performance-03.png";
import teams_01 from "@/assets/integratedAIPage/kpi-images/teams-01.png";
import teams_02 from "@/assets/integratedAIPage/kpi-images/teams-02.png";

export default function KPIPage() {
  return (
    <section>
      <HeroSection
        titleText={[
          "AI-Powered KPI & KRA Tracking for",
          "Smarter Talent Performance",
        ]}
        imageBottom={heroImage_02}
      />
      <ImageGradientSection
        title="Real-Time Insights & Reporting"
        text=" Get actionable insights in real-time with visual dashboards, alerts, and performance summaries. AI detects trends and predicts gaps before they happen."
        image={insights}
      />
      <CustomWrapper padding="px-4">
        <div className="flex flex-col items-center justify-center bg-[url('/performance.png')] bg-no-repeat bg-[length:100%_100%] py-6 gap-10 z-10 md:py-10 lg:py-14 rounded-3xl border border-white/20">
          <div className="w-full flex flex-col text-center gap-2.5 md:w-1/2 px-3  ">
            <h2 className="hyi-h2">Smarter Performance Management with AI</h2>
            <p className="hyi-p">
              Automate performance mapping using AI. Our system smartly links
              KPIs & KRAs to roles, reducing manual effort and ensuring accurate
              goal alignment.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center">
            <Image
              src={performance_01}
              alt="Statistics Image"
              width={379}
              height={428}
              className=""
            />
            <Image
              src={performance_02}
              alt="Statistics Image"
              width={379}
              height={428}
            />
            <Image
              src={performance_03}
              alt="Statistics Image"
              width={379}
              height={428}
            />
          </div>
        </div>
      </CustomWrapper>
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col px-4">
          <div className="relative flex flex-col items-center justify-center pt-12 pb-6 gap-10 md:pt-16 md:pb-20 lg:overflow-visible">
            <div className="w-full flex flex-col text-center gap-2.5 z-10 md:w-1/2">
              <h2 className="hyi-h2">Align Teams with Strategic Goals</h2>
              <p className="hyi-p">
                Keep teams focused and aligned. Build and customize KRA
                templates, assign measurable KPIs, and let AI ensure consistency
                and accountability.
              </p>
            </div>
            <div className="flex flex-col z-10 gap-4 md:flex-row md:gap-5">
              <div className="w-full flex flex-col glass-gradient rounded-2xl px-4 pt-5 gap-5 md:w-1/2">
                <div className="w-full flex flex-col px-5 gap-0.5 md:w-4/5">
                  <h3 className="hyi-h3">Team KPI</h3>
                  <p className="hyi-p">
                    let AI ensure consistency and accountability. Build and
                    customize KRA templates.
                  </p>
                </div>
                <Image
                  src={teams_01}
                  alt="Statistics Image"
                  width={630}
                  height={498}
                />
              </div>
              <div className="w-full flex flex-col glass-gradient rounded-2xl px-4 pt-5 gap-5 md:w-1/2">
                <div className="w-full flex flex-col px-5 gap-0.5 md:w-4/5">
                  <h3 className="hyi-h3">Flowchart-style visual</h3>
                  <p className="hyi-p">
                    Build custom integration logic to ingest, sync, and automate
                    transfer of data across your users&apos; apps.
                  </p>
                </div>
                <Image
                  src={teams_02}
                  alt="Statistics Image"
                  width={630}
                  height={498}
                />
              </div>
            </div>
            <div className="absolute -bottom-50 left-0 w-full h-full bg-[url('/KPI-Bg.png')] bg-no-repeat bg-bottom bg-contain z-0" />
          </div>
        </div>
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 flex items-center justify-center z-0">
          <div className="w-[600px] h-[600px] md:w-[800px] md:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>
      </div>
      <CustomWrapper>
        <TalkToExpertSection />
      </CustomWrapper>
      <Footer />
    </section>
  );
}
