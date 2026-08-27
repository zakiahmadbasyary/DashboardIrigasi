export interface DashboardInfo {
  id: string;
  name: string;
  code: string;
  description: string;
  url: string;
  badge?: string;
  status: 'active' | 'in_development' | 'planned';
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  active?: boolean;
}

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
  avatarUrl?: string;
}

export interface IrrigationStatus {
  totalAreaHectares: number;
  activeGates: number;
  activePumps: number;
  waterLevelAvgMeters: number;
  systemStatus: 'normal' | 'warning' | 'critical';
}
