import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { nitro } from 'nitro/vite' // Add this
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: 'vercel' // Explicitly tells Nitro to build for Vercel
    }), // No deployment property here anymore
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    strictPort: true, 
  },
});