'use client';

import React from 'react';
import { MonthPeriod, WilayahCode } from '../types/engine';
import { DUMMY_ENGINES } from '../data/dummyEngineData';
import {
  getDaysArray,
  calculateAverage,
  formatCurrency,
} from '../utils/engineUtils';

interface EngineCostTableProps {
  selectedMonth: MonthPeriod;
  selectedRegion: WilayahCode;
  selectedEngine: string;
  onBackToEngines: () => void;
}

export const EngineCostTable: React.FC<EngineCostTableProps> = ({
  selectedMonth,
  selectedRegion,
  selectedEngine,
  onBackToEngines,
}) => {
  const daysArray = getDaysArray(selectedMonth);

  // Find target engine
  const targetEngine = DUMMY_ENGINES.find(
    (e) => e.code === selectedEngine && e.region === selectedRegion
  );

  if (!targetEngine) return null;

  // Extract daily cost values
  const dailyCosts: number[] = daysArray.map((d) => {
    const record = targetEngine.dailyData[d.dateKey];
    return record ? record.cost : 0;
  });

  const avgCost = calculateAverage(dailyCosts);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden mb-6 animate-fadeIn">
      {/* Table Header with Back Navigation */}
      <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/30">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Cost Engine — <span className="text-amber-800 font-black">{selectedEngine}</span>
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
              Level 3 — Cost Detail
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Detail estimasi biaya operasional engine {selectedEngine} ({selectedRegion}) — {selectedMonth}
          </p>
        </div>

        <button
          onClick={onBackToEngines}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300 shadow-2xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>← Kembali ke Daftar Engine</span>
        </button>
      </div>

      {/* Horizontal Scrollable Table */}
      <div className="overflow-x-auto relative">
        <table className="w-full text-left border-collapse min-w-[900px] text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
            <tr>
              {/* Sticky First Column: Engine Code */}
              <th className="sticky left-0 z-30 bg-slate-50 px-4 py-3 font-bold text-slate-900 border-r border-slate-200 shadow-2xs min-w-[140px]">
                Engine
              </th>
              {/* Rata-rata Cost Column */}
              <th className="px-4 py-3 font-bold text-amber-900 bg-amber-100/50 border-r border-slate-200 text-center min-w-[140px]">
                Rata-rata Cost
              </th>
              {/* Daily Date Columns */}
              {daysArray.map((d) => (
                <th key={d.dateKey} className="px-2.5 py-3 font-semibold text-slate-600 text-center min-w-[90px]">
                  {d.dayLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="bg-amber-50/20 font-medium text-slate-800">
              {/* Sticky First Column */}
              <td className="sticky left-0 z-10 px-4 py-3.5 border-r border-slate-200 bg-white font-extrabold text-slate-900 border-l-4 border-l-amber-500">
                <div>
                  <span className="font-extrabold text-slate-900">{targetEngine.code}</span>
                  <span className="text-[10px] text-slate-400 block font-normal">{targetEngine.name}</span>
                </div>
              </td>

              {/* Rata-rata Cost */}
              <td className="px-4 py-3.5 text-center font-bold text-amber-800 bg-amber-100/30 border-r border-slate-200 whitespace-nowrap">
                {formatCurrency(avgCost)}
              </td>

              {/* Daily Costs */}
              {dailyCosts.map((costVal, idx) => (
                <td key={daysArray[idx].dateKey} className="px-2.5 py-3.5 text-center font-semibold text-slate-800 whitespace-nowrap">
                  {costVal.toLocaleString('id-ID')}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Helper Footer */}
      <div className="p-3 bg-amber-50/40 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span>Seluruh nilai cost ditampilkan dalam mata uang Rupiah (Rp).</span>
        <span className="font-bold text-amber-800">Total Hari: {daysArray.length} Hari</span>
      </div>
    </div>
  );
};
