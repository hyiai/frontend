import UserStatsCard from "@/components/about/userStats";
import CountryStats from "@/components/about/countryStats";
import Image from "next/image";
import AboutUsBackground from "@/assets/about/aboutUsBackground.webp";
import CompanyOverviewCard from "@/components/about/companyOverviewCard";
import MiddleIcon from "@/assets/about/middle.png";
import CoreValues from "@/components/about/coreValues";
// import AboutUsLeaderShip from "@/components/about/leaderShip";
import AboutUsStrategicMinds from "@/components/about/StrategicAndMedia";
import Technologies from "@/components/section/general/technologies";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import CustomFloatableIcons from "@/components/shared/customFloatableIcons";
import Card4Background from "@/assets/about/backgroundCards/card4.png";
import Amazon from "@/assets/common/FloatableIcons/amazon.png";
import Airtable from "@/assets/common/FloatableIcons/airtable.png";
import Calendly from "@/assets/common/FloatableIcons/calendly.png";
import ClickUp from "@/assets/common/FloatableIcons/clickUp.png";
import Feedback from "@/assets/common/FloatableIcons/feedback.png";
import Google from "@/assets/common/FloatableIcons/google.png";
import Slack from "@/assets/common/FloatableIcons/slack.png";
import Useberry from "@/assets/common/FloatableIcons/useberry.png";
import ActiveUsersCard from "@/components/about/ActiveUsersCard";
import TalentsCard from "@/components/about/talentsCountCard";
import RealTimeDataProvider from "@/components/about/RealTimeDataProvider";
import MissionAndVision from "@/components/about/missionAndVission";

const techIcons = [
  { id: "amazon", src: Amazon, alt: "Amazon" },
  { id: "airtable", src: Airtable, alt: "Airtable" },
  { id: "calendly", src: Calendly, alt: "Calendly" },
  { id: "clickUp", src: ClickUp, alt: "ClickUp" },
  { id: "feedback", src: Feedback, alt: "Feedback" },
  { id: "google", src: Google, alt: "Google" },
  { id: "slack", src: Slack, alt: "Slack" },
  { id: "useberry", src: Useberry, alt: "Useberry" },
];

interface DailyData {
  date: string;
  count: number;
}
interface MonthData {
  month: string;
  monthName: string;
  count: number;
}
interface CountryData {
  country: string;
  count: number;
}

interface AboutUsData {
  data: {
    last5MinCount: number;
    dailyData: DailyData[];
    countryData: CountryData[];
    monthData: MonthData[];
  };
  totalCount: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Enable ISR with 2 minute revalidation
export const revalidate = 120; // 120 seconds = 2 minutes

// Force dynamic for real-time data sections
export const dynamic = "force-static"; // Keep most content static
export const fetchCache = "default-cache"; // Allow caching but respect revalidate

export default async function AboutUsPage() {
  let data: AboutUsData;
  try {
    // Add cache busting and proper headers for real-time data
    const response = await fetch(`${BASE_URL}/get-graph-counts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      // Add timestamp to prevent caching
      next: {
        revalidate: 120, // This ensures ISR works properly
        tags: ["about-us-data"], // Add tags for on-demand revalidation
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching about us data:", error);
    data = {
      data: {
        last5MinCount: 0,
        dailyData: [],
        countryData: [],
        monthData: [],
      },
      totalCount: 0,
    };
  }

  function formatCompactFloor(num: number): string {
    if (num >= 1_000_000_000) {
      return Math.floor(num / 1_000_000_000) + "B";
    }
    if (num >= 1_000_000) {
      return Math.floor(num / 1_000_000) + "M";
    }
    if (num >= 1_000) {
      return Math.floor(num / 1_000) + "K";
    }
    return num.toString();
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <div className="relative z-50 w-full">
        <Header />
      </div>
      <div className="absolute top-0 left-0 w-full h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[50vh] min-[1060px]:h-[70dvh] min-[1160px]:h-[70dvh] xl:h-[60vh] min-[1360px]:min-h-[70dvh] min-[1580px]:min-h-[60dvh]  z-0">
        <Image
          src={AboutUsBackground}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <CustomFloatableIcons
          icons={techIcons}
          overlayMode={true}
          showContent={false}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-4 sm:space-y-8 p-4 lg:p-2">
        <div className="flex flex-col items-center justify-center gap-3 xs:gap-4 pt-0 pb-0 xs:pt-8 xs:pb-8 sm:pt-10 sm:pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 xl:pt-28 xl:pb-20">
          <h1 className="text-white font-semibold text-lg md:text-xl lg:text-2xl text-center leading-tight">
            Welcome to <span className="text-brand-600">HYI.AI</span>
          </h1>
          <div className="text-[#D2D0DD] text-sm xs:text-base md:text-lg lg:text-lg text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl px-2 xs:px-4 leading-relaxed">
            Empowering businesses with smart solutions, expert talent, and
            cutting-edge technology.
          </div>
          <p className="text-xs xs:text-sm sm:text-base bg-gradient-to-r from-[#FCCB90] to-[#D57EEB] bg-clip-text text-transparent text-center flex justify-center items-center gap-1">
            Instant Talent Access
            <Image src={MiddleIcon} alt="Middle Icon" width={14} height={14} />
            Smart Growth.
          </p>
        </div>
        {/* Wrap dynamic data in RealTimeDataProvider for client-side updates */}
        <RealTimeDataProvider initialData={data}>
          {/* First Row Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-6">
            <TalentsCard totalCount={data.totalCount} />
            <ActiveUsersCard
              last5MinCount={data.data.last5MinCount}
              dailyData={data.data.dailyData}
              countryData={data.data.countryData}
            />
          </div>
          {/* Second Row Cards*/}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 xs:gap-4 md:gap-6">
            <UserStatsCard
              monthData={data.data.monthData}
              totalCount={data.totalCount}
            />
            <div className="col-span-1 lg:col-span-4 relative rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 overflow-hidden min-h-[300px] xs:min-h-[320px] sm:min-h-[350px]">
              <Image
                src={Card4Background}
                alt=""
                fill
                className="absolute inset-0 object-cover z-0"
              />
              <div className="relative z-10 space-y-3 xs:space-y-4 sm:space-y-6 h-full flex flex-col">
                <h3 className="text-white text-sm xs:text-base sm:text-lg lg:text-xl font-semibold leading-tight">
                  Total Registered Talents Worldwide
                </h3>
                <div className="flex items-end gap-2">
                  <span className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                    {formatCompactFloor(data?.totalCount)} +
                  </span>
                </div>
                <div className="flex-1">
                  <CountryStats countryData={data.data.countryData} />
                </div>
              </div>
            </div>
          </div>
        </RealTimeDataProvider>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 p-4 lg:p-2">
        <div className="relative w-full mt-12 mb-12">
          {/* Background image repeated exactly 4 times */}
          <div className="absolute inset-0 flex flex-col">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-[url('/bg-talent.svg')] bg-no-repeat bg-center bg-[length:125%_150%] sm:bg-none"
              />
            ))}
          </div>
          <div className="relative z-10">
            <CompanyOverviewCard />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-6 sm:space-y-8 p-4 lg:p-2">
        <MissionAndVision />
        <div className="mt-8 xs:mt-12 sm:mt-16">
          <CoreValues />
        </div>
        {/* <div><AboutUsLeaderShip /></div> */}
        <div>
          <AboutUsStrategicMinds />
        </div>
        <Technologies />
      </div>
      <Footer />
    </section>
  );
}
