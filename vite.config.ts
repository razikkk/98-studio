import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from "path"; // Import path to handle the directory link

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      // This tells Vite that @/ means the src/ folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    strictPort: true, 
  },
});