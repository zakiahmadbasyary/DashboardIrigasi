import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Dashboard 3 - Telemetri Saluran & Pintu Air',
  description: 'Otomasi dan kontrol bukaan pintu air bendung dan saluran utama.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header title="Dashboard 3" currentApp="dashboard-3" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Dashboard 3 (Telemetri & Pintu Air)</p>
        </footer>
      </body>
    </html>
  );
}
