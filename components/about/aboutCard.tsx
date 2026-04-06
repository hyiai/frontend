import React from "react";
import CustomWrapper from "@/components/shared/customWrapper";

interface DashboardCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

const AboutUsCard: React.FC<DashboardCardProps> = ({
  title,
  subtitle,
  children,
  className = "",
  size = "medium",
}) => {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <CustomWrapper
      className={`relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/10 aboutus-card-gradient ${sizeClasses[size]} ${className}`}
      gapBetween="gap-6 md:gap-8"
      padding="" // padding is managed by sizeClasses now
    >
      <div className="relative z-10 w-full">
        {(title || subtitle) && (
          <div className="mb-4">
            {subtitle && (
              <p className="text-text-400 text-sm font-medium mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-white text-lg font-semibold">{title}</h3>
            )}
          </div>
        )}
        {children}
      </div>
    </CustomWrapper>
  );
};

export default AboutUsCard;
