import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  navItems?: { label: string; href: string; active?: boolean }[];
  currentApp?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = 'Portal Monitoring & Kontrol Irigasi Terpadu',
  actions,
  navItems,
  currentApp,
}) => {
  const portalUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000' : 'http://localhost:3000';
  const loginUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:3006' : 'http://localhost:3006';
  const adminUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005' : 'http://localhost:3005';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-6">
          <a href={portalUrl} className="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1 transition-all">
            <Logo subtitle={title} />
          </a>

          {/* Navigation Links */}
          {navItems && navItems.length > 0 && (
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {actions ? (
            actions
          ) : (
            <div className="flex items-center gap-2">
              <a
                href={adminUrl}
                className={`text-sm px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  currentApp === 'admin'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Admin
              </a>
              <a
                href={loginUrl}
                className="text-sm px-4 py-1.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all"
              >
                Masuk
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
