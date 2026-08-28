'use client';

import React, { useState } from 'react';
import { MetricType, MonthPeriod, WilayahCode } from '../types/engine';
import { EngineFilterInfoCard } from '../components/EngineFilterInfoCard';
import { RegionPerformanceTable } from '../components/RegionPerformanceTable';
import { EnginePerformanceTable } from '../components/EnginePerformanceTable';
import { EngineCostTable } from '../components/EngineCostTable';

export default function DashboardListEnginePage() {
  // Frontend State for Month, Metric, and Drill-down levels
  const [selectedMonth, setSelectedMonth] = useState<MonthPeriod>('Januari 2026');
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('Jam Kerja/Hari');

  // Drill-down State
  const [selectedRegion, setSelectedRegion] = useState<WilayahCode | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<string | null>(null);

  // Handlers
  const handleMonthChange = (month: MonthPeriod) => {
    setSelectedMonth(month);
    setSelectedEngine(null); // Reset Level 3 on month change
  };

  const handleMetricChange = (metric: MetricType) => {
    setSelectedMetric(metric);
  };

  const handleSelectRegion = (region: WilayahCode) => {
    setSelectedRegion(region);
    setSelectedEngine(null); // Reset Level 3 when changing region
  };

  const handleSelectEngine = (engineCode: string) => {
    setSelectedEngine(engineCode);
  };

  const handleBackToRegions = () => {
    setSelectedRegion(null);
    setSelectedEngine(null);
  };

  const handleBackToEngines = () => {
    setSelectedEngine(null);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-12">
      {/* 1. Sticky/Freeze Filter Bar with Brief Info on Left & Controls on Right */}
      <EngineFilterInfoCard
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
        selectedMetric={selectedMetric}
        onMetricChange={handleMetricChange}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Level 1: Tabel Performa Wilayah (AW01–AW08) */}
        <RegionPerformanceTable
          selectedMonth={selectedMonth}
          selectedMetric={selectedMetric}
          selectedRegion={selectedRegion}
          onSelectRegion={handleSelectRegion}
        />

        {/* Level 2: Tabel Performa Engine (Shown when Region selected) */}
        {selectedRegion && (
          <EnginePerformanceTable
            selectedMonth={selectedMonth}
            selectedMetric={selectedMetric}
            selectedRegion={selectedRegion}
            selectedEngine={selectedEngine}
            onSelectEngine={handleSelectEngine}
            onBackToRegions={handleBackToRegions}
          />
        )}

        {/* Level 3: Tabel Cost Engine (Shown when Engine selected) */}
        {selectedRegion && selectedEngine && (
          <EngineCostTable
            selectedMonth={selectedMonth}
            selectedRegion={selectedRegion}
            selectedEngine={selectedEngine}
            onBackToEngines={handleBackToEngines}
          />
        )}
      </div>
    </div>
  );
}
