'use client';

import React, { useState } from 'react';
import { Logo, Input, Button } from '@irigasi/ui';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3006';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3011';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-8">
      {/* Container Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-floating p-8 space-y-6">
        {/* Header Logo */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo size="lg" subtitle="Autentikasi Terpusat" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Selamat Datang</h1>
          <p className="text-sm text-slate-500">
            Masukkan kredensial Anda untuk mengakses sistem dashboard.
          </p>
        </div>

        {/* Dummy Alert Notification */}
        {submitted && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg p-3 space-y-2">
            <p className="font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Simulasi Login Berhasil (Frontend Placeholder)
            </p>
            <p className="text-emerald-700">
              Autentikasi sungguhan belum dihubungkan. Anda dapat beralih ke:
            </p>
            <div className="flex gap-2 pt-1">
              <a
                href={portalUrl}
                className="px-2.5 py-1 bg-emerald-600 text-white rounded font-medium text-[11px] hover:bg-emerald-700"
              >
                Ke Portal Utama →
              </a>
              <a
                href={adminUrl}
                className="px-2.5 py-1 bg-slate-800 text-white rounded font-medium text-[11px] hover:bg-slate-900"
              >
                Ke Admin Console →
              </a>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email / Username"
            type="text"
            placeholder="admin@irigasi.go.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            }
          />

          <Input
            label="Kata Sandi"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
              <span>Ingat Sesi Saya</span>
            </label>
            <a href="#" className="text-emerald-600 font-medium hover:underline">
              Lupa kata sandi?
            </a>
          </div>

          <Button type="submit" variant="primary" fullWidth size="lg" className="mt-2">
            Masuk ke Sistem
          </Button>
        </form>

        {/* Back Link */}
        <div className="text-center pt-2 border-t border-slate-100">
          <a href={portalUrl} className="text-xs text-slate-500 hover:text-emerald-600 font-medium transition-colors">
            ← Kembali ke Portal Utama
          </a>
        </div>
      </div>
    </div>
  );
}
