import Image from "next/image";
import Card1Background from "@/assets/plan/card1Background.png";

export default function PlanCard1() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      <div className=" hidden md:flex overflow-visible pointer-events-none absolute top-[50%] left-[40%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" overflow-visible core-gradient w-[1200px] h-[550px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
      </div>
      <Image
        src={Card1Background}
        alt="Background"
        fill
        className="absolute inset-0 object-cover z-0 rounded-xl overflow-hidden"
        priority
      />
      {/* Card Content - responsive padding */}
      <div className="relative p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            HYI.AI is live in 150+ countries
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Connecting Talent And Businesses Globally.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            HYI.AI Introduces Dedicated Managers
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            To Bridge Between Talents And Companies
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">
            HYI.AI has over $5M Pre Tested Talent
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            In Global Verified Talent Pool.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">24×7 Global Support</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Available For Product And Grievance.
          </p>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
