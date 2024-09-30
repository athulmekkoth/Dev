import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // This should be at the root level
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Correct alias definition
    },
  },
  // If you need a proxy configuration, uncomment the section below
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000', // Adjust the URL to match your backend server
  //   },
  // },
});
