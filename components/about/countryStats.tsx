"use client";

import ProgressBar from "@/components/about/progressBar";
import { Flag } from "lucide-react";

interface CountryApiData {
  country: string;
  count: number;
  flag?: string;
}

interface CountryStatsProps {
  countryData: CountryApiData[];
}

interface CountryData {
  name: string;
  flag?: string;
  count: number;
}

const CountryStats: React.FC<CountryStatsProps> = ({ countryData }) => {
  const countries: CountryData[] = countryData
    .slice(0, 4)
    .map((apiCountry) => ({
      name: apiCountry.country,
      flag: `data:image/png;base64,${apiCountry.flag}`,
      count: apiCountry.count,
    }));

  // Find the highest count for percentage calculations
  const maxCount = Math.max(...countries.map((c) => c.count));

  return (
    <div className="space-y-10">
      {countries.map((country, index) => (
        <ProgressBar
          key={index}
          label={
            <span className="flex items-center gap-2">
              {country.flag ? (
                // Using regular img tag instead of Next.js Image for base64 data URLs
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  width={20}
                  height={12}
                  className="object-cover"
                  style={{ width: "20px", height: "12px" }}
                />
              ) : (
                <Flag size={20} />
              )}
              {country.name}
            </span>
          }
          value={country.count}
          total={maxCount}
        />
      ))}
    </div>
  );
};

export default CountryStats;

// "use client";

// import ProgressBar from "@/components/about/progressBar";

// interface CountryApiData {
//   country: string;
//   count: number; // keep as number
//   flag?: string;
// }

// interface CountryStatsProps {
//   countryData: CountryApiData[];
// }

// interface CountryData {
//   name: string;
//   flag?: string;
//   count: number;   // numeric value
//   display: string; // formatted string like "12L"
// }

// const CountryStats: React.FC<CountryStatsProps> = ({ countryData }) => {
//   // Static counts: numeric + display
//   const staticCounts = [
//     { value: 400000, display: "4L" },
//     { value: 200000, display: "2L" },
//     { value: 100000, display: "1L" },
//     { value: 100000, display: "1L" },
//   ];

//   const countries: CountryData[] = countryData.slice(0, 4).map((apiCountry, index) => ({
//     name: apiCountry.country,
//     flag: `data:image/png;base64,${apiCountry.flag}`,
//     count: staticCounts[index]?.value || 0,
//     display: staticCounts[index]?.display || "0",
//   }));

//   const maxCount = Math.max(...countries.map((c) => c.count));

//   return (
//     <div className="space-y-10">
//       {countries.map((country, index) => (
//         <ProgressBar
//           key={index}
//           label={
//             <span className="flex items-center gap-2">
//               {country.flag ? (
//                 <img
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   width={20}
//                   height={12}
//                   className="object-cover"
//                   style={{ width: "20px", height: "12px" }}
//                 />
//               ) : null}
//               {country.name}
//             </span>
//           }
//           value={country.count}
//           total={maxCount}
//           display={country.display} // pass formatted display
//         />
//       ))}
//     </div>
//   );
// };

// export default CountryStats;
