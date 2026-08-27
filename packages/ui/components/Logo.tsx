import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  subtitle?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  subtitle,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-600/20 ${iconSizes[size]}`}>
        {/* SVG Irrigation Sprout + Water Drop Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3/5 h-3/5 text-white"
        >
          {/* Water drop & plant sprout symbol */}
          <path d="M12 2.25c-4.5 5.5-6.75 8.25-6.75 11.25a6.75 6.75 0 0 0 13.5 0c0-3-2.25-5.75-6.75-11.25z" fill="rgba(255,255,255,0.15)" />
          <path d="M12 18v-5" />
          <path d="M12 13c-2.5 0-4-1.5-4-3.5" />
          <path d="M12 15c2.5 0 4-1.5 4-3.5" />
        </svg>
        {/* Accent dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-sky-400 rounded-full ring-2 ring-white" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-slate-800 leading-tight ${textSizes[size]}`}>
            Sistem<span className="text-emerald-600">Irigasi</span>
          </span>
          {subtitle && (
            <span className="text-xs text-slate-500 font-medium tracking-wide">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
