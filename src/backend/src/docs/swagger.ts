import { schemas } from './schemas';
import { paths } from './paths';

export const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'AquaHero API',
    version: '1.0.0',
    description: 'API for water conservation advice and dashboard data',
    contact: {
      name: 'AquaHero Support',
      url: 'https://aquahero.demo/support'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Development server'
    },
    {
      url: 'https://api.aquahero.demo/v1',
      description: 'Production server'
    }
  ],
  tags: [
    {
      name: 'Water Saving Advice',
      description: 'AI-generated water conservation tips'
    },
    {
      name: 'Dashboard Data',
      description: 'Complete dashboard information'
    },
    {
      name: 'Zones',
      description: 'Water restriction zones information'
    },
    {
      name: 'Statistics',
      description: 'Water usage and conservation statistics'
    }
  ],
  paths,
  components: {
    schemas
  }
};