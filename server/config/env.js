import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/mern-testing';
export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const NODE_ENV = process.env.NODE_ENV || 'development';