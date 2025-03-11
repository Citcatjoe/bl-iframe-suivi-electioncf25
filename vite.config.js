import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  base: "./", // Use './' for relative paths in production
  build: {
    outDir: "dist",
    assetsDir: "assets", // Où les fichiers générés (CSS, JS) sont stockés
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
