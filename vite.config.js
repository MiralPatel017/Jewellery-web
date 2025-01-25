import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-router-dom': path.resolve('./node_modules/react-router-dom'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react-icons/li', 'react-icons/hi2'],
    },
  },
});
