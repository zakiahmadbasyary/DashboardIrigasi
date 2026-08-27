import React from 'react';
import { Sidebar, Card, Badge, Button } from '@irigasi/ui';

export default function AdminDashboard3Page() {
  const dash3Url = process.env.NEXT_PUBLIC_DASHBOARD3_URL || 'http://localhost:3003';

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      <Sidebar activeCode="dashboard-3" />

      <main className="flex-1 p-6 md:p-8 bg-slate-50 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="info">DASH-03 Admin</Badge>
                <span className="text-xs text-slate-500">Master Data & Konfigurasi</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Pengelolaan Dashboard 3 - Telemetri & Pintu Air
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Modul administrasi pendaftaran pintu air bendung, sensor AWLR, dan skenario alarm.
              </p>
            </div>
            <div>
              <a href={dash3Url}>
                <Button variant="outline" size="sm">
                  Buka Dashboard 3 (Port 3003) →
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center space-y-3 shadow-subtle">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-800">Halaman Pengelolaan Dashboard 3 (Placeholder)</h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Halaman admin ini disiapkan untuk pendaftaran unit pintu air (intake/penguras), pengesetan batas elevasi siaga AWLR, serta kalibrasi actuator motor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-75">
            <Card title="Daftar Pintu Air & Actuator" subtitle="Tabel Master Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form CRUD Pintu Air Bendung
              </div>
            </Card>
            <Card title="Ambang Elevasi AWLR & Alert" subtitle="Form Threshold Placeholder">
              <div className="h-28 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
                Form Setting Siaga Banjir / Kekeringan
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
