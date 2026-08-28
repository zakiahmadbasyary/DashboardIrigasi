'use client';

import React from 'react';
import { GlobalFilterState, PeriodeBulan, StatusLokasi, PrioritasLokasi } from '../types/lokasi';

interface GlobalFilterProps {
  filters: GlobalFilterState;
  onFilterChange: (newFilters: GlobalFilterState) => void;
  onReset: () => void;
  totalFilteredCount: number;
}

const BULAN_OPTIONS: { label: string; value: PeriodeBulan | 'Semua' }[] = [
  { label: 'Semua Periode', value: 'Semua' },
  { label: 'Januari 2026', value: 'Januari 2026' },
  { label: 'Februari 2026', value: 'Februari 2026' },
  { label: 'Maret 2026', value: 'Maret 2026' },
  { label: 'April 2026', value: 'April 2026' },
  { label: 'Mei 2026', value: 'Mei 2026' },
  { label: 'Juni 2026', value: 'Juni 2026' },
  { label: 'Juli 2026', value: 'Juli 2026' },
  { label: 'Agustus 2026', value: 'Agustus 2026' },
  { label: 'September 2026', value: 'September 2026' },
  { label: 'Oktober 2026', value: 'Oktober 2026' },
  { label: 'November 2026', value: 'November 2026' },
  { label: 'Desember 2026', value: 'Desember 2026' },
];

export const GlobalFilter: React.FC<GlobalFilterProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalFilteredCount,
}) => {
  const isFiltered =
    filters.bulan !== 'Semua' ||
    filters.status !== 'Semua' ||
    filters.prioritas !== 'Semua';

  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3.5 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Dashboard Explanation / Keterangan */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Dashboard List Lokasi
            </h1>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
              DASH-01
            </span>
            <span className="text-xs font-semibold text-slate-400">
              • {totalFilteredCount} Lokasi Dipantau
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
            Modul monitoring distribusi luas wilayah irigasi, evaluasi rata-rata kali siram, estimasi cost, serta peringatan siaga daerah irigasi.
          </p>
        </div>

        {/* Right Side: Filters (Frozen/Sticky Control Bar) */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-center shrink-0">
          {/* Bulan Filter Dropdown (Pilihan Per Bulan) */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="filter-bulan" className="text-[11px] font-bold text-slate-600">
              Bulan
            </label>
            <select
              id="filter-bulan"
              value={filters.bulan}
              onChange={(e) =>
                onFilterChange({ ...filters, bulan: e.target.value as PeriodeBulan | 'Semua' })
              }
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer min-w-[140px]"
            >
              {BULAN_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="filter-status" className="text-[11px] font-bold text-slate-600">
              Status
            </label>
            <select
              id="filter-status"
              value={filters.status}
              onChange={(e) =>
                onFilterChange({ ...filters, status: e.target.value as StatusLokasi | 'Semua' })
              }
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer min-w-[100px]"
            >
              <option value="Semua">Semua</option>
              <option value="NSFC">NSFC</option>
              <option value="NS">NS</option>
              <option value="NSSC">NSSC</option>
            </select>
          </div>

          {/* Prioritas Filter */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="filter-prioritas" className="text-[11px] font-bold text-slate-600">
              Prioritas
            </label>
            <select
              id="filter-prioritas"
              value={filters.prioritas}
              onChange={(e) =>
                onFilterChange({ ...filters, prioritas: e.target.value as PrioritasLokasi | 'Semua' })
              }
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer min-w-[100px]"
            >
              <option value="Semua">Semua</option>
              <option value="High">High</option>
              <option value="Med">Med</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex flex-col justify-end">
            <span className="text-[11px] font-bold opacity-0">Reset</span>
            <button
              onClick={onReset}
              disabled={!isFiltered}
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                isFiltered
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300 cursor-pointer shadow-2xs'
                  : 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed opacity-70'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
