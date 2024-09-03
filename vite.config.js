// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // Comment out or remove the proxy configuration
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.openweathermap.org/data/2.5',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
