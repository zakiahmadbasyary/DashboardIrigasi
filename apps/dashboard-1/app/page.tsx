import React from 'react';
import { PageContainer, Card, Badge, Button } from '@irigasi/ui';

export default function Dashboard1Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';

  return (
    <PageContainer>
      {/* Top Banner & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="info">DASH-01</Badge>
            <span className="text-xs text-slate-500">Port 3001</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard Alokasi & Distribusi Air Irigasi
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Pemantauan neraca pasokan air, jadwal penggiliran, dan efisiensi penyaluran ke petak tersier.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={portalUrl}>
            <Button variant="outline" size="sm">
              ← Kembali ke Portal
            </Button>
          </a>
          <a href={`${adminUrl}/dashboard-1`}>
            <Button variant="secondary" size="sm">
              Kelola di Admin
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content Area - Placeholder */}
      <div className="mt-8 space-y-6">
        {/* Development Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3 shadow-subtle">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-800">Dashboard ini sedang dalam pengembangan</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Modul ini nantinya akan menampilkan grafik ketersediaan debit air, tabel alokasi per blok irigasi, dan status debit saluran primer & sekunder.
          </p>
        </div>

        {/* Future Expansion Layout Grid Mock */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
          <Card title="KPI Debit Irigasi" subtitle="Placeholder Metrik 1">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Area Grafik / Metrik KPI
            </div>
          </Card>
          <Card title="Distribusi Saluran Sekunder" subtitle="Placeholder Metrik 2">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Area Tabel Ringkasan
            </div>
          </Card>
          <Card title="Peta Skematik Jaringan" subtitle="Placeholder Peta GIS">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Area Peta GIS Irigasi
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
