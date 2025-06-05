import { Aigua } from '../services/aigua';
import { PromptGenerator } from '../services/promptGenerator';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../../../.env');
dotenv.config({ path: envPath });

async function testAiguaAdvice() {

  if (!process.env.API_KEY) {
    console.error('❌ Error: API_KEY no encontrada en las variables de entorno');
    console.log('📝 Asegúrate de que:');
    console.log('1. Existe un archivo .env en:', envPath);
    console.log('2. El archivo contiene la variable API_KEY');
    console.log('3. El formato es: API_KEY=tu_api_key_aqui');
    return;
  }

  try {
    console.log('🔑 API_KEY encontrada, longitud:', process.env.API_KEY.length);
    
    // Inicializar servicios
    const aigua = new Aigua(
      process.env.API_KEY,
      'https://aquahero.demo',
      'AquaHero Demo'
    );
    const promptGenerator = new PromptGenerator();

    // Generar y procesar el consejo
    const prompt = promptGenerator.generatePrompt();
    console.log('🎯 Prompt generado:', prompt);
    
    const response = await aigua.process();

    if (response.success) {
      console.log('✅ Consejo generado:', response.data);
    } else {
      console.log('❌ Error:', response.error);
    }
  } catch (error) {
    console.error('❌ Error en el servicio:', error instanceof Error ? error.message : 'Error desconocido');
  }
}

testAiguaAdvice();
