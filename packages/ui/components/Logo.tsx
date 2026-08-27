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
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real Image Logo without border/background box */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <img
          src="/logo.png"
          alt="Logo Irigasi"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-slate-900 leading-tight ${textSizes[size]}`}>
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
