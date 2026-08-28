import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Dashboard 4 - Stasiun Pompa & Energi',
  description: 'Monitoring stasiun pompa irigasi dan efisiensi konsumsi energi.',
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
        <Header title="Dashboard 4" currentApp="dashboard-4" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Dashboard 4 (Stasiun Pompa & Energi)</p>
        </footer>
      </body>
    </html>
  );
}
