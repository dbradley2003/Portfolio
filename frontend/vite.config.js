import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // The name of your GitHub repository
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Ensure these extensions are included
});
