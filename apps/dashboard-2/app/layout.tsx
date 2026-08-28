import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Evaluasi Engine - Sistem Irigasi Terpadu',
  description: 'Monitoring dan evaluasi performa serta efisiensi engine irigasi.',
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
        <Header title="Evaluasi Engine" currentApp="dashboard-2" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          <p>© 2026 Sistem Irigasi Terpadu - Evaluasi Engine</p>
        </footer>
      </body>
    </html>
  );
}
