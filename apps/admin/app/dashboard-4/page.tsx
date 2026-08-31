import React from 'react';
import { Sidebar, Card, Badge, Button } from '@irigasi/ui';

export default function AdminDashboard4Page() {
  const dash4Url = process.env.NEXT_PUBLIC_DASHBOARD4_URL || 'http://localhost:3010';

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      <Sidebar activeCode="dashboard-4" />

      <main className="flex-1 p-6 md:p-8 bg-slate-50 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="info">DASH-04 Admin</Badge>
                <span className="text-xs text-slate-500">Master Data & Konfigurasi</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Pengelolaan Masalah Engine
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Modul administrasi pencatatan masalah teknis engine dan histori perbaikan.
              </p>
            </div>
            <div>
              <a href={dash4Url}>
                <Button variant="outline" size="sm">
                  Buka Masalah Engine (Port 3010) →
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3 shadow-subtle">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-800">Halaman Pengelolaan Dashboard 4 (Placeholder)</h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Halaman admin ini disiapkan untuk pencatatan inventaris stasiun pompa, spesifikasi daya kilowatt (kW), jadwal perawatan preventif, serta tarif energi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
            <Card title="Inventaris Stasiun Pompa" subtitle="Tabel Master Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form CRUD Unit Pompa & Spesifikasi
              </div>
            </Card>
            <Card title="Manajemen Tarif & BBM" subtitle="Form Costing Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form Setting Tarif Listrik / BBM Genset
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
