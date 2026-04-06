import React from "react";

import { Factory, BookOpen, Globe } from "lucide-react";
import CustomGradientHoverWrapper from "@/components/shared/customGradientHoverWrapper";
import PreviewCarousel from "@/components/section/general/previewCarousel";

const agiTrainingCards = [
  {
    _id: "agi-01",
    icon: <Factory className="hyi-p" />,
    title: "Industry-Recognized Certification",
    text: "HYI’s AGI Training provides credentials that are valued globally, ensuring participants gain recognition from employers, clients, and industry leaders.",
  },
  {
    _id: "agi-02",
    icon: <BookOpen className="hyi-p" />,
    title: "Hands-On, Practical Learning",
    text: "The program emphasizes real-world applications with projects, case studies, and interactive sessions.",
  },
  {
    _id: "agi-03",
    icon: <Globe className="hyi-p" />,
    title: "Global Community & Career Opportunities",
    text: "Graduates of HYI’s AGI Training join an international network of AI professionals, mentors, and organizations.",
  },
];

export default function WhyChooseSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <h2 className="hyi-h2 gradient-text text-center">
        Why Choose HYI&apos;s AGI Training & Certification
      </h2>
      <CustomGradientHoverWrapper>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5">
          {agiTrainingCards.map((training) => (
            <div key={training._id} className="card h-fit md:h-full">
              <div className="card-content h-fit flex flex-col glass-gradient rounded-2xl px-6 py-7 gap-4 md:h-full">
                <div className="z-10 self-center md:self-start">
                  {training.icon}
                </div>
                <div className="flex flex-col gap-4 z-10">
                  <h3 className="hyi-h4 gradient-text">{training.title}</h3>
                  <p className="hyi-p4 gradient-text">{training.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomGradientHoverWrapper>
      <div className="w-full md:hidden">
        <PreviewCarousel>
          {agiTrainingCards.map((training) => (
            <div key={training._id} className="card h-full">
              <div className="card-content flex flex-col glass-gradient rounded-2xl px-6 py-7 gap-4 h-full">
                <div className="z-10 self-center md:self-start">
                  {training.icon}
                </div>
                <div className="flex flex-col gap-4 z-10 flex-grow">
                  <h3 className="hyi-h4 gradient-text">{training.title}</h3>
                  <p className="hyi-p4 gradient-text">{training.text}</p>
                </div>
              </div>
            </div>
          ))}
        </PreviewCarousel>
      </div>
    </div>
  );
}
