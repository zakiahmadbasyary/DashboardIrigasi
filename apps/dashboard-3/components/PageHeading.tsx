import React from 'react';
import { Badge, Button } from '@irigasi/ui';

export const PageHeading: React.FC = () => {
  const portalUrl = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3000';
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3005';

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="success">DASH-03</Badge>
          <span className="text-xs font-semibold text-slate-400">Port 3003</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            List Engine
          </span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          List Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Monitoring performa engine berdasarkan wilayah, periode, dan parameter operasional.
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
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
  );
};
