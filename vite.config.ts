import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/Vetrai/', // <-- MUST match your repo name exactly
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  build: {
    outDir: 'dist', // default folder for gh-pages
    target: 'esnext',
  },
  server: {
    port: 3000,
    open: true
  }
});
