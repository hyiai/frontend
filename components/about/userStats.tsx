"use client";

import Image from "next/image";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  CartesianGrid,
} from "recharts";
import Card3Background from "@/assets/about/backgroundCards/card3.png";

interface MonthData {
  month: string;
  monthName: string;
  count: number;
}

interface UserStatsCardProps {
  monthData: MonthData[];
  totalCount: number;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  payload?: {
    payload: MonthData;
  }[];
}

const UserStatsCard: React.FC<UserStatsCardProps> = ({
  monthData,
  totalCount,
}) => {
  // Find the peak month
  const peakMonth = monthData.reduce((max, current) =>
    current.count > max.count ? current : max
  );

  // Calculate expected average and spike percentage
  const expectedAvg = Math.floor(totalCount / monthData.length);
  const spikePercent = (
    ((peakMonth.count - expectedAvg) / expectedAvg) *
    100
  ).toFixed(1);

  // Format data for the chart
  const chartData = monthData.map((month) => ({
    ...month,
    shortName: month.monthName.slice(0, 3),
    formattedCount: `${(month.count / 1000).toFixed(1)}K`,
  }));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isPeak = data.count === peakMonth.count;

      if (isPeak) {
        return (
          <div className="relative rounded-xl border border-white/10 background-gradient bg-white/5 backdrop-blur-md p-6 text-white overflow-hidden group hover:bg-white/15 transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/20">
            <p className="text-sm font-medium text-white">
              Spike in New Users on {data.month}
            </p>
            <div className="flex gap-4 text-[11px]">
              <p className="text-white">
                Expected{" "}
                <span className="font-semibold">
                  {expectedAvg.toLocaleString()}
                </span>
              </p>
              <p className="text-white">
                Actual{" "}
                <span className="font-semibold">
                  {data.count.toLocaleString()}
                </span>
              </p>
              <p className="text-green-500 font-semibold">↑ {spikePercent}%</p>
            </div>
            <p className="text-gray-300">
              New Users: {data.count.toLocaleString()}
            </p>
          </div>
        );
      }
    }
    return null;
  };

  // Custom Y-axis tick formatter
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <div className="col-span-1 lg:col-span-6 relative overflow-hidden rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6">
      <Image
        src={Card3Background}
        alt=""
        fill
        className="absolute inset-0 object-cover z-0"
      />
      <div className="relative z-10 h-full">
        <div className="rounded-lg text-white">
          {/* Header Stats */}
          <div className="flex gap-8 mb-6">
            <div>
              <p className="text-green-400 text-sm mb-1">New users</p>
              <p className="text-3xl font-bold">
                {totalCount.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Chart Container */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="rgba(255,255,255,0.1)"
                  horizontal={true}
                  vertical={false}
                />

                <XAxis
                  dataKey="shortName"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                  dy={10}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                  tickFormatter={formatYAxis}
                  domain={[0, "dataMax + 1000"]}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 1 }}
                />

                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#7046e6"
                  fill="#7046e6"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#7046e6", strokeWidth: 0 }}
                  activeDot={{
                    r: 6,
                    fill: "#7046e6",
                    stroke: "#fff",
                    strokeWidth: 2,
                    style: {
                      filter:
                        "drop-shadow(0px 0px 6px rgba(139, 92, 246, 0.8))",
                    },
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatsCard;

// "use client";

// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   Tooltip,
//   TooltipProps,
//   CartesianGrid,
// } from "recharts";

// interface MonthData {
//   month: string;
//   monthName: string;
//   count: number;
// }

// interface CustomTooltipProps extends TooltipProps<number, string> {
//   payload?: {
//     payload: MonthData;
//   }[];
// }

// const UserStatsCard: React.FC = () => {
//   // ✅ Static month data (scaled so total ≈ 10 lakhs)
//   const monthData: MonthData[] = [
//     { month: "Apr", monthName: "April", count: 10000 },
//     { month: "May", monthName: "May", count: 150000 },
//     { month: "Jun", monthName: "June", count: 300000 },
//     { month: "Jul", monthName: "July", count: 250000 },
//     { month: "Aug", monthName: "August", count: 300000 },
//   ];

//   const totalCount = monthData.reduce((sum, m) => sum + m.count, 0);

//   // Find the peak month
//   const peakMonth = monthData.reduce((max, current) =>
//     current.count > max.count ? current : max
//   );

//   // Calculate expected average and spike percentage
//   const expectedAvg = Math.floor(totalCount / monthData.length);
//   const spikePercent = (
//     ((peakMonth.count - expectedAvg) / expectedAvg) *
//     100
//   ).toFixed(1);

//   // Format data for the chart
//   const chartData = monthData.map((month) => ({
//     ...month,
//     shortName: month.monthName.slice(0, 3),
//     formattedCount: `${(month.count / 1000).toFixed(1)}K`,
//   }));

//   // Custom tooltip component
//   const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
//     if (active && payload && payload.length) {
//       const data = payload[0].payload;
//       const isPeak = data.count === peakMonth.count;

//       if (isPeak) {
//         return (
//           <div className="relative rounded-xl border border-white/10 background-gradient bg-white/5 backdrop-blur-md p-6 text-white overflow-hidden group hover:bg-white/15 transition-all duration-300 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/20">
//             <p className="text-sm font-medium text-white">
//               Spike in New Users on {data.month}
//             </p>
//             <div className="flex gap-4 text-[11px]">
//               <p className="text-white">
//                 Expected{" "}
//                 <span className="font-semibold">
//                   {expectedAvg.toLocaleString()}
//                 </span>
//               </p>
//               <p className="text-white">
//                 Actual{" "}
//                 <span className="font-semibold">
//                   {data.count.toLocaleString()}
//                 </span>
//               </p>
//               <p className="text-green-500 font-semibold">↑ {spikePercent}%</p>
//             </div>
//             <p className="text-gray-300">
//               New Users: {data.count.toLocaleString()}
//             </p>
//           </div>
//         );
//       }
//     }
//     return null;
//   };

//   // Custom Y-axis tick formatter
//   const formatYAxis = (value: number) => {
//     if (value >= 1000) {
//       return `${(value / 1000).toFixed(0)}K`;
//     }
//     return value.toString();
//   };

//   return (
//     <div className="rounded-lg text-white">
//       {/* Header Stats */}
//       <div className="flex gap-8 mb-6">
//         <div>
//           <p className="text-green-400 text-sm mb-1">New users</p>
//           <p className="text-3xl font-bold">
//             {(totalCount / 1000).toFixed(0)}K
//           </p>
//         </div>
//       </div>

//       {/* Chart Container */}
//       <div className="h-64 w-full">
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart
//             data={chartData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//           >
//             <defs>
//               <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#8b5cf6" />
//                 <stop offset="50%" stopColor="#a855f7" />
//                 <stop offset="100%" stopColor="#7c3aed" />
//               </linearGradient>
//             </defs>

//             <CartesianGrid
//               strokeDasharray="4 4"
//               stroke="rgba(255,255,255,0.1)"
//               horizontal={true}
//               vertical={false}
//             />

//             <XAxis
//               dataKey="shortName"
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
//               dy={10}
//             />

//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
//               tickFormatter={formatYAxis}
//               domain={[0, "dataMax + 50000"]}
//             />

//             <Tooltip
//               content={<CustomTooltip />}
//               cursor={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 1 }}
//             />

//             <Area
//               type="monotone"
//               dataKey="count"
//               stroke="#7046e6"
//               fill="#7046e6"
//               strokeWidth={3}
//               dot={{ r: 4, fill: "#7046e6", strokeWidth: 0 }}
//               activeDot={{
//                 r: 6,
//                 fill: "#7046e6",
//                 stroke: "#fff",
//                 strokeWidth: 2,
//                 style: {
//                   filter: "drop-shadow(0px 0px 6px rgba(139, 92, 246, 0.8))",
//                 },
//               }}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default UserStatsCard;
