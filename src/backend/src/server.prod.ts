import express from 'express';
import path from 'path';
import cors from 'cors';
import aiguaRouter from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// API routes first
app.use('/api/v1', aiguaRouter);

// Serve static files from Angular app
const angularPath = path.join(__dirname, '../../../src/frontend/dist/aquahero/browser');
app.use(express.static(angularPath));

// API fallback - handle all API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// Angular app fallback - send index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(angularPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running on port ${port}`);
});

export default app;