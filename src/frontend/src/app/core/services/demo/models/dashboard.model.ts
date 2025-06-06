export interface User {
  id: number;
  name: string;
  waterSaved: number;
  streak: number;
}

export interface Zone {
  id: string;
  name: string;
  waterLevel: 'Alto' | 'Medio' | 'Bajo';
  restrictions: boolean;
  savingTips: number;
}

export interface Statistics {
  totalWaterSaved: number;
  activeUsers: number;
  restrictedZones: number;
  tipsShared: number;
}

export interface MockData {
  success: boolean
  data: {
    users: User[];
    zones: Zone[];
    statistics: Statistics;
  };
}
