import express from 'express';
import cors from 'cors';
import { Aigua } from './services/aigua';
import { AiguaRequest } from './shared/aiguaRequest';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const aiguaService = new Aigua(
  process.env.API_KEY || '',
  'https://aquahero.demo',
  'AquaHero Demo'
);

app.post('/api/aigua', async (req, res) => {
  const request: AiguaRequest = req.body;
  const response = await aiguaService.process(request);
  res.json(response);
});

app.get('/', (req, res) => {
  res.json({ message: 'AquaHero API is running!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});