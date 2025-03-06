import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base path is set correctly
  server: {
    historyApiFallback: true, // Ensure fallback works for client-side routing
  },
  build: {
    outDir: 'dist',
  }
});
