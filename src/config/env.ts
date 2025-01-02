import dotenv from 'dotenv';

dotenv.config();

export const env = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development'
} as const;