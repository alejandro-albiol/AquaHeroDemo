import * as dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../../../.env');
dotenv.config({ path: envPath });

export const config = {
  apiKey: process.env.API_KEY || '',
  environment: process.env.NODE_ENV || 'development',
  apiUrl: process.env.API_URL || 'https://aquahero.demo'
};

if (!config.apiKey) {
  console.error('❌ Error: API_KEY not found in environment variables');
  console.log('📝 Make sure:');
  console.log(`1. .env file exists at: ${envPath}`);
  console.log('2. File contains API_KEY variable');
  console.log('3. Format is: API_KEY=your_api_key_here');
  process.exit(1);
}