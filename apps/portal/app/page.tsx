import React from 'react';
import { Card, Button, Badge, PageContainer } from '@irigasi/ui';
import { DashboardInfo } from '@irigasi/types';

export default function PortalPage() {
  const dash1Url = process.env.NEXT_PUBLIC_DASHBOARD1_URL || 'http://localhost:3001';
  const dash2Url = process.env.NEXT_PUBLIC_DASHBOARD2_URL || 'http://localhost:3002';
  const dash3Url = process.env.NEXT_PUBLIC_DASHBOARD3_URL || 'http://localhost:3003';
  const dash4Url = process.env.NEXT_PUBLIC_DASHBOARD4_URL || 'http://localhost:3004';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || 'http://localhost:3006';

  const dashboards: DashboardInfo[] = [
    {
      id: 'dash-1',
      name: 'List Lokasi',
      code: 'DASH-01',
      description: 'Monitoring distribusi lokasi irigasi, pemetaan wilayah kerja, serta alokasi titik pantau daerah irigasi.',
      url: dash1Url,
      badge: 'Master Lokasi',
      status: 'in_development',
      iconName: 'water',
    },
    {
      id: 'dash-2',
      name: 'Evaluasi Engine',
      code: 'DASH-02',
      description: 'Analisis performa engine, pemantauan efisiensi kerja mesin, serta evaluasi riwayat operasi.',
      url: dash2Url,
      badge: 'Performa Engine',
      status: 'in_development',
      iconName: 'cloud-sun',
    },
    {
      id: 'dash-3',
      name: 'List Engine',
      code: 'DASH-03',
      description: 'Direktori dan inventaris seluruh engine pompa irigasi, status aktif, serta lokasi penempatan.',
      url: dash3Url,
      badge: 'Direktori Engine',
      status: 'in_development',
      iconName: 'gate',
    },
    {
      id: 'dash-4',
      name: 'Masalah Engine',
      code: 'DASH-04',
      description: 'Pencatatan gangguan teknis, deteksi masalah operasional engine, alert kerusakan, dan log penanganan.',
      url: dash4Url,
      badge: 'Troubleshooting & Alert',
      status: 'in_development',
      iconName: 'zap',
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Sistem Terintegrasi v1.0
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Portal Monitoring & Kontrol <span className="text-emerald-600">Irigasi Terpadu</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Pilih salah satu dashboard di bawah untuk mengakses modul pemantauan alokasi air, telemetri saluran, sensor tanah, dan stasiun pompa secara terpusat.
        </p>
      </section>

      {/* Grid 4 Dashboard Cards */}
      <section className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Daftar Modul Dashboard</h2>
          <span className="text-xs text-slate-500 font-medium">4 Modul Tersedia</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dashboards.map((dash) => (
            <Card
              key={dash.id}
              title={dash.name}
              subtitle={`Kode: ${dash.code}`}
              hoverEffect
              badge={<Badge variant="info">{dash.badge}</Badge>}
              footer={
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs text-amber-600 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Dalam Pengembangan
                  </span>
                  <a href={dash.url}>
                    <Button variant="primary" size="sm">
                      Buka Dashboard →
                    </Button>
                  </a>
                </div>
              }
            >
              <p className="min-h-[48px]">{dash.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access Bar */}
      <section className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
        <div>
          <h3 className="text-base font-bold text-slate-800">Akses Pengelolaan & Autentikasi</h3>
          <p className="text-xs text-slate-500 mt-0.5">Kelola hak akses pengguna atau masuk ke dalam konsol admin terpusat.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={loginUrl}>
            <Button variant="outline" size="sm">
              Halaman Login
            </Button>
          </a>
          <a href={adminUrl}>
            <Button variant="secondary" size="sm">
              Konsol Admin
            </Button>
          </a>
        </div>
      </section>
    </PageContainer>
  );
}
