import { EngineItem, WilayahCode, DailyRecord } from '../types/engine';
import { MONTH_LIST, getMonthInfo } from '../utils/engineUtils';

export interface RegionMapping {
  code: WilayahCode;
  name: string;
  engineCodes: string[];
}

export const RegionMappingList: RegionMapping[] = [
  { code: 'AW01', name: 'Wilayah AW01', engineCodes: ['ENG01', 'ENG02', 'ENG03'] },
  { code: 'AW02', name: 'Wilayah AW02', engineCodes: ['ENG04', 'ENG05'] },
  { code: 'AW03', name: 'Wilayah AW03', engineCodes: ['ENG06', 'ENG07', 'ENG08'] },
  { code: 'AW04', name: 'Wilayah AW04', engineCodes: ['ENG09', 'ENG10'] },
  { code: 'AW05', name: 'Wilayah AW05', engineCodes: ['ENG11', 'ENG12'] },
  { code: 'AW06', name: 'Wilayah AW06', engineCodes: ['ENG13', 'ENG14', 'ENG15'] },
  { code: 'AW07', name: 'Wilayah AW07', engineCodes: ['ENG16', 'ENG17'] },
  { code: 'AW08', name: 'Wilayah AW08', engineCodes: ['ENG18', 'ENG19', 'ENG20'] },
];

// Pseudo-random deterministic generator based on seed string
function pseudoRandom(seedStr: string): number {
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

// Generate realistic daily records for an engine
function generateDailyRecordsForEngine(engineCode: string): Record<string, DailyRecord> {
  const records: Record<string, DailyRecord> = {};

  MONTH_LIST.forEach((month) => {
    const { year, monthNum, days } = getMonthInfo(month);
    const mStr = String(monthNum).padStart(2, '0');

    for (let day = 1; day <= days; day++) {
      const dStr = String(day).padStart(2, '0');
      const dateKey = `${year}-${mStr}-${dStr}`;

      const r1 = pseudoRandom(`${engineCode}-${dateKey}-hours`);
      const r2 = pseudoRandom(`${engineCode}-${dateKey}-solar`);
      const r3 = pseudoRandom(`${engineCode}-${dateKey}-water`);
      const r4 = pseudoRandom(`${engineCode}-${dateKey}-cost`);

      // Varying realistic data:
      // Working hours: 2.0 to 7.5 hours/day
      const workingHours = Math.round((2.0 + r1 * 5.5) * 10) / 10;
      // Solar per hour: 2.5 to 5.0 L/hr
      const solarPerHour = Math.round((2.5 + r2 * 2.5) * 10) / 10;
      // Water per hour: 10.0 to 25.0 m3/hr
      const waterPerHour = Math.round((10.0 + r3 * 15.0) * 10) / 10;
      // Daily Cost: Rp 800,000 to Rp 2,800,000
      const cost = Math.round((800000 + r4 * 2000000) / 10000) * 10000;

      records[dateKey] = {
        workingHoursPerDay: workingHours,
        solarPerHour: solarPerHour,
        waterPerHour: waterPerHour,
        cost: cost,
      };
    }
  });

  return records;
}

// Create master list of all engine items
export const DUMMY_ENGINES: EngineItem[] = RegionMappingList.flatMap((region) =>
  region.engineCodes.map((code, idx) => ({
    code,
    name: `Engine Pump ${code}`,
    region: region.code,
    dailyData: generateDailyRecordsForEngine(code),
  }))
);
