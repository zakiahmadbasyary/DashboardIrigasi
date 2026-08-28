import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Admin Console Terpusat - Sistem Irigasi',
  description: 'Halaman pengelolaan terpusat untuk seluruh dashboard irigasi.',
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
      <body className="min-h-screen flex flex-col bg-slate-100 text-slate-900 antialiased">
        <Header title="Konsol Admin Terpusat" currentApp="admin" />
        <div className="flex-1 flex overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
