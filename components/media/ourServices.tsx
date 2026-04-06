import Image from "next/image";
import Security from "@/assets/media/security.png";
import HomeWork from "@/assets/media/home-work.png";
import SuccessIcon from "@/assets/media/icon-park-success.png";
import HealthIcon from "@/assets/media/healthicon.png";
import Link from "next/link";
import CustomButton from "@/components/shared/customButton";

const servicesContent = [
  {
    id: 1,
    icon: Security,
    title: "Campaigne",
    subTitle1:
      "At HYI.AI, we believe every campaign tells a story of vision, creativity, and impact. Our campaigns highlight not just our brand, but also the innovations, partnerships, and values that drive us forward.",
  },
  {
    id: 2,
    icon: HomeWork,
    title: "Digital Ads",
    subTitle1:
      "Our Digital Advertising solutions help your brand cut through the noise and connect with customers worldwide. From targeted campaigns to data-driven strategies, we make sure every ad delivers measurable impact.",
  },
  {
    id: 3,
    icon: SuccessIcon,
    title: "Social Media Management",
    subTitle1:
      "In today's digital-first world, social media is more than just posting updates it's about creating meaningful conversations, building trust, and driving business growth.",
  },
  {
    id: 4,
    icon: HealthIcon,
    title: "Email Marketing",
    subTitle1:
      "At HYI.AI, we design data-driven, creative, and impactful email marketing campaigns that go beyond just sending messages they build meaningful relationships.",
  },
];

export default function OurServices() {
  return (
    <section className="relative w-full text-white px-4 py-12 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="space-y-4 lg:flex-shrink-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight capitalize mt-0 lg:mt-12">
              We are a strategic to choice
            </h1>
            <p className="text-gray-300 text-base max-w-lg leading-relaxed capitalize">
              Choose how We work together from One-Time-Audits to
              done-For-You-Everything. Outsource all your marketing to us or
              have us to help your internal get better. You choose the style of
              engagement.
            </p>
            <div className="pt-4">
              <Link
                href="/talk-to-our-expert"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton>Talk To Our Expert</CustomButton>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full">
            {servicesContent.map((service) => (
              <div key={service.id} className="rounded-xl p-0 md:p-6">
                <div className="w-14 h-14 bg-[#2a2d36] border border-white/20 rounded-full flex items-center justify-center mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed">{service.subTitle1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
