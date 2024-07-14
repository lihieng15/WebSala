import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000,
    proxy: {
      "/api": {
        target: "https://api.southwest-internationalschool.site/api/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: true,
    port: 8000,
  },
  build: {
    rollupOptions: {
      input: "./index.html",
      output: {
        manualChunks: {
          // Split vendor code into a separate chunk
          vendor: ["react", "react-dom"],
          lodash: ["lodash"],
          homepage: [
            "./src/homepage/pages/Home",
            "./src/homepage/pages/AboutPage",
            "./src/homepage/pages/Contact",
            "./src/homepage/pages/ManagementTeamsPage",
            "./src/homepage/pages/EventsPages",
            "./src/homepage/pages/SchoolNewsPage",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "lodash"],
  },
});
