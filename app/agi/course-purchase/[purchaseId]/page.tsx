import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import CustomWrapper from "@/components/shared/customWrapper";
import { AGITrainingAPI } from "@/lib/services/api";
import { Check, OctagonAlert } from "lucide-react";
import React from "react";
import check from "@/assets/shared/check.svg";
import Image from "next/image";
import CustomLabel from "@/components/shared/customLabel";
import Link from "next/link";
import CustomButton from "@/components/shared/customButton";
import DownloadInvoiceButton from "@/components/section/course-details/downloadInvoice/downloadInvoiceButton";

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
  status?: number;
  message?: string;
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

export default async function CoursePurchasePage({
  params,
}: {
  params: Promise<{ purchaseId: string }>;
}) {
  const { purchaseId } = await params;
  const course: Course = await AGITrainingAPI.getagicoursepurchasebyid(
    purchaseId
  );

  const invoiceDetails = await AGITrainingAPI.getInvoiceDetailsForAgiCourse(
    purchaseId
  );

  return (
    <section className="w-full flex flex-col items-center">
      <Header />
      <div className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
        <div className="w-full max-w-[1280px]">
          <div className="relative flex flex-col justify-center items-center pt-10 gap-5 md:pt-16 md:gap-8">
            {course.status !== 404 ? (
              <div className="flex flex-col items-center justify-center text-center gap-3.5 z-10">
                <div className="mb-2">
                  <CustomLabel>AGI Training & Certification</CustomLabel>
                </div>

                <h2 className="hyi-h2 font-bold text-2xl flex flex-col gap-2.5 md:text-3xl lg:text-4xl">
                  <span>Thank you for registering your interest for</span>
                  <span>Foundation of AGI</span>
                </h2>
                <p className=" text-dark_mode-300 md:max-w-5xl">
                  Courses are ensured to begin on 29th September. Please ensure
                  your complete payment is made at least 10 days prior to the
                  start date. Our support team will contact you within a few
                  hours, and your login credentials (username and password) will
                  be shared via email.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center gap-3.5 z-10">
                <h2 className="hyi-h2 font-bold text-2xl flex flex-col gap-2.5 md:text-3xl lg:text-4xl">
                  Order data not found
                </h2>
                <p className=" text-dark_mode-300 md:max-w-5xl">
                  Please register for the course.
                </p>
                <Link
                  href={"/agi"}
                  className="text-white hover:underline hover:underline-offset-4"
                >
                  <CustomButton>Register</CustomButton>
                </Link>
              </div>
            )}
            <div>
              <DownloadInvoiceButton invoiceDetails={invoiceDetails}>Download Invoice</DownloadInvoiceButton>
            </div>
            <div
              className={`w-full glass-gradient flex flex-col items-center justify-center rounded-2xl p-5 gap-2 md:w-fit`}
            >
              <OctagonAlert size={24} className="text-white/70 mb-1" />
              <h3 className="text-lg font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent cursor-default lg:text-xl">
                Help and Support
              </h3>
              <div className="w-full flex flex-col items-center justify-between gap-2 md:flex-row md:gap-5">
                <p className="text-sm text-dark_mode-300">
                  Contact Number: +91 7349129333
                </p>
                <p className="text-sm text-dark_mode-300">
                  Email ID: support@hyi.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {course.status !== 404 && (
        <CustomWrapper gapBetween="gap-6 md:gap-10 lg:gap-12">
          <div className="flex flex-col bg-[url('/performance.png')] bg-no-repeat bg-[length:100%_100%] p-6 gap-5 md:px-8 md:py-10 rounded-3xl border border-white/20">
            <div className="flex flex-col-reverse justify-between gap-5 md:flex-row md:items-center">
              <div className="flex flex-col gap-3">
                <h2 className="hyi-h2">{course.name} Course Details </h2>
                <p className="w-fit text-sm glass-gradient rounded-full uppercase px-2.5 py-1">
                  <span className="gradient-text">{course.level} level</span>
                </p>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
                <div>
                  <Image
                    src={check}
                    alt="Check mark"
                    className="w-7 h-7 md:w-10.5 md:h-10.5"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent capitalize cursor-default lg:text-xl">
                    Course Enrolled
                  </h3>
                  <p className="text-xs text-white">
                    Your will be notified before 48 hours the live class starts.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
              <div className="flex flex-col gap-2.5">
                <h3 className="hyi-h5 gradient-text font-medium">
                  Basic Details:
                </h3>
                <ul className="flex flex-col text-sm text-white gap-3.5">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span>Enroll Start Date : {course.enrollStart}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span>Live Class Start Date: {course.liveClassStart}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span>Format: {course.format}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span>Duration: {course.duration}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-success-400" />
                    <span> Commitment: {course.commitment}</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2.5">
                  <h3 className="hyi-h5 gradient-text font-medium">
                    Deliverables:
                  </h3>
                  <ul className="flex flex-col text-sm text-white gap-3.5">
                    {course.deliverables.map((del, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check size={16} className="text-success-400" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full flex flex-col gap-2.5 md:w-2/3">
                  <h3 className="hyi-h4 gradient-text font-medium">Note:</h3>
                  <ul className="flex flex-col text-sm text-white gap-3.5">
                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="min-w-4 min-h-4 text-success-400"
                      />
                      <span>{course.notes}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5 w-full md:w-auto">
                <h3 className="hyi-h5 gradient-text font-medium">Pricing:</h3>
                <span className="text-lg flex flex-col text-white gap-3.5 lg:text-xl">
                  {`$${course.price} USD (or $${course.monthlyPrice}/month)`}
                </span>
              </div>
            </div>
          </div>
          <CustomGradientHoverWrapper>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6 md:gap-y-8">
              {(course.modules ?? []).map((module, index) => {
                const totalModules = course.modules.length;
                const isLastModuleOdd =
                  totalModules % 2 === 1 && index === totalModules - 1;

                return (
                  <div
                    key={index}
                    className={`card h-fit ${isLastModuleOdd
                      ? "col-span-1 md:col-span-2"
                      : "col-span-1"
                      } md:h-full`}
                  >
                    <div
                      className={`card-content glass-gradient h-fit flex flex-col rounded-2xl p-5 gap-3 md:h-full md:p-8`}
                    >
                      <p className="w-fit glass-gradient-full rounded-full uppercase z-10">
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
      )}
      <Footer />
    </section>
  );
}

