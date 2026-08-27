import React from 'react';
import { Sidebar, Card, Badge, Button } from '@irigasi/ui';

export default function AdminDashboard2Page() {
  const dash2Url = process.env.NEXT_PUBLIC_DASHBOARD2_URL || 'http://localhost:3002';

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      <Sidebar activeCode="dashboard-2" />

      <main className="flex-1 p-6 md:p-8 bg-slate-50 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="info">DASH-02 Admin</Badge>
                <span className="text-xs text-slate-500">Master Data & Konfigurasi</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Pengelolaan Dashboard 2 - Kelembapan Tanah & Iklim
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Modul administrasi pendaftaran sensor tanah dan stasiun cuaca agro-klimatologi.
              </p>
            </div>
            <div>
              <a href={dash2Url}>
                <Button variant="outline" size="sm">
                  Buka Dashboard 2 (Port 3002) →
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3 shadow-subtle">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 001.09-9.88l-.7-.19-.18-.71a5 5 0 00-9.8 1.49l.06.82-.7.42A4 4 0 003 15z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-800">Halaman Pengelolaan Dashboard 2 (Placeholder)</h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Halaman admin ini disiapkan untuk pendaftaran titik lokasi sensor kelembapan tanah, kalibrasi sensor AWS, dan batas ambang alert kelembapan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
            <Card title="Pendaftaran Sensor Tanah" subtitle="Tabel Sensor Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form CRUD Node Sensor Soil Moisture
              </div>
            </Card>
            <Card title="Konfigurasi Stasiun AWS" subtitle="Form AWS Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form Pengaturan Stasiun Cuaca
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
