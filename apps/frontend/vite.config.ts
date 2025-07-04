import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
        secure: false,
      },
      "/admin": {
        target: "http://localhost:8787",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
