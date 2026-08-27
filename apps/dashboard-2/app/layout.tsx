import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Dashboard 2 - Kelembapan Tanah & Iklim',
  description: 'Monitoring kondisi kelembapan lahan dan cuaca otomatis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Header title="Dashboard 2" currentApp="dashboard-2" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Dashboard 2 (Kelembapan & Iklim)</p>
        </footer>
      </body>
    </html>
  );
}
