import React from 'react';

interface LogoIconProps {
     className?: string;
     size?: number;
}

const LogoIcon = ({ className, size = 32 }: LogoIconProps) => {
     return (
          <svg
               width={size}
               height={size}
               viewBox="0 0 32 32"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className={className}
          >
               <defs>
                    <linearGradient id="gradientA" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                         <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
                    </linearGradient>
                    <linearGradient id="gradientF" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" style={{ stopColor: '#8b5cf6' }} />
                         <stop offset="100%" style={{ stopColor: '#ec4899' }} />
                    </linearGradient>
                    <linearGradient id="gradientX" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" style={{ stopColor: '#ec4899' }} />
                         <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
                    </linearGradient>
               </defs>

               {/* A letter */}
               <text
                    x="4"
                    y="22"
                    fontSize="20"
                    fontWeight="bold"
                    fill="url(#gradientA)"
               >
                    A
               </text>

               {/* F letter */}
               <text
                    x="12"
                    y="22"
                    fontSize="20"
                    fontWeight="bold"
                    fill="url(#gradientF)"
               >
                    F
               </text>

               {/* X letter */}
               <text
                    x="20"
                    y="22"
                    fontSize="20"
                    fontWeight="bold"
                    fill="url(#gradientX)"
               >
                    X
               </text>

               {/* Decorative dots */}
               <circle cx="28" cy="4" r="2" fill="url(#gradientA)" opacity="0.5" />
               <circle cx="4" cy="28" r="2" fill="url(#gradientF)" opacity="0.5" />
          </svg>
     );
};

export default LogoIcon; 