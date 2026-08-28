import React from 'react';
import './globals.css';
import { Header } from '@irigasi/ui';

export const metadata = {
  title: 'Portal Utama - Sistem Irigasi Terpadu',
  description: 'Pintu masuk utama untuk memilih dan mengakses dashboard monitoring irigasi.',
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
        <Header currentApp="portal" />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4">
            <p>© 2026 Sistem Irigasi Terpadu. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
