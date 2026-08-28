import React from 'react';
import { Sidebar, Card, Badge, Button } from '@irigasi/ui';

export default function AdminOverviewPage() {
  const dash1Url = process.env.NEXT_PUBLIC_DASHBOARD1_URL || 'http://localhost:3001';
  const dash2Url = process.env.NEXT_PUBLIC_DASHBOARD2_URL || 'http://localhost:3002';
  const dash3Url = process.env.NEXT_PUBLIC_DASHBOARD3_URL || 'http://localhost:3003';
  const dash4Url = process.env.NEXT_PUBLIC_DASHBOARD4_URL || 'http://localhost:3004';

  return (
    <div className="flex w-full min-h-[calc(100vh-4rem)]">
      <Sidebar activeCode="overview" />

      <main className="flex-1 p-6 md:p-8 bg-slate-50 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Overview Konsol Admin</h1>
              <p className="text-sm text-slate-500 mt-0.5">
                Pengelolaan terpusat untuk 4 modul dashboard irigasi, master data, dan preferensi sistem.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="success">Sistem Online</Badge>
              <span className="text-xs text-slate-400">Port 3005</span>
            </div>
          </div>

          {/* Quick Metrics Placeholder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card title="Total Dashboard" subtitle="Modul Terdaftar">
              <div className="text-3xl font-extrabold text-emerald-600 mt-2">4 Modul</div>
              <p className="text-xs text-slate-400 mt-1">Ready for Database Integration</p>
            </Card>
            <Card title="Hak Akses User" subtitle="Role Management">
              <div className="text-3xl font-extrabold text-slate-700 mt-2">3 Role</div>
              <p className="text-xs text-slate-400 mt-1">Admin, Operator, Viewer</p>
            </Card>
            <Card title="Master Data" subtitle="Struktur Terpusat">
              <div className="text-3xl font-extrabold text-emerald-600 mt-2">1 DB (Planned)</div>
              <p className="text-xs text-slate-400 mt-1">Shared Master Schema</p>
            </Card>
            <Card title="Status Koneksi" subtitle="Gateway Service">
              <div className="text-3xl font-extrabold text-emerald-600 mt-2">Aktif</div>
              <p className="text-xs text-slate-400 mt-1">Monorepo Local Workspace</p>
            </Card>
          </div>

          {/* Management Cards per Dashboard */}
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-slate-800">Modul Pengelolaan Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                title="Pengelolaan Dashboard 1"
                subtitle="Alokasi & Distribusi Air Irigasi"
                badge={<Badge variant="info">DASH-01</Badge>}
                footer={
                  <div className="flex items-center justify-between w-full">
                    <a href={dash1Url} className="text-xs text-emerald-600 font-medium hover:underline">
                      Buka App (Port 3001) →
                    </a>
                    <a href="/admin/dashboard-1">
                      <Button variant="secondary" size="sm">
                        Kelola Modul 1
                      </Button>
                    </a>
                  </div>
                }
              >
                <p className="text-xs text-slate-500">
                  Tempat konfigurasi master data debit irigasi, pembagian blok tersier, dan jadwal penggiliran air.
                </p>
              </Card>

              <Card
                title="Pengelolaan Dashboard 2"
                subtitle="Kelembapan Tanah & Iklim"
                badge={<Badge variant="info">DASH-02</Badge>}
                footer={
                  <div className="flex items-center justify-between w-full">
                    <a href={dash2Url} className="text-xs text-emerald-600 font-medium hover:underline">
                      Buka App (Port 3002) →
                    </a>
                    <a href="/admin/dashboard-2">
                      <Button variant="secondary" size="sm">
                        Kelola Modul 2
                      </Button>
                    </a>
                  </div>
                }
              >
                <p className="text-xs text-slate-500">
                  Pengaturan titik sensor tanah (soil moisture), integrasi stasiun cuaca AWS, dan batas ambang kekeringan.
                </p>
              </Card>

              <Card
                title="Pengelolaan Dashboard 3"
                subtitle="Telemetri & Pintu Air"
                badge={<Badge variant="info">DASH-03</Badge>}
                footer={
                  <div className="flex items-center justify-between w-full">
                    <a href={dash3Url} className="text-xs text-emerald-600 font-medium hover:underline">
                      Buka App (Port 3003) →
                    </a>
                    <a href="/admin/dashboard-3">
                      <Button variant="secondary" size="sm">
                        Kelola Modul 3
                      </Button>
                    </a>
                  </div>
                }
              >
                <p className="text-xs text-slate-500">
                  Kalibrasi tinggi muka air AWLR bendung, pendaftaran actuator pintu air, dan aturan batas siaga banjir.
                </p>
              </Card>

              <Card
                title="Pengelolaan Dashboard 4"
                subtitle="Stasiun Pompa & Energi"
                badge={<Badge variant="info">DASH-04</Badge>}
                footer={
                  <div className="flex items-center justify-between w-full">
                    <a href={dash4Url} className="text-xs text-emerald-600 font-medium hover:underline">
                      Buka App (Port 3004) →
                    </a>
                    <a href="/admin/dashboard-4">
                      <Button variant="secondary" size="sm">
                        Kelola Modul 4
                      </Button>
                    </a>
                  </div>
                }
              >
                <p className="text-xs text-slate-500">
                  Inventarisasi unit pompa air, jadwal servis pemeliharaan, dan pencatatan tarif listrik/bahan bakar.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
