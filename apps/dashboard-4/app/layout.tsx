import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Masalah Engine - Sistem Irigasi Terpadu',
  description: 'Monitoring gangguan teknis dan pencatatan masalah operasional engine.',
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
        <Header title="Masalah Engine" currentApp="dashboard-4" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Masalah Engine</p>
        </footer>
      </body>
    </html>
  );
}
