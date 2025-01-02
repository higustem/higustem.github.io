import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from package.json or environment variable
export const base = process.env.NODE_ENV === 'production' ? '/' : '/';

export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.production.com' 
  : 'http://localhost:3000';

export default defineConfig({
  plugins: [react()],
  base: base,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});