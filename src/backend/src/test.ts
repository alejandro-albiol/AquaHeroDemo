import { Aigua } from './services/aigua';
import dotenv from 'dotenv';

dotenv.config({ path: require('path').resolve(__dirname, '../../../.env') });

async function test() {
  const aigua = new Aigua(
    process.env.API_KEY || '',
    'https://aquahero.demo',
    'AquaHero Demo'
  );

  const response = await aigua.process({
    prompt: "Dame un consejo para ahorrar agua en casa"
  });

  console.log(JSON.stringify(response, null, 2));
}

test();