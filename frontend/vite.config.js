import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    postcss: './postcss.config.js', // Optional if PostCSS is configured
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and ReactDOM into a vendor chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust to suppress warnings for large assets
    sourcemap: false, // Disable sourcemaps in production for smaller build size
  },
  server: {
    port: 3000, // Local dev server port
  },
});

