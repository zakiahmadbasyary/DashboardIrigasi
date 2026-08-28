'use client';

import React from 'react';
import { MetricType, MonthPeriod, WilayahCode } from '../types/engine';
import { DUMMY_ENGINES } from '../data/dummyEngineData';
import {
  getDaysArray,
  getMetricUnit,
  getMetricValue,
  calculateAverage,
  formatNumber,
} from '../utils/engineUtils';

interface EnginePerformanceTableProps {
  selectedMonth: MonthPeriod;
  selectedMetric: MetricType;
  selectedRegion: WilayahCode;
  selectedEngine: string | null;
  onSelectEngine: (engineCode: string) => void;
  onBackToRegions: () => void;
}

export const EnginePerformanceTable: React.FC<EnginePerformanceTableProps> = ({
  selectedMonth,
  selectedMetric,
  selectedRegion,
  selectedEngine,
  onSelectEngine,
  onBackToRegions,
}) => {
  const daysArray = getDaysArray(selectedMonth);
  const metricUnit = getMetricUnit(selectedMetric);

  // Filter engines belonging ONLY to selected region
  const regionEngines = DUMMY_ENGINES.filter((e) => e.region === selectedRegion);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden mb-6 animate-fadeIn">
      {/* Table Header with Back Navigation */}
      <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Performa Engine — <span className="text-emerald-700 font-black">{selectedRegion}</span>
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              Level 2
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Data performa engine pada wilayah {selectedRegion}. (Data: {selectedMetric} — {selectedMonth})
          </p>
        </div>

        <button
          onClick={onBackToRegions}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300 shadow-2xs transition-all self-start sm:self-auto cursor-pointer"
        >
          <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>← Kembali ke Semua Wilayah</span>
        </button>
      </div>

      {/* Horizontal Scrollable Table */}
      <div className="overflow-x-auto relative max-h-[480px] overflow-y-auto">
        <table className="w-full text-left border-collapse min-w-[900px] text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-20">
            <tr>
              {/* Sticky First Column: Engine Code */}
              <th className="sticky left-0 z-30 bg-slate-50 px-4 py-3 font-bold text-slate-900 border-r border-slate-200 shadow-2xs min-w-[140px]">
                Engine
              </th>
              {/* Rata-rata Column */}
              <th className="px-4 py-3 font-bold text-emerald-800 bg-emerald-50/50 border-r border-slate-200 text-center min-w-[100px]">
                Rata-rata ({metricUnit})
              </th>
              {/* Daily Date Columns */}
              {daysArray.map((d) => (
                <th key={d.dateKey} className="px-2.5 py-3 font-semibold text-slate-600 text-center min-w-[44px]">
                  {d.dayLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {regionEngines.map((engine) => {
              const isSelected = selectedEngine === engine.code;

              const dailyValues: number[] = daysArray.map((d) => {
                const record = engine.dailyData[d.dateKey];
                return getMetricValue(record, selectedMetric);
              });

              const overallAvg = calculateAverage(dailyValues);

              return (
                <tr
                  key={engine.code}
                  onClick={() => onSelectEngine(engine.code)}
                  className={`cursor-pointer transition-colors group ${
                    isSelected
                      ? 'bg-[#ECFDF5] font-semibold text-slate-900'
                      : 'hover:bg-[#ECFDF5]/60 text-slate-800'
                  }`}
                >
                  {/* Sticky First Column */}
                  <td
                    className={`sticky left-0 z-10 px-4 py-3.5 border-r border-slate-200 transition-colors ${
                      isSelected
                        ? 'bg-[#ECFDF5] font-extrabold text-emerald-900 border-l-4 border-l-[#059669]'
                        : 'bg-white group-hover:bg-[#ECFDF5]/90 font-bold text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="font-extrabold">{engine.code}</span>
                        <span className="text-[10px] text-slate-400 block font-normal">{engine.name}</span>
                      </div>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" title="Aktif" />
                      )}
                    </div>
                  </td>

                  {/* Rata-rata Column */}
                  <td className="px-4 py-3.5 text-center font-bold text-emerald-700 bg-emerald-50/40 border-r border-slate-200">
                    {formatNumber(overallAvg)}
                  </td>

                  {/* Daily Values */}
                  {dailyValues.map((val, idx) => (
                    <td key={daysArray[idx].dateKey} className="px-2.5 py-3.5 text-center font-medium text-slate-700">
                      {formatNumber(val, 1)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table Helper Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
        <span>Klik salah satu baris engine untuk melihat detail biaya (cost).</span>
        <span className="font-semibold text-slate-600">{regionEngines.length} Engine di {selectedRegion}</span>
      </div>
    </div>
  );
};
