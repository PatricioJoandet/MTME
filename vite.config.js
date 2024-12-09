import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/database/search": {
        target: "https://api.discogs.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/database\/search/, "/database/search"),
      },
      "/artists": {
        target: "https://api.discogs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/artists/, "/artists"),
      },
      "/releases": {
        target: "https://api.discogs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/releases/, "/albums"),
      },
      "/api": {
        target: "https://api.discogs.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
