import React from 'react';

interface DarkIndigoPurpleGradientCardProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  className?: string;
}

export default function DarkIndigoPurpleGradientCard({
  children,
  height,
  width,
  className = ""
}: DarkIndigoPurpleGradientCardProps) {
  const containerStyle = {
    height: height ? (typeof height === 'number' ? `${height}px` : height) : '100%',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
  };

  return (
    <div 
      className={`relative rounded-[10px] overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Base background: dark indigo to purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#1a1b2e] to-[#2d1b69]" />
      
      {/* Enhanced purple glow at bottom - more pronounced like indigo-card.png */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(147,51,234,0.6),rgba(88,28,135,0.4)_40%,rgba(59,7,100,0.2)_70%,transparent_90%)]" />
      
      {/* Additional bottom center glow for extra vibrancy */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_60%_at_50%_100%,rgba(168,85,247,0.4),transparent_70%)]" />
      
      {/* Top edge inset shadow - subtle light purple/white bevel */}
      <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(200,190,255,0.15)]" />
      
      {/* Subtle inner glow for depth */}
      <div className="absolute inset-0 rounded-[10px] shadow-[0_0_0_1px_rgba(88,28,135,0.2)_inset] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}
