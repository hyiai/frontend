import React from 'react';

interface DarkPurpleGradientTopHueCardProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  className?: string;
}

export default function DarkPurpleGradientTopHueCard({
  children,
  height,
  width,
  className = ""
}: DarkPurpleGradientTopHueCardProps) {
  const containerStyle = {
    height: height ? (typeof height === 'number' ? `${height}px` : height) : '100%',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
  };

  return (
    <div 
      className={`relative rounded-[10px] overflow-hidden ${className}`}
      style={containerStyle}
    >
      {/* Base background: stacked gradients for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(116,86,224,0.18)_0%,rgba(29,27,45,0.4)_30%,rgba(10,12,20,1)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f1a] to-[#060812]" />
      
      {/* Depth and polish - inset top bevel and drop shadow */}
      <div className="top-depth absolute inset-0 shadow-[inset_0_1px_3px_rgba(255,255,255,0.12)]" />
      <div className="bottom-depth absolute inset-0 shadow-[0_8px_24px_rgba(0,0,0,0.45)]" />
      
      {/* Glossy highlight layer (soft purple top glow) */}
      <div className="absolute inset-0 rounded-[10px] bg-[radial-gradient(90%_50%_at_50%_0%,rgba(142,116,255,0.35),rgba(116,86,224,0.2)_40%,transparent_70%)] mix-blend-screen opacity-90 transition-opacity duration-200 pointer-events-none group-hover:opacity-100" />
      
      {/* Thin inner border glow to define edges */}
      <div className="absolute inset-0 rounded-[10px] shadow-[0_0_0_1px_rgba(140,120,255,0.12)_inset] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}