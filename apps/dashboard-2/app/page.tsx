import React from 'react';
import { PageContainer, Card, Badge, Button } from '@irigasi/ui';

export default function Dashboard2Page() {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';

  return (
    <PageContainer>
      {/* Top Banner & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="info">DASH-02</Badge>
            <span className="text-xs text-slate-500">Port 3002</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard Kelembapan Tanah & Agro-Klimatologi
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Telemetri sensor kelembapan tanah lahan pertanian, perkiraan curah hujan, dan temperatur udara.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a href={portalUrl}>
            <Button variant="outline" size="sm">
              ← Kembali ke Portal
            </Button>
          </a>
          <a href={`${adminUrl}/dashboard-2`}>
            <Button variant="secondary" size="sm">
              Kelola di Admin
            </Button>
          </a>
        </div>
      </div>

      {/* Main Content Area - Placeholder */}
      <div className="mt-8 space-y-6">
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-8 text-center space-y-3 shadow-subtle">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 001.09-9.88l-.7-.19-.18-.71a5 5 0 00-9.8 1.49l.06.82-.7.42A4 4 0 003 15z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-800">Dashboard ini sedang dalam pengembangan</h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Modul ini nantinya akan menyajikan data real-time sensor kelembapan tanah (Soil Moisture), grafik AWS (Automatic Weather Station), serta evapotranspirasi tanaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
          <Card title="Sensor Kelembapan Tanah" subtitle="Placeholder Kedalaman 30cm">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Persentase Kelembapan (%)
            </div>
          </Card>
          <Card title="Stasiun Iklim Otomatis" subtitle="Placeholder AWS">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Curah Hujan & Suhu
            </div>
          </Card>
          <Card title="Indeks Kekeringan Lahan" subtitle="Placeholder Anomali">
            <div className="h-24 bg-slate-100 rounded-lg flex items-center justify-center text-xs text-slate-400 border border-dashed border-slate-300">
              Status Risiko Kekeringan
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
