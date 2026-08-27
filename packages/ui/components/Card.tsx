import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  badge,
  icon,
  children,
  footer,
  className = '',
  hoverEffect = false,
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-subtle p-6 transition-all duration-200 ${
        hoverEffect ? 'hover:shadow-card hover:border-emerald-300 hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {(title || subtitle || icon || badge) && (
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            {icon && (
              <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                {icon}
              </div>
            )}
            <div>
              {title && <h3 className="text-lg font-semibold text-slate-800 tracking-tight">{title}</h3>}
              {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {badge && <div className="shrink-0">{badge}</div>}
        </div>
      )}

      {children && <div className="text-slate-600 text-sm leading-relaxed">{children}</div>}

      {footer && <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">{footer}</div>}
    </div>
  );
};
