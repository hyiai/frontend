// React Imports
import React, { ReactNode } from "react";

// Next Imports
// import Image from "next/image";

// Image/Icon Import
// import arrowRightIcon from "@/assets/arrowIcons/chevron-right.svg";

interface ButtonProps {
  heroButton?: boolean;
  otherCSSProperty?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton({
  heroButton = false,
  otherCSSProperty = "",
  children,
  isDisabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`text-sm ${
        heroButton ? "btn-hero" : "btn-primary"
      } ${otherCSSProperty} ${
        isDisabled ? "cursor-not-allowed bg-text-400" : "cursor-pointer"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
