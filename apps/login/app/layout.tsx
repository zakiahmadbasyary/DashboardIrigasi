import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Masuk - Sistem Irigasi Terpadu',
  description: 'Halaman autentikasi terpusat sistem monitoring irigasi.',
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
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center">{children}</div>
        <footer className="py-4 text-center text-xs text-slate-400">
          <p>© 2026 Sistem Irigasi Terpadu. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
