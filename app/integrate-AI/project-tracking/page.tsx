// Next imports
import Image from "next/image";

// Component imports
import CustomWrapper from "@/components/shared/customWrapper";
import HeroSection from "@/components/section/integrated-AI/heroSection";
import ImageGradientSection from "@/components/section/integrated-AI/ImageGradientSection";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";
import Footer from "@/components/section/general/footer";

// Image imports
import heroImage_03 from "@/assets/integratedAIPage/images/heroImage-03.png";
import visibility from "@/assets/integratedAIPage/project-images/visibility.png";
import decision from "@/assets/integratedAIPage/project-images/decision.png";
import automation_01 from "@/assets/integratedAIPage/project-images/automation-01.png";
import automation_02 from "@/assets/integratedAIPage/project-images/automation-02.png";
import automation_03 from "@/assets/integratedAIPage/project-images/automation-03.png";
import { Loader2 } from "lucide-react";

export default function ProjectTrackingPage() {
  return (
    <section>
      <HeroSection
        titleText={[
          "AI-Enabled Project Tracking, Real-time",
          "insights, and predictive visibility.",
        ]}
        imageBottom={heroImage_03}
      />
      <ImageGradientSection
        title="Live Visibility Across the Project Lifecycle"
        text="HYI.AI’s project tracking tool delivers continuous, real-time updates across all stages of your project. Whether it’s resource allocation, task completion, or performance metrics, everything is updated live, giving you a single source of truth for your operations."
        image={visibility}
      />
      <CustomWrapper padding="px-4 py-0 md:py-0">
        <div className="flex flex-col items-center justify-center bg-[url('/performance.png')] bg-no-repeat bg-[length:100%_100%] pt-6 gap-10 z-10 md:pt-10 lg:pt-14 rounded-3xl border border-white/20">
          <div className="w-full flex flex-col items-center justify-center text-center gap-5">
            <div className="w-full flex flex-col gap-2.5 md:w-9/12">
              <h2 className="hyi-h2">AI-Powered Decision-Making Engine</h2>
              <p className="hyi-p">
                Work smarter, not harder. Using predictive algorithms, HYI.AI
                analyzes trends, flags risks, and provides recommendations to
                optimize delivery. Whether you&apos;re managing a distributed
                tech team or a high-stakes product sprint, the AI assists you in
                making proactive, data-driven decisions.
              </p>
            </div>
            <div className="w-full flex flex-col gap-2 md:w-1/2">
              <h2 className="text-lg font-semibold text-dark_mode-300">
                What You Get:
              </h2>
              <p className="text-sm font-semibold text-dark_mode-300">
                Risk prediction based on task and resource data | AI-suggested
                task reallocation for better efficiency | Scenario planning and
                timeline forecasting | Smart prioritization for critical tasks
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 md:flex-row md:gap-5 md:px-0">
            <Image
              src={decision}
              alt="Statistics Image"
              width={1135}
              height={574}
            />
          </div>
        </div>
      </CustomWrapper>
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col px-4">
          <div className="relative flex flex-col items-center justify-center pt-12 pb-6 gap-10 md:pt-16 md:pb-8 lg:overflow-visible">
            <div className="w-full flex flex-col text-center gap-2.5 z-10 md:w-2/3">
              <h2 className="hyi-h2">Automation for Complex Workflows</h2>
              <p className="hyi-p">
                Let AI handle the routine so your team can focus on impact.
                HYI.AI reduces operational load with automated task updates,
                status reporting, and follow-ups. From setting reminders to
                generating reports, our AI tracks the details so your team stays
                aligned and productive.
              </p>
            </div>
            <div className="flex flex-col z-10 gap-4 md:gap-5">
              <div className="flex flex-col gap-4 md:flex-row md:gap-5">
                <div className="w-full flex flex-col items-center glass-gradient rounded-2xl px-4 py-5 gap-5 md:w-1/2 lg:flex-row">
                  <div className="w-full flex flex-col gap-5 lg:w-1/2">
                    <div className="flex flex-col gap-2">
                      <h3 className="hyi-h4">
                        Auto-reminders and smart task dependencies
                      </h3>
                      <p className="hyi-p text-sm">
                        Organize, prioritize, and track task progress with
                        precision tools, ensuring clarity and focus for all team
                        members
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="hyi-h4">
                        Seamless collaboration across remote teams
                      </h3>
                      <p className="hyi-p text-sm">
                        One-click reporting and AI-generated summaries
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={automation_01}
                      alt="Statistics Image"
                      width={297}
                      height={243}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col glass-gradient rounded-2xl px-4 py-5 gap-5 md:w-1/2">
                  <div>
                    <Image
                      src={automation_02}
                      alt="Statistics Image"
                      width={594}
                      height={192}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-0.5 md:w-4/5">
                    <h3 className="hyi-h4">Stay on Schedule</h3>
                    <p className="hyi-p text-sm">
                      Effortlessly synchronize with multiple calendar platforms
                      to ensure every deadline and meeting is perfectly aligned
                      with your team&apos;s schedule
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center glass-gradient rounded-2xl px-4 py-5 gap-5">
                <div className="w-full flex justify-between items-start md:items-center">
                  <div className="flex flex-col gap-2">
                    <h3 className="hyi-h4">
                      Gain Insightful Analytics and Reduced manual tracking
                    </h3>
                    <p className="hyi-p text-sm">
                      Deliver projects faster, with fewer errors and less
                      operational friction.
                    </p>
                  </div>
                  <span className="flex items-center glass-gradient-full text-dark_mode-100 rounded-full px-2.5 py-1 gap-2">
                    <Loader2
                      size={20}
                      strokeWidth={3.0}
                      className="animate-spin text-brand-500"
                    />
                    86%
                  </span>
                </div>
                <div>
                  <Image
                    src={automation_03}
                    alt="Statistics Image"
                    width={1243}
                    height={143}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -top-15 left-1/2 -translate-x-1/2 flex items-center justify-center z-0 md:-top-40">
          <div className="w-[500px] h-[500px] md:w-[800px] md:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>
      </div>
      <CustomWrapper>
        <TalkToExpertSection />
      </CustomWrapper>
      <Footer />
    </section>
  );
}
