import WhyChooseSection from "@/components/section/course-details/whyChooseSection";
import HeroSection from "@/components/section/course-details/heroSection";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import CustomWrapper from "@/components/shared/customWrapper";
import { AGITrainingAPI } from "@/lib/services/api";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import CourseDetailsEnroll from "@/components/section/course-details/courseDetailsEnroll";

export interface Course {
  _id: string;
  name: string;
  slug: string;
  desc: string;
  enrollStart: string;
  enrollEnd?: string; // optional since empty
  liveClassStart: string;
  liveClassEnd?: string; // optional since empty
  commitment: string;
  format: string[];
  deliverables: string[];
  goal: string;
  language: string;
  level: "beginner" | "intermediate" | "advanced" | string;
  rating: number;
  currency: string;
  price: number;
  duration: string;
  durationType: "weeks" | "months" | "days" | string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  monthlyPrice: number;
  notes: string;
  modules: Module[];
}

export interface Module {
  title: string;
  description: string;
  moduleContent: ModuleContent[];
}

export interface ModuleContent {
  contentTitle: string;
  contents: string[];
}

export default async function AGICurricullumPage({
  params,
}: {
  params: Promise<{ levelId: string }>;
}) {
  const { levelId } = await params;
  const course: Course = await AGITrainingAPI.getagicoursebyslug(levelId);

  return (
    <section className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
        <div className="w-full max-w-[1280px]">
          <HeroSection />
        </div>
      </div>
      <CustomWrapper gapBetween="gap-6 md:gap-10 lg:gap-12">
        <WhyChooseSection />
        <CourseDetailsEnroll course={course} />
        <CustomGradientHoverWrapper>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-8">
            {(course.modules ?? []).map((module, index) => {
              const totalModules = course.modules.length;
              const isLastModuleOdd =
                totalModules % 2 === 1 && index === totalModules - 1;

              return (
                <div
                  key={index}
                  className={`card h-fit ${
                    isLastModuleOdd ? "col-span-1 md:col-span-2" : "col-span-1"
                  } md:h-full`}
                >
                  <div
                    className={`card-content glass-gradient h-fit flex flex-col rounded-2xl p-5 gap-3 md:h-full md:p-8`}
                  >
                    <p className="w-fit glass-gradient rounded-full uppercase z-10">
                      <span className="text-sm gradient-text px-2.5 py-1.5">
                        MODULE {index + 1}
                      </span>
                    </p>
                    <h3 className="hyi-h4 gradient-text mt-2 z-10">
                      {module.title}
                    </h3>
                    {module.description && module.description.length > 0 && (
                      <p className="text-sm text-white mb-3 z-10">
                        {module.description}
                      </p>
                    )}

                    <div className="flex flex-col gap-6 z-10">
                      {module.moduleContent.map((mc, index) => (
                        <div key={index} className="flex flex-col gap-2.5">
                          <h4 className="hyi-h5 gradient-text">
                            {mc.contentTitle}
                          </h4>
                          <div className="flex flex-col gap-2.5">
                            {mc.contents.map((con, i) => (
                              <p key={i} className="text-sm text-white">
                                {con}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CustomGradientHoverWrapper>
      </CustomWrapper>
      <Footer />
    </section>
  );
}
