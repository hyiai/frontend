import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface CustomLabelProps {
  children: ReactNode;
  outerContainerStyle?: string;
  borderStyle?: string;
  textStyle?: string;
  icon?: StaticImageData | string;
}

export default function CustomLabel({
  icon,
  borderStyle,
  outerContainerStyle,
  textStyle,
  children,
}: CustomLabelProps) {
  return (
    <div
      className={`w-fit p-[1px] rounded-full bg-gradient-to-r from-white/70 via-white/40 to-white/20 ${borderStyle}`}
    >
      <div
        className={`w-fit flex items-center rounded-full bg-background px-4 py-1.5 gap-1.5 ${outerContainerStyle}`}
      >
        {icon && <Image src={icon} alt="Icon" />}{" "}
        <span
          className={`text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent  ${textStyle}`}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
