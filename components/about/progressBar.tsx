import React from "react";

interface ProgressBarProps {
  label: React.ReactNode;
  value: number;
  total: number;
  color?: "brand" | "success" | "warning" | "blue";
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  total,
  color = "brand",
}) => {
  const percentage = (value / total) * 100;

  const colorClasses = {
    brand: "bg-brand-500",
    success: "bg-success-500",
    warning: "bg-warning-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Label with Flag + Country Name */}
      <div className="flex items-center gap-2 min-w-[160px] text-sm text-white">
        {label}
      </div>
      {/* Progress Bar */}
      <div className="flex-1 h-1 bg-text-800 rounded-full relative">
        <div
          className={`h-1 rounded-full ${colorClasses[color]}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {/* Value */}
      <div className="min-w-[60px] text-white text-right font-medium text-sm">
        {value.toLocaleString()}
      </div>
    </div>
  );
};

export default ProgressBar;

// import React from "react";

// interface ProgressBarProps {
//   label: React.ReactNode;
//   value: number;
//   total: number;
//   display?: string; // NEW prop for "12L" style formatted value
//   color?: "brand" | "success" | "warning" | "blue";
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({
//   label,
//   value,
//   total,
//   display,
//   color = "brand",
// }) => {
//   const percentage = (value / total) * 100;

//   const colorClasses = {
//     brand: "bg-brand-500",
//     success: "bg-success-500",
//     warning: "bg-warning-500",
//     blue: "bg-blue-500",
//   };

//   return (
//     <div className="flex items-center gap-4 w-full">
//       {/* Label with Flag + Country Name */}
//       <div className="flex items-center gap-2 min-w-[160px] text-sm text-white">
//         {label}
//       </div>
//       {/* Progress Bar */}
//       <div className="flex-1 h-1 bg-text-800 rounded-full relative">
//         <div
//           className={`h-1 rounded-full ${colorClasses[color]}`}
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>
//       {/* Formatted "12L" value */}
//       {display && (
//         <div className="min-w-[40px] text-white text-right font-medium text-sm">
//           {display}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProgressBar;
