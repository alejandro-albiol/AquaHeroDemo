export interface User {
  id: number
  name: string
  waterSaved: number
  streak: number
}

export interface Zone {
  id: string
  name: string
  waterLevel: 'Alto' | 'Medio' | 'Bajo'
  restrictions: boolean
  savingTips: number
}

export interface Statistics {
  totalWaterSaved: number
  activeUsers: number
  restrictedZones: number
  tipsShared: number
}

export interface MockData {
  users: User[]
  zones: Zone[]
  statistics: Statistics
}

export class MockDataService {
  private mockData: MockData

  constructor() {
    this.mockData = {
      users: [
        { id: 1, name: 'Ana', waterSaved: 150, streak: 7 },
        { id: 2, name: 'Carlos', waterSaved: 200, streak: 15 },
        { id: 3, name: 'María', waterSaved: 180, streak: 5 },
      ],
      zones: [
        {
          id: 'cs-001',
          name: 'Centro',
          waterLevel: 'Medio',
          restrictions: true,
          savingTips: 3,
        },
        {
          id: 'cs-002',
          name: 'Norte',
          waterLevel: 'Bajo',
          restrictions: true,
          savingTips: 5,
        },
        {
          id: 'cs-003',
          name: 'Sur',
          waterLevel: 'Alto',
          restrictions: true,
          savingTips: 2,
        },
        {
          id: 'cs-004',
          name: 'Este',
          waterLevel: 'Bajo',
          restrictions: true,
          savingTips: 3,
        },
        {
          id: 'cs-005',
          name: 'Oeste',
          waterLevel: 'Medio',
          restrictions: false,
          savingTips: 4,
        },
        {
          id: 'cs-006',
          name: 'Grao',
          waterLevel: 'Alto',
          restrictions: false,
          savingTips: 1,
        },
      ],
      statistics: {
        totalWaterSaved: 530,
        activeUsers: 3,
        restrictedZones: 2,
        tipsShared: 150,
      },
    }
  }

  getData(): MockData {
    return this.mockData
  }

  getUsers(): User[] {
    return this.mockData.users
  }

  getZones(): Zone[] {
    return this.mockData.zones
  }

  getStatistics(): Statistics {
    return this.mockData.statistics
  }
}
