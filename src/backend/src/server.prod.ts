import express from 'express';
import path from 'path';
import cors from 'cors';
import aiguaRouter from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
};

app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use('/api/v1', aiguaRouter);

// Serve Angular static files
const angularDistPath = path.join(__dirname, '../../frontend/dist/browser');
app.use(express.static(angularDistPath));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running on port ${port}`);
});

export default app;