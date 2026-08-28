'use client';

import React from 'react';
import { MetricType, MonthPeriod } from '../types/engine';
import { MONTH_LIST, getMetricUnit } from '../utils/engineUtils';

interface EngineFilterInfoCardProps {
  selectedMonth: MonthPeriod;
  onMonthChange: (month: MonthPeriod) => void;
  selectedMetric: MetricType;
  onMetricChange: (metric: MetricType) => void;
}

const METRIC_OPTIONS: { type: MetricType; label: string; unit: string }[] = [
  { type: 'Jam Kerja/Hari', label: 'Jam Kerja/Hari', unit: 'Jam/hari' },
  { type: 'Solar/Jam', label: 'Solar/Jam', unit: 'L/jam' },
  { type: 'Air/Jam', label: 'Air/Jam', unit: 'm³/jam' },
];

export const EngineFilterInfoCard: React.FC<EngineFilterInfoCardProps> = ({
  selectedMonth,
  onMonthChange,
  selectedMetric,
  onMetricChange,
}) => {
  return (
    <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3.5 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Brief Info Description */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Dashboard List Engine
            </h1>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
              DASH-03
            </span>
            <span className="text-xs font-semibold text-slate-400">
              • Wilayah AW01–AW08
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
            Monitoring performa engine berdasarkan wilayah, periode, dan parameter operasional (Jam Kerja, Solar, Air, & Cost).
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

          {/* Metric Filter */}
          <div className="flex flex-col gap-0.5">
            <label className="text-[11px] font-bold text-slate-600">
              Data yang Ditampilkan ({getMetricUnit(selectedMetric)})
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              {METRIC_OPTIONS.map((opt) => {
                const isActive = selectedMetric === opt.type;
                return (
                  <button
                    key={opt.type}
                    type="button"
                    onClick={() => onMetricChange(opt.type)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
