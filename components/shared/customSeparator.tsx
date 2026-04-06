import React from "react";

interface CustomSeparatorProps {
  from?: string;
  to?: string;
  margin_Y?: string;
}

export default function CustomSeparator({
  from = "from-10%",
  to = "to-90%",
  margin_Y = "my-5",
}: CustomSeparatorProps) {
  return (
    <div
      className={`h-[1px] ${margin_Y} w-full bg-gradient-to-r from-transparent ${from} via-[#5F5F5F] via-50% to-transparent ${to}`}
    />
  );
}
