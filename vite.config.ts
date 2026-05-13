import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite'; // Import nitro
import path from "path";

export default defineConfig({
  base: "/",
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true, // This creates static HTML for SEO
        crawlLinks: true, 
      }
    }),
    nitro(), // Add nitro here
    viteReact()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});