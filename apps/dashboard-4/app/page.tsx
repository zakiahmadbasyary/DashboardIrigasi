import React from 'react';
import { PageContainer, Card, Badge, Button } from '@irigasi/ui';

export default function Dashboard4Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';

  return (
    <PageContainer>
      {/* Top Banner & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="info">DASH-04</Badge>
            <span className="text-xs text-slate-500">Port 3004</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard Masalah Engine
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Pencatatan gangguan teknis, deteksi masalah operasional engine, alert kerusakan, dan log penanganan.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={portalUrl}>
            <Button variant="outline" size="sm">
              ← Kembali ke Portal
            </Button>
          </a>
          <a href={`${adminUrl}/dashboard-4`}>
            <Button variant="secondary" size="sm">
              Kelola di Admin
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content Area - Placeholder */}
      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 text-center space-y-3 shadow-subtle">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-800">Dashboard ini sedang dalam pengembangan</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Modul ini nantinya akan menyajikan status aktif/non-aktif stasiun pompa, grafik konsumsi daya energi listrik, serta prediksi kebutuhan bahan bakar genset cadangan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
          <Card title="Status Pompa Utama" subtitle="Placeholder Unit 1 - 4">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Pompa Aktif: 2 / 4 Unit
            </div>
          </Card>
          <Card title="Konsumsi Energi (kWh)" subtitle="Placeholder Daya Listrik">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Grafik Penggunaan Energi
            </div>
          </Card>
          <Card title="Jadwal Pemeliharaan" subtitle="Placeholder Maintenance">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Servis Berkala & Jam Kerja
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
