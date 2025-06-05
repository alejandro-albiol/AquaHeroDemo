import 'dotenv/config';
import { Router } from 'express';
import { Aigua } from '../services/aigua';
import { PromptGenerator } from '../services/promptGenerator';
import { MockDataService } from '../services/mockDataService';
import { config } from '../config/environment';

const aiguaRouter = Router();
const aigua = new Aigua(
  config.apiKey,
  config.apiUrl,
  'AquaHero Demo'
);
const promptGenerator = new PromptGenerator();
const mockDataService = new MockDataService();

// Route for AI-generated advice
aiguaRouter.get('/advice', async (_req, res) => {
  try {
    const prompt = promptGenerator.generatePrompt();
    const response = await aigua.process();

    res.json({
      success: true,
      advice: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'No se pudo generar el consejo'
    });
  }
});

aiguaRouter.get('/dashboard', async (_req, res) => {
  try {
    const data = mockDataService.getData();
    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      mensaje: 'Error al obtener los datos del dashboard'
    });
  }
});

aiguaRouter.get('/zones', (_req, res) => {
  res.json({
    success: true,
    zones: mockDataService.getZones()
  });
});

aiguaRouter.get('/statistics', (_req, res) => {
  res.json({
    success: true,
    statistics: mockDataService.getStatistics()
  });
});

export default aiguaRouter;