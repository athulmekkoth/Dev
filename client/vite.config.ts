import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/Components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Adjust the URL to match your backend server
    },
  },
})
