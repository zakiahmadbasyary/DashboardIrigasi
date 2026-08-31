'use client';

import React, { useState } from 'react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  href: string;
  code?: string;
  active?: boolean;
}

interface HeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  navItems?: NavItem[];
  currentApp?: string;
  showDashboardNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle = 'Portal Monitoring & Kontrol Irigasi Terpadu',
  actions,
  navItems,
  currentApp,
  showDashboardNav = true,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portalUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3006' : 'http://localhost:3006';
  const dash1Url = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DASHBOARD1_URL || 'http://localhost:3007' : 'http://localhost:3007';
  const dash2Url = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DASHBOARD2_URL || 'http://localhost:3008' : 'http://localhost:3008';
  const dash3Url = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DASHBOARD3_URL || 'http://localhost:3009' : 'http://localhost:3009';
  const dash4Url = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_DASHBOARD4_URL || 'http://localhost:3010' : 'http://localhost:3010';
  const adminUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3011' : 'http://localhost:3011';
  const loginUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:3012' : 'http://localhost:3012';

  const defaultNavItems: NavItem[] = [
    { label: 'Portal', href: portalUrl, code: 'portal' },
    { label: 'List Lokasi', href: dash1Url, code: 'dashboard-1' },
    { label: 'Evaluasi Engine', href: dash2Url, code: 'dashboard-2' },
    { label: 'List Engine', href: dash3Url, code: 'dashboard-3' },
    { label: 'Masalah Engine', href: dash4Url, code: 'dashboard-4' },
  ];

  const activeNavItems = navItems || (showDashboardNav ? defaultNavItems : []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Logo & Navbar Links */}
        <div className="flex items-center gap-6">
          <a href={portalUrl} className="focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1 transition-all">
            <Logo subtitle={title} />
          </a>

          {/* Desktop Navigation Bar for Dashboards */}
          {activeNavItems.length > 0 && (
            <nav className="hidden lg:flex items-center space-x-1">
              {activeNavItems.map((item, idx) => {
                const isActive = item.active !== undefined ? item.active : currentApp === item.code;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right: User Actions & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {actions ? (
            actions
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={adminUrl}
                className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all ${
                  currentApp === 'admin'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Admin Console
              </a>
              <a
                href={loginUrl}
                className="text-xs px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-all"
              >
                Masuk
              </a>
            </div>
          )}

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-2 shadow-lg">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
            Navigasi Dashboard
          </div>
          <div className="grid grid-cols-1 gap-1">
            {activeNavItems.map((item, idx) => {
              const isActive = item.active !== undefined ? item.active : currentApp === item.code;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <a
              href={adminUrl}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg"
            >
              Admin Console
            </a>
            <a
              href={loginUrl}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-white bg-emerald-600 rounded-lg"
            >
              Masuk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
