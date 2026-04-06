"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Icon data type - made src more flexible to handle both StaticImageData and strings
interface IconData {
  id: string;
  src: StaticImageData | string;
  alt: string;
}

// Component props type
interface FloatingIconsHeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  icons?: IconData[];
  className?: string;
  overlayMode?: boolean; // Make it work as overlay
  showContent?: boolean; // Control content visibility
}

// Default icons with placeholder URLs that work
const defaultIcons: IconData[] = [
  {
    id: "python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    id: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS",
  },
  {
    id: "git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    id: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML",
  },
  {
    id: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "Javascript",
  },
  {
    id: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    id: "nodejs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    id: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
];

const CustomFloatableIcons: React.FC<FloatingIconsHeroProps> = ({
  title = "Welcome to HYI.AI",
  subtitle = "Empowering businesses with smart solutions, expert talent, and cutting-edge technology.",
  tagline = "Instant Talent Access ✨ Smart Growth.",
  icons = defaultIcons,
  className = "",
  overlayMode = false,
  showContent = true,
}) => {
  const [random, setRandom] = useState<number>(0);
  // Generate a random number for animation delay
  useEffect(() => {
    setRandom(Math.random);
  }, []);
  
  // Responsive icon positions for different screen sizes - FIXED POSITIONING
  const getIconPositions = () => {
    const positions = {
      // Large Desktop (xl and up - 1280px+)
      xlDesktop: [
        { top: "25%", left: "27%", delay: 0 },
        { top: "62%", right: "27%", delay: 0.5 },
        { top: "62%", left: "27%", delay: 1 },
        { top: "72%", left: "19%", delay: 1.5 },
        { top: "70%", right: "19%", delay: 2 },
        { top: "40%", right: "16%", delay: 2.5 },
        { top: "42%", left: "19%", delay: 3 },
        { top: "23%", right: "25%", delay: 3.5 },
      ],
      // Desktop (lg to xl - 1024px to 1279px) - ADJUSTED FOR BETTER SPACING
      desktop: [
        { top: "25%", left: "18%", delay: 0 },
        { top: "62%", right: "15%", delay: 0.5 },
        { top: "62%", left: "18%", delay: 1 },
        { top: "72%", left: "8%", delay: 1.5 },
        { top: "70%", right: "5%", delay: 2 },
        { top: "40%", right: "5%", delay: 2.5 },
        { top: "42%", left: "8%", delay: 3 },
        { top: "23%", right: "15%", delay: 3.5 },
      ],
      // Tablet (md to lg - 768px to 1023px)
      tablet: [
        { top: "32%", left: "15%", delay: 0 },
        { top: "62%", right: "14%", delay: 0.5 },
        { top: "57%", left: "16%", delay: 1 },
        { top: "70%", left: "8%", delay: 1.5 },
        { top: "70%", right: "6%", delay: 2 },
        { top: "42%", right: "5%", delay: 2.5 },
        { top: "45%", left: "8%", delay: 3 },
        { top: "28%", right: "14%", delay: 3.5 },
      ],
    };
    return positions;
  };

  const iconPositions = getIconPositions();

  // Use only the first 8 icons
  const displayIcons = icons.slice(0, 8);

  return (
    <div
      className={`${
        overlayMode
          ? "absolute inset-0 pointer-events-none"
          : "relative w-full min-h-[600px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
      } overflow-hidden ${className}`}
    >
      {/* Custom CSS for bouncing animations */}
      <style jsx>{`
        @keyframes gentleBounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes gentleBounceLarge {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .bounce-gentle {
          animation: gentleBounce 2.5s ease-in-out infinite;
        }

        .bounce-gentle-large {
          animation: gentleBounceLarge 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Network Pattern - only show when not in overlay mode */}
      {!overlayMode && (
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
            {/* Animated network lines */}
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
            </defs>

            {/* Network lines */}
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={random * 1200}
                y1={random * 800}
                x2={random * 1200}
                y2={random * 800}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                opacity="0.3"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.6;0.1"
                  dur={`${2 + random * 3}s`}
                  repeatCount="indefinite"
                  begin={`${random * 2}s`}
                />
              </line>
            ))}

            {/* Network nodes */}
            {[...Array(15)].map((_, i) => (
              <circle
                key={i}
                cx={random * 1200}
                cy={random * 800}
                r="2"
                fill="rgba(139, 92, 246, 0.4)"
              >
                <animate
                  attributeName="r"
                  values="1;3;1"
                  dur={`${3 + random * 2}s`}
                  repeatCount="indefinite"
                  begin={`${random * 3}s`}
                />
              </circle>
            ))}
          </svg>
        </div>
      )}

      {/* Floating Icons - Extra Large Desktop (xl and up - 1280px+) */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none">
        {displayIcons.map((icon, index) => {
          const position = iconPositions.xlDesktop[index];
          return (
            <div
              key={`xl-${icon.id}-${index}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                top: position.top,
                left: position.left,
                right: position.right,
                zIndex: 20,
              }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>

                {/* Icon container with bounce animation - XL size */}
                <div
                  className="relative w-14 h-14 bg-gray-900/50 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-purple-400/50 bounce-gentle-large"
                  style={{
                    animationDelay: `${position.delay}s`,
                    animationDuration: `${2.5 + random * 1}s`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={36}
                    height={36}
                    className="w-7 h-7 object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Icons - Desktop (lg to xl - 1024px to 1279px) */}
      <div className="absolute inset-0 hidden lg:block xl:hidden pointer-events-none">
        {displayIcons.map((icon, index) => {
          const position = iconPositions.desktop[index];
          return (
            <div
              key={`desktop-${icon.id}-${index}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                top: position.top,
                left: position.left,
                right: position.right,
                zIndex: 20,
              }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>

                {/* Icon container with bounce animation - Desktop size */}
                <div
                  className="relative w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-purple-400/50 bounce-gentle-large"
                  style={{
                    animationDelay: `${position.delay}s`,
                    animationDuration: `${2.5 + random * 1}s`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={32}
                    height={32}
                    className="w-6 h-6 object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Icons - Tablet (md to lg - 768px to 1023px) */}
      <div className="absolute inset-0 hidden md:block lg:hidden pointer-events-none">
        {displayIcons.map((icon, index) => {
          const position = iconPositions.tablet[index];
          return (
            <div
              key={`tablet-${icon.id}-${index}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{
                top: position.top,
                left: position.left,
                right: position.right,
                zIndex: 20,
              }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 scale-150"></div>

                {/* Icon container with bounce animation - Tablet size */}
                <div
                  className="relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-purple-400/50 bounce-gentle"
                  style={{
                    animationDelay: `${position.delay}s`,
                    animationDuration: `${2.5 + random * 1}s`,
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="w-5 h-5 object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Content - only show when not in overlay mode or when showContent is true */}
      {!overlayMode && showContent && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              {title.split(" ").map((word, index) => {
                if (word.includes("HYI.AI")) {
                  return (
                    <span
                      key={index}
                      className="bg-gradient-to-b from-purple-300 to-purple-600 bg-clip-text text-transparent"
                    >
                      {word}{" "}
                    </span>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent font-medium">
              {tagline}
            </p>
          </div>
        </div>
      )}

      {/* Bottom gradient overlay - only show when not in overlay mode */}
      {!overlayMode && (
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
      )}
    </div>
  );
};

export default CustomFloatableIcons;
