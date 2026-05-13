import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // This tells TanStack Start to build for a standard server environment
    server: { 
      entry: "server",
      preset: "vercel" // Add this line if your config allows it
    },
  },
});