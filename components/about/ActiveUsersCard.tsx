"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Card2Background from "@/assets/about/backgroundCards/card2.png";
import { useRealTimeData } from "./RealTimeDataProvider";

interface CountryApiData {
  country: string;
  count: number;
  flag?: string;
}

interface CountryData {
  country: string;
  count: number;
}

interface DailyData {
  date: string;
  count: number;
}

interface ActiveUserProps {
  last5MinCount: number;
  countryData: CountryApiData[];
  dailyData: DailyData[];
}

const ActiveUsersCard: React.FC<ActiveUserProps> = ({
  last5MinCount: initialLast5MinCount,
  dailyData: initialDailyData,
  countryData: initialCountryData,
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  // Use real-time data if available, otherwise fall back to initial props
  const realTimeContext = useRealTimeData();
  const actualLast5MinCount =
    realTimeContext?.data?.data?.last5MinCount ?? initialLast5MinCount;
  const actualDailyData =
    realTimeContext?.data?.data?.dailyData ?? initialDailyData;
  const actualCountryData =
    realTimeContext?.data?.data?.countryData ?? initialCountryData;

  useEffect(() => {
    const duration = 0;
    const startDelay = 0;
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const updateCounter = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        // Easing function for smooth animation (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const newValue = Math.floor(easeOut * actualLast5MinCount);
        setCurrentValue(newValue);
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCurrentValue(actualLast5MinCount);
        }
      };
      requestAnimationFrame(updateCounter);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [actualLast5MinCount]); // Re-run animation when actualLast5MinCount changes

  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-5 rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 relative overflow-hidden">
      <Image
        src={Card2Background}
        alt=""
        fill
        className="absolute inset-0 object-cover z-0"
      />
      <div className="relative z-10 space-y-3 xs:space-y-4 h-full">
        {/* Header */}
        <div className="relative">
          <p className="text-text-300 text-sm mb-1 flex items-center gap-2">
            Total Active users in last{" "}
            <span className="text-success-400">5 minutes</span>
          </p>
          <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
            {currentValue}
          </h2>
        </div>
        {/* Bar Chart */}
        <div className="h-10 xs:h-12 sm:h-16 md:h-20 flex items-end justify-between gap-[2px] xs:gap-[3px] sm:gap-[4px] md:gap-[6px] overflow-x-auto">
          {actualDailyData.slice(-22).map((day: DailyData, index: number) => {
            const maxDaily = Math.max(
              ...actualDailyData.map((d: DailyData) => d.count)
            );
            const height = maxDaily > 0 ? (day.count / maxDaily) * 100 : 0;
            return (
              <div
                key={`${day.date}-${index}`}
                className="w-[1.5px] xs:w-[2px] sm:w-[3px] md:w-[4px] bg-white rounded-sm flex-shrink-0 transition-all duration-500"
                style={{ height: `${Math.max(height, 5)}%` }}
              />
            );
          })}
        </div>
        {/* Top Countries */}
        <div className="flex-1">
          <p className="text-white text-sm font-medium mb-2">
            Top countries Active Users
          </p>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 text-xs">
            {actualCountryData
              .slice(0, 5)
              .map((item: CountryData, index: number) => {
                const maxCountryCount = Math.max(
                  ...actualCountryData.map((c: CountryData) => c.count)
                );
                const ratio =
                  maxCountryCount > 0 ? item.count / maxCountryCount : 0;
                return (
                  <div
                    key={`${item.country}-${index}`}
                    className="flex flex-col items-start w-full"
                  >
                    <div className="flex flex-col gap-1 justify-between w-full">
                      <span className="text-text-300 text-xs truncate">
                        {item.country}
                      </span>
                      <span className="text-white text-base font-medium transition-all duration-500">
                        {item.count.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-[2px] xs:h-[3px] sm:h-[4px] bg-[#3a3a4a] rounded mt-1">
                      <div
                        className="h-full bg-white rounded transition-all duration-500"
                        style={{ width: `${ratio * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
