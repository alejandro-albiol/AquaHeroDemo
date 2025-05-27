export const schemas = {
  Success: {
    type: 'object',
    properties: {
      success: { type: 'boolean' }
    }
  },
  Advice: {
    type: 'object',
    required: ['success', 'advice'],
    properties: {
      success: { type: 'boolean' },
      advice: { type: 'string' }
    }
  },
  User: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      waterSaved: { type: 'number' },
      streak: { type: 'integer' }
    }
  },
  Zone: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      waterLevel: { 
        type: 'string',
        enum: ['Alto', 'Medio', 'Bajo']
      },
      restrictions: { type: 'boolean' },
      savingTips: { type: 'integer' }
    }
  },
  Statistics: {
    type: 'object',
    properties: {
      totalWaterSaved: { type: 'number' },
      activeUsers: { type: 'integer' },
      restrictedZones: { type: 'integer' },
      tipsShared: { type: 'integer' }
    }
  }
};