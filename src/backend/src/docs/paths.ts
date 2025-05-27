export const paths = {
  '/advice': {
    get: {
      tags: ['Water Saving Advice'],
      summary: 'Get AI-generated water saving advice',
      description: 'Returns a random water saving tip or interesting fact',
      responses: {
        '200': {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/Advice' }
            }
          }
        },
        '500': {
          description: 'Server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  mensaje: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  },
  '/dashboard': {
    get: {
      tags: ['Dashboard Data'],
      summary: 'Get complete dashboard information',
      description: 'Returns all dashboard data including users, zones and statistics',
      responses: {
        '200': {
          description: 'Successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  data: {
                    type: 'object',
                    properties: {
                      users: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/User' }
                      },
                      zones: {
                        type: 'array',
                        items: { $ref: '#/components/schemas/Zone' }
                      },
                      statistics: { $ref: '#/components/schemas/Statistics' }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  '/zones': {
    get: {
      tags: ['Zones'],
      summary: 'Get water restriction zones',
      description: 'Returns information about water restriction zones',
      responses: {
        '200': {
          description: 'List of zones',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  zones: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Zone' }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  '/statistics': {
    get: {
      tags: ['Statistics'],
      summary: 'Get water usage statistics',
      description: 'Returns water conservation statistics and metrics',
      responses: {
        '200': {
          description: 'Statistics overview',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: { type: 'boolean' },
                  statistics: { $ref: '#/components/schemas/Statistics' }
                }
              }
            }
          }
        }
      }
    }
  }
};