import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from package.json or environment variable
const base = process.env.NODE_ENV === 'production' ? '/' : '/';

export default defineConfig({
  plugins: [react()],
  base: base,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});