import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/personalwebsite/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
