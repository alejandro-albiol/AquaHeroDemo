import express from 'express';
import cors from 'cors';
import { Aigua } from './services/aigua';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from './docs/swagger';
import aiguaRouter from './routes/routes';

dotenv.config({ path: '../../.env' });

const app = express();
const port = process.env.PORT || 3000;
const apiPrefix = process.env.API_PREFIX || '/api/v1';

const corsOptions = {
  origin: ['http://localhost:4200', 'https://aquahero.demo'], // Angular dev server y producción
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'AquaHero API is running!' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use('/api/v1', aiguaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;