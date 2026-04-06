// Next imports
import Image from "next/image";

// Component imports
import CustomWrapper from "@/components/shared/customWrapper";
import HeroSection from "@/components/section/integrated-AI/heroSection";
import ImageGradientSection from "@/components/section/integrated-AI/ImageGradientSection";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";
import Footer from "@/components/section/general/footer";

// Image imports
import heroImage_06 from "@/assets/integratedAIPage/images/heroImage-06.png";
import strategy from "@/assets/integratedAIPage/strategy-images/strategy.png";

import adoption_01 from "@/assets/integratedAIPage/strategy-images/adoption-01.png";
import adoption_02 from "@/assets/integratedAIPage/strategy-images/adoption-02.png";
import adoption_03 from "@/assets/integratedAIPage/strategy-images/adoption-03.png";
import adoption_04 from "@/assets/integratedAIPage/strategy-images/adoption-04.png";

export default function StrategyAndPlanningPage() {
  return (
    <section>
      <HeroSection
        titleText={[
          "AI-driven strategic planning software matches ",
          "talent to your business goals.",
        ]}
        imageBottom={heroImage_06}
      />
      <ImageGradientSection
        title="Integrate AI – Strategy & Planning"
        text="Drive measurable value through strategic AI adoption and implementation. We help businesses embrace AI with clarity and confidence designing data-backed strategies, actionable roadmaps, and sustainable execution plans that align with core business goals."
        image={strategy}
      />
      <CustomWrapper
        padding="px-4 pb-14 md:pb-16"
        divStyle="items-center gap-6 md:gap-10"
      >
        <div className="w-full flex flex-col items-center text-center gap-1.5 md:w-4/5">
          <h2 className="hyi-h2 md:w-3/5">
            Drive measurable value through strategic AI adoption and
            implementation.
          </h2>
          <p className="hyi-p">
            We leverage machine learning to deliver tailored candidate
            recommendations based on your hiring patterns, team structure, and
            project goals. As the system learns and adapts, your hiring becomes
            more efficient, insightful, and aligned with long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-7 gap-6 md:grid-cols-2">
          <div className="flex flex-col pl-7 pt-6 row-span-4 glass-gradient rounded-3xl gap-6 md:gap-10">
            <div className="flex flex-col gap-2.5">
              <h3 className="hyi-h3">
                Strategic Alignment and Opportunity Mapping
              </h3>
              <p className="hyi-p">
                We work closely with your leadership team to identify AI
                opportunities that align with your core business goals. From
                cost efficiency to innovation, our experts map out where AI can
                deliver maximum impact across your value chain.
              </p>
            </div>
            <div className="w-fit h-fit">
              <Image src={adoption_01} alt="Image" className="rounded-br-3xl" />
            </div>
          </div>
          <div className="flex flex-col px-7 py-6 row-span-3 glass-gradient rounded-3xl gap-6 md:gap-10">
            <div className="flex flex-col gap-2.5">
              <h3 className="hyi-h3">Intuitive Task Organization</h3>
              <p className="hyi-p">
                Simplify your task management with an intuitive and efficient
                system with task organization features designed to prioritize
                what&apos;s important.
              </p>
            </div>
            <div className="w-fit h-fit">
              <Image src={adoption_02} alt="Image" />
            </div>
          </div>
          <div className="flex flex-col px-7 py-6 row-span-4 glass-gradient rounded-3xl gap-6 md:gap-10">
            <div className="flex flex-col gap-2.5">
              <h3 className="hyi-h3">
                Capability Assessment and Risk Management
              </h3>
              <p className="hyi-p">
                Before launching AI initiatives, we assess your current
                infrastructure, data readiness, and team capability. We manage
                organizational, ethical, and regulatory risks associated with AI
                adoption.
              </p>
            </div>
            <div className="w-fit h-fit">
              <Image src={adoption_04} alt="Image" />
            </div>
          </div>
          <div className="flex flex-col pr-7 pt-6 row-span-3 glass-gradient rounded-3xl gap-6 md:gap-10">
            <div className="flex flex-col pl-7 gap-2.5">
              <h3 className="hyi-h3">Roadmap Design and Execution Planning</h3>
              <p className="hyi-p">
                Organize your schedule more easily and efficiently! With
                intuitive management tools, you can coordinate tasks, set
                priorities.
              </p>
            </div>
            <div className="w-fit h-fit">
              <Image src={adoption_03} alt="Image" />
            </div>
          </div>
        </div>
      </CustomWrapper>

      <CustomWrapper padding="px-4 pb-6 md:px-6 md:pb-6 lg:pb-8">
        <TalkToExpertSection />
      </CustomWrapper>
      <Footer />
    </section>
  );
}
