import React from 'react';
import { Logo } from './Logo';

interface SidebarItem {
  label: string;
  href: string;
  code: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface SidebarProps {
  currentPath?: string;
  activeCode?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeCode = 'overview' }) => {
  const portalUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000' : 'http://localhost:3000';

  const menuItems: SidebarItem[] = [
    {
      label: 'Overview & Sistem',
      href: '/admin',
      code: 'overview',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      label: 'List Lokasi',
      href: '/admin/dashboard-1',
      code: 'dashboard-1',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      label: 'Evaluasi Engine',
      href: '/admin/dashboard-2',
      code: 'dashboard-2',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 001.09-9.88l-.7-.19-.18-.71a5 5 0 00-9.8 1.49l.06.82-.7.42A4 4 0 003 15z" />
        </svg>
      ),
    },
    {
      label: 'List Engine',
      href: '/admin/dashboard-3',
      code: 'dashboard-3',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      label: 'Masalah Engine',
      href: '/admin/dashboard-4',
      code: 'dashboard-4',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-64 bg-white text-slate-700 flex flex-col min-h-screen shrink-0 border-r border-slate-200 shadow-xs">
      {/* Light Sidebar Header */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/60">
        <a href={portalUrl} className="block">
          <Logo subtitle="Admin Terpusat" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="p-4 flex-1 space-y-6">
        <div>
          <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Manajemen Sistem
          </h3>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = activeCode === item.code;
              return (
                <a
                  key={item.code}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span className={isActive ? 'text-emerald-600' : 'text-slate-400'}>{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div>
          <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Akses Pintar
          </h3>
          <nav className="space-y-1">
            <a
              href={portalUrl}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium transition-all"
            >
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Kembali ke Portal</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Light Sidebar Footer */}
      <div className="p-4 border-t border-slate-100 bg-slate-50/60 text-xs text-slate-500">
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-slate-700">Admin Console</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
            v1.0.0
          </span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-400">Monorepo Irigasi Dashboard</p>
      </div>
    </aside>
  );
};
