import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function SamwooLogo({ className = "h-8", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Shadow/Base - Bulbous on left, tapering to right (teardrop) */}
        <path
          d="M12 85C12 75 30 75 60 80C80 83 95 84 95 85C95 86 80 87 60 90C30 95 12 95 12 85Z"
          fill="#C0C0C0"
        />
        
        {/* Left Leaf - Tilted, organic rounded teardrop */}
        <path
          d="M40 72C35 74 10 65 6 48C4 32 25 30 40 72Z"
          fill="#32936F"
        />
        
        {/* Right Leaf - Tilted, organic rounded teardrop */}
        <path
          d="M60 72C65 74 90 65 94 48C96 32 75 30 60 72Z"
          fill="#32936F"
        />
        
        {/* Middle Leaf - Tall, bulbous top, very tapered bottom */}
        <path
          d="M50 70C48 70 34 55 34 30C34 10 42 2 50 2C58 2 66 10 66 30C66 55 52 70 50 70Z"
          fill="#00FF00"
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tighter text-white">SAMWOO</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-electric-blue">SYSTEM</span>
        </div>
      )}
    </div>
  );
}
