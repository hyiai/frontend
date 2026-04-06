import BusinessNeed from "@/components/plans/BusinessNeed";
import GlobalWorkForce from "@/components/plans/globalWorkForce";
import HireGlobally from "@/components/plans/HireGlobally";
import PlanCard1 from "@/components/plans/planCard1";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import { ShimmerButton } from "@/components/shared/customShimmerButton";
import Link from "next/link";

export default function EnterPrisePlan() {
  return (
    <section className="relative">
      <div className="hidden md:flex overflow-visible pointer-events-none absolute top-[5%] left-[15%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-visible core-gradient w-[1200px] h-[550px]  rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <Header />
      <section className="w-full flex flex-col items-center justify-center overflow-y-visible px-6">
        <div className="w-full mx-auto grid max-w-7xl mt-6 grid-cols-1 justify-between items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-2">
          {/* Left section */}
          <div className="relative z-10 space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
              Scale Smarter,{' '}
              <span className="bg-gradient-to-b from-[#B6B3C9] to-[#7046E6] bg-clip-text text-transparent">
                Lead Faster.
              </span>
            </h1>
            <p className="max-w-lg mx-auto md:mx-0 text-lg leading-relaxed text-white/70">
              Your Complete Enterprise-Grade Tech Talent Solution, Backed by
              Experts.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <Link
                href="/talk-to-our-expert"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton>Talk to our expert</ShimmerButton>
              </Link>
            </div>
          </div>
          {/* Right section */}
          <div className="flex justify-center md:justify-end">
            <PlanCard1 />
          </div>
        </div>
        {/* Other sections */}
        <GlobalWorkForce />
        <BusinessNeed />
        <HireGlobally />
      </section>
      <Footer />
    </section>
  );
}
