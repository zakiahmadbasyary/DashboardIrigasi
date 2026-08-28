'use client';

import React from 'react';
import { MonthPeriod, StatusEngine } from '../types/masalahEngine';
import { MONTH_LIST } from '../utils/masalahEngineUtils';

interface MasalahEngineFilterCardProps {
  selectedMonth: MonthPeriod;
  onMonthChange: (month: MonthPeriod) => void;
  selectedStatus: StatusEngine | 'Semua';
  onStatusChange: (status: StatusEngine | 'Semua') => void;
  totalFilteredCount: number;
}

export const MasalahEngineFilterCard: React.FC<MasalahEngineFilterCardProps> = ({
  selectedMonth,
  onMonthChange,
  selectedStatus,
  onStatusChange,
  totalFilteredCount,
}) => {
  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3.5 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Brief Info Description */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Dashboard Masalah Engine
            </h1>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
              DASH-04
            </span>
            <span className="text-xs font-semibold text-slate-400">
              • {totalFilteredCount} Engine Dipantau
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
            Monitoring tingkat availability dan utilities engine pada setiap wilayah AW01–AW08 dan lokasi terdaftar.
          </p>
        </div>

        {/* Right Side: Filters (Frozen/Sticky Control Bar) */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-center shrink-0">
          {/* Month Filter */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="select-bulan" className="text-[11px] font-bold text-slate-600">
              Bulan
            </label>
            <select
              suppressHydrationWarning
              id="select-bulan"
              value={selectedMonth}
              onChange={(e) => onMonthChange(e.target.value as MonthPeriod)}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer min-w-[140px]"
            >
              {MONTH_LIST.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="select-status" className="text-[11px] font-bold text-slate-600">
              Status Engine
            </label>
            <select
              suppressHydrationWarning
              id="select-status"
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value as StatusEngine | 'Semua')}
              className="bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer min-w-[110px]"
            >
              <option value="Semua">Semua Status</option>
              <option value="NS">NS</option>
              <option value="NSFC">NSFC</option>
              <option value="NSSC">NSSC</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
