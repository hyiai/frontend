"use client";
import React, { useState, useEffect } from "react";
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

const CustomFloatableIcons2: React.FC<FloatingIconsHeroProps> = ({
  title = "Welcome to HYI.AI",
  subtitle = "Empowering businesses with smart solutions, expert talent, and cutting-edge technology.",
  tagline = "Instant Talent Access ✨ Smart Growth.",
  icons = defaultIcons,
  className = "",
  overlayMode = false,
  showContent = true,
}) => {
  const [random, setRandom] = useState<number>(0);
  const [currentIconSet, setCurrentIconSet] = useState(0);

  useEffect(() => {
    setRandom(Math.random);
  }, []);

  // Responsive icon positions for different screen sizes
  const getIconPositions = () => {
    // Different layouts for different screen sizes
    const positions = {
      desktop: [
        { top: "12%", left: "18%", delay: 0 },
        { top: "12%", right: "18%", delay: 0.5 },
        { top: "37%", left: "5%", delay: 1 },
        { top: "37%", right: "5%", delay: 1.5 },
        { top: "66%", left: "11%", delay: 2 },
        { top: "66%", right: "11%", delay: 2.5 },
        { top: "89%", left: "24%", delay: 3 },
        { top: "89%", right: "24%", delay: 3.5 },
      ],
      tablet: [
        { top: "18%", left: "15%", delay: 0 },
        { top: "18%", right: "15%", delay: 0.5 },
        { top: "34%", left: "8%", delay: 1 },
        { top: "34%", right: "8%", delay: 1.5 },
        { top: "54%", left: "4%", delay: 2 },
        { top: "54%", right: "4%", delay: 2.5 },
        { top: "72%", left: "12%", delay: 3 },
        { top: "72%", right: "12%", delay: 3.5 },
      ],
    };
    return positions;
  };

  const iconPositions = getIconPositions();

  // Rotate icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconSet((prev) => (prev + 1) % Math.ceil(icons.length / 8));
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  // Get current set of 8 icons
  const getCurrentIcons = () => {
    const startIndex = currentIconSet * 8;
    const currentIcons = icons.slice(startIndex, startIndex + 8);
    // If we don't have 8 icons, fill with icons from the beginning
    while (currentIcons.length < 8) {
      currentIcons.push(...icons.slice(0, 8 - currentIcons.length));
    }
    return currentIcons.slice(0, 8);
  };

  const currentIcons = getCurrentIcons();

  useEffect(() => {
    if (typeof window !== "undefined") return;
  }, []);
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

      {/* Floating Icons - Desktop (lg and up) - HIDDEN ON MOBILE */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {currentIcons.map((icon, index) => {
          const position = iconPositions.desktop[index];
          return (
            <div
              key={`desktop-${icon.id}-${currentIconSet}-${index}`}
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

                {/* Icon container with bounce animation */}
                <div
                  className="relative w-12 h-12 lg:w-15 lg:h-15 bg-gray-900/50 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:border-purple-400/50 bounce-gentle-large"
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
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain filter drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Icons - Tablet (md to lg) - HIDDEN ON MOBILE */}
      <div className="absolute inset-0 hidden md:block lg:hidden pointer-events-none">
        {currentIcons.map((icon, index) => {
          const position = iconPositions.tablet[index];
          return (
            <div
              key={`tablet-${icon.id}-${currentIconSet}-${index}`}
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
                    width={32}
                    height={32}
                    className="w-6 h-6 lg:w-8 lg:h-8 object-contain filter drop-shadow-sm"
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

export default CustomFloatableIcons2;
