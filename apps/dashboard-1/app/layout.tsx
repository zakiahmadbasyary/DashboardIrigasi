import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Dashboard 1 - Alokasi & Distribusi Air Irigasi',
  description: 'Monitoring alokasi dan neraca air irigasi terpadu.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header title="Dashboard 1" currentApp="dashboard-1" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Dashboard 1 (Alokasi Air)</p>
        </footer>
      </body>
    </html>
  );
}
