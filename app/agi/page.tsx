import Header from "@/components/section/general/header";
import WhyChooseSection from "@/components/section/course-details/whyChooseSection";
import CustomWrapper from "@/components/shared/customWrapper";
import Footer from "@/components/section/general/footer";
import { AGITrainingAPI } from "@/lib/services/api";
import HeroSection from "@/components/section/course-details/heroSection";
import AGICourseseGrid from "@/components/section/course-details/agiCoursesGrid";

export default async function AGITraining() {
  const agiTrainingData = await AGITrainingAPI.getCourseContent();
  const { courseContent } = agiTrainingData;

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden gap-3 md:gap-6">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      {/* Hero section */}
      <div className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
        <div className="w-full max-w-[1280px]">
          <HeroSection />
        </div>
      </div>
      {/* Why choose HYI.AI */}
      <CustomWrapper padding="px-4 py-2 mb-4" gapBetween="gap-1 md:gap-3 z-10">
        <WhyChooseSection />
      </CustomWrapper>

      {/* Course sections */}
      <CustomWrapper
        className="relative"
        padding="px-4 py-0 mt-4"
        gapBetween="gap-2 md:gap-3"
      >
        {/* gradient */}
        <div className="flex pointer-events-none absolute top-[5%] left-[50%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="core-gradient w-[80vw] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
        </div>
        <h2 className="hyi-h2 text-center z-10">Our Course Pricing</h2>
        <div className="w-full flex justify-center items-center mb-2 z-10">
          <p className="hyi-p text-center mb-2 md:max-w-[60%] z-10">
            At HYI.AI, we go beyond the ordinary by delivering innovative
            solutions, personalized experiences, and unparalleled support,
            ensuring your business achieves lasting success in a competitive
            landscape.
          </p>
        </div>

        <div className="w-full">
          <AGICourseseGrid courses={courseContent} />
        </div>
      </CustomWrapper>

      {/* Enquire now section */}
      <CustomWrapper
        className="relative"
        padding="px-4 py-0 mt-4"
        gapBetween="gap-2 md:gap-3"
      >
        {" "}
        <div className="w-full flex flex-col justify-between items-center bg-[url('/Card-bg-12.png')] bg-no-repeat bg-[length:100%_100%] border border-white/20 rounded-4xl p-6 gap-4 ">
          {/* Course Title */}
          <div>
            <h1 className="hyi-h1">For More Enquiry</h1>
          </div>
          {/* Course Details */}
          <div className="space-y-3">
            <p className="hyi-p text-center">
              For investor inquiries, partnership discussions, or to learn more
              about HYI.AI&apos;s growth opportunities,
              <br />
              <span className="flex flex-col sm:flex-row justify-center gap-1">
                <span>
                  Email us: <b>agi@hyi.ai</b>
                </span>
                <span>or</span>
                <span>
                  Call Us: <b>7349129333</b>
                </span>
              </span>
            </p>
          </div>
        </div>
      </CustomWrapper>

      <Footer />
    </section>
  );
}
