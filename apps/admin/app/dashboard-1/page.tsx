import React from 'react';
import { Sidebar, Card, Badge, Button } from '@irigasi/ui';

export default function AdminDashboard1Page() {
  const dash1Url = process.env.NEXT_PUBLIC_DASHBOARD1_URL || 'http://localhost:3001';

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      <Sidebar activeCode="dashboard-1" />

      <main className="flex-1 p-6 md:p-8 bg-slate-50 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="info">DASH-01 Admin</Badge>
                <span className="text-xs text-slate-500">Master Data & Konfigurasi</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Pengelolaan List Lokasi
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Modul administrasi untuk mengelola master data lokasi irigasi dan titik pemantauan.
              </p>
            </div>
            <div>
              <a href={dash1Url}>
                <Button variant="outline" size="sm">
                  Buka List Lokasi (Port 3001) →
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3 shadow-subtle">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-800">Halaman Pengelolaan Dashboard 1 (Placeholder)</h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Halaman admin ini disiapkan untuk fitur CRUD master data alokasi air, pengaturan jadwal irigasi, serta manajemen batas debit saluran ketika database ditambahkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
            <Card title="Master Data Blok Irigasi" subtitle="Tabel Master Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form CRUD Blok / Petak Irigasi
              </div>
            </Card>
            <Card title="Konfigurasi Target Debit" subtitle="Form Pengaturan Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form Pengaturan Ambang Debit
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
