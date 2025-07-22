import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    routes: {
      test: '/api/v1/auth/test',
      register: '/api/v1/auth/register',
      login: '/api/v1/auth/login'
    }
  });
});

// API Routes - must come before error handlers
app.use('/api/v1/auth', authRoutes);


// ✅ Root route for Render to detect backend is live
app.get('/', (req, res) => {
  res.send('✅ Backend is live and running on Render');
});

// Error handlers (must come last)
app.use(notFound);
app.use(errorHandler);

export default app;