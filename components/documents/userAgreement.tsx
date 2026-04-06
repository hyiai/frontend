import React from "react";

interface UserAgreementProps {
  bulletPoints: boolean;
  heading: string;
  criteria: string[];
}

export default function UserAgreement({
  bulletPoints,
  heading,
  criteria,
}: UserAgreementProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-base text-dark_mode-200 font-semibold capitalize md:text-xl lg:text-2xl">
        {heading}
      </h3>

      <ul
        className={`${
          bulletPoints
            ? "list-disc list-outside text-start pl-5 md:pl-7"
            : "list-none"
        }`}
      >
        {criteria.map((point, index) => (
          <li
            key={index}
            className="text-xs text-text-500 font-normal leading-relaxed md:text-base"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
