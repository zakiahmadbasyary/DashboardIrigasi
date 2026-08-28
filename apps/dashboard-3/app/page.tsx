import React from 'react';
import { PageContainer, Card, Badge, Button } from '@irigasi/ui';

export default function Dashboard3Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';

  return (
    <PageContainer>
      {/* Top Banner & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="info">DASH-03</Badge>
            <span className="text-xs text-slate-500">Port 3003</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard List Engine
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Direktori dan inventaris seluruh unit engine pompa irigasi, status keaktifan, dan lokasi penempatan.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={portalUrl}>
            <Button variant="outline" size="sm">
              ← Kembali ke Portal
            </Button>
          </a>
          <a href={`${adminUrl}/dashboard-3`}>
            <Button variant="secondary" size="sm">
              Kelola di Admin
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content Area - Placeholder */}
      <div className="mt-8 space-y-6">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3 shadow-subtle">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-800">Dashboard ini sedang dalam pengembangan</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Modul ini nantinya akan menyajikan panel kontrol telemetri pintu air, grafik ketinggian air AWLR real-time, serta trigger alarm peringatan debit kritis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
          <Card title="Telemetri AWLR Bendung Utama" subtitle="Placeholder Tinggi Muka Air">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Sensor Tinggi Air (cm)
            </div>
          </Card>
          <Card title="Status Bukaan Pintu Intake" subtitle="Placeholder Servo / Actuator">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Persentase Bukaan (%)
            </div>
          </Card>
          <Card title="Log Aktivitas & Alarm" subtitle="Placeholder Peringatan">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Riwayat Perubahan Pintu Air
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
