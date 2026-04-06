import Image from "next/image";
import CardBackground from "@/assets/plan/CardBackground.png";
import Card2Background from "@/assets/plan/card2Background.png";
import Radio from "@/assets/plan/radio.png";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import Link from "next/link";

const businessNeeds = [
  {
    title: "Make work happen fast.",
    description:
      "Hire, manage, and pay your global contractor workforce with ease and speed.",
    subTitle1: "Quick onboarding",
    subTitle2: "Global payroll services in 150+ countries",
    subTitle3: "No hidden fees or extra costs",
  },
  {
    title: "Dedicated Relationship Manager.",
    description:
      "Hire, manage, and pay your global contractor workforce with ease and speed.",
    subTitle1: "Quick onboarding",
    subTitle2: "Global payroll services in 150+ countries",
    subTitle3: "No hidden fees or extra costs",
  },
  {
    title: "Project Creation, Task Management and Communication",
    description:
      "Hire, manage, and pay your global contractor workforce with ease and speed.",
    subTitle1: "Quick onboarding",
    subTitle2: "Global payroll services in 150+ countries",
    subTitle3: "No hidden fees or extra costs",
  },
];

export default function BusinessNeed() {
  return (
    <div className="w-full mx-auto max-w-7xl text-white">
      <div className="w-full flex items-center justify-center text-center mb-10">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 mt-12 lg:mt-24 capitalize">
          HYI.AI offers flexible hiring models tailored to every business need.
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {businessNeeds.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl relative overflow-hidden group flex flex-col"
          >
            {/* Background image */}
            <Image
              src={CardBackground}
              alt="Card Background"
              fill
              className="object-cover absolute inset-0 -z-10"
              priority
            />
            {/* Content */}
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            {/* Spacer pushes subtitles to same start point */}
            <div className="flex-1"></div>
            <p className="text-sm mb-4 text-dark_mode-300">
              {item.description}
            </p>
            <ul className="space-y-4 text-sm text-dark_mode-300">
              <li className="flex">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                {item.subTitle1}
              </li>
              <li className="flex">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                {item.subTitle2}
              </li>
              <li className="flex">
                <Image src={Radio} alt="Radio" className="w-4 h-4 mr-2" />
                {item.subTitle3}
              </li>
            </ul>
            {/* Glass hover overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      <div className="relative mt-20 rounded-2xl overflow-hidden">
        {/* Background image */}
        <Image
          src={Card2Background}
          alt="Card Background"
          fill
          className="object-cover absolute inset-0 -z-10"
          priority
        />
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4 capitalize">
            Discover which HYI.AI hiring models are best suited for your global
            workforce.
          </h1>
          <div className="pt-4">
            <Link
              href="/talk-to-our-expert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShimmerButton>Talk to our expert</ShimmerButton>
            </Link>
          </div>
          <p className="mt-4 text-dark_mode-300">
            No setup fees, no hidden costs.
          </p>
        </div>
      </div>
    </div>
  );
}
