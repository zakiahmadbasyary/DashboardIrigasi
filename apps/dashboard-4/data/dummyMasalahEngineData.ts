import { MasalahEngineRecord, WilayahCode, StatusEngine } from '../types/masalahEngine';
import { MONTH_LIST } from '../utils/masalahEngineUtils';

interface EngineSeed {
  engine: string;
  wilayah: WilayahCode;
  lokasi: string;
  status: StatusEngine;
  baseAvail: number;
  baseUtil: number;
}

const ENGINE_SEEDS: EngineSeed[] = [
  // AW01
  { engine: 'ENG01', wilayah: 'AW01', lokasi: '00A1', status: 'NSFC', baseAvail: 94, baseUtil: 82 },
  { engine: 'ENG02', wilayah: 'AW01', lokasi: '00A1', status: 'NS', baseAvail: 89, baseUtil: 78 },
  { engine: 'ENG03', wilayah: 'AW01', lokasi: '00A2', status: 'NSSC', baseAvail: 91, baseUtil: 80 },
  { engine: 'ENG04', wilayah: 'AW01', lokasi: '00A2', status: 'NSFC', baseAvail: 93, baseUtil: 85 },

  // AW02
  { engine: 'ENG05', wilayah: 'AW02', lokasi: '00B1', status: 'NS', baseAvail: 87, baseUtil: 76 },
  { engine: 'ENG06', wilayah: 'AW02', lokasi: '00B1', status: 'NSFC', baseAvail: 93, baseUtil: 84 },
  { engine: 'ENG07', wilayah: 'AW02', lokasi: '00B2', status: 'NSSC', baseAvail: 85, baseUtil: 81 },

  // AW03
  { engine: 'ENG08', wilayah: 'AW03', lokasi: '00B2', status: 'NSSC', baseAvail: 95, baseUtil: 75 },
  { engine: 'ENG09', wilayah: 'AW03', lokasi: '00B3', status: 'NS', baseAvail: 90, baseUtil: 81 },
  { engine: 'ENG10', wilayah: 'AW03', lokasi: '00B3', status: 'NSFC', baseAvail: 96, baseUtil: 79 },

  // AW04
  { engine: 'ENG11', wilayah: 'AW04', lokasi: '00C1', status: 'NSFC', baseAvail: 84, baseUtil: 88 },
  { engine: 'ENG12', wilayah: 'AW04', lokasi: '00C2', status: 'NS', baseAvail: 86, baseUtil: 85 },
  { engine: 'ENG13', wilayah: 'AW04', lokasi: '00C2', status: 'NSSC', baseAvail: 82, baseUtil: 90 },

  // AW05
  { engine: 'ENG14', wilayah: 'AW05', lokasi: '00C3', status: 'NSSC', baseAvail: 92, baseUtil: 81 },
  { engine: 'ENG15', wilayah: 'AW05', lokasi: '00C4', status: 'NSFC', baseAvail: 90, baseUtil: 83 },

  // AW06
  { engine: 'ENG16', wilayah: 'AW06', lokasi: '00D1', status: 'NSFC', baseAvail: 88, baseUtil: 79 },
  { engine: 'ENG17', wilayah: 'AW06', lokasi: '00D1', status: 'NS', baseAvail: 85, baseUtil: 77 },

  // AW07
  { engine: 'ENG18', wilayah: 'AW07', lokasi: '00D2', status: 'NS', baseAvail: 93, baseUtil: 85 },
  { engine: 'ENG19', wilayah: 'AW07', lokasi: '00D2', status: 'NSFC', baseAvail: 94, baseUtil: 86 },

  // AW08
  { engine: 'ENG20', wilayah: 'AW08', lokasi: '00D3', status: 'NSSC', baseAvail: 89, baseUtil: 80 },
  { engine: 'ENG21', wilayah: 'AW08', lokasi: '00D3', status: 'NS', baseAvail: 88, baseUtil: 79 },
];

function generateAllMonthlyRecords(): MasalahEngineRecord[] {
  const result: MasalahEngineRecord[] = [];
  let idCounter = 1;

  MONTH_LIST.forEach((bulan, mIdx) => {
    ENGINE_SEEDS.forEach((seed) => {
      // Small variation per month
      const availVar = Math.sin(idCounter + mIdx) * 3;
      const utilVar = Math.cos(idCounter + mIdx) * 3;

      const avail = Math.min(99, Math.max(70, Math.round(seed.baseAvail + availVar)));
      const util = Math.min(98, Math.max(65, Math.round(seed.baseUtil + utilVar)));

      result.push({
        id: String(idCounter++),
        wilayah: seed.wilayah,
        lokasi: seed.lokasi,
        engine: seed.engine,
        status: seed.status,
        availability: avail,
        utilities: util,
        bulan: bulan,
      });
    });
  });

  return result;
}

export const DUMMY_MASALAH_ENGINE_RECORDS: MasalahEngineRecord[] = generateAllMonthlyRecords();
