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
        target: "https://api.southwest-internationalschool.site/",
        changeOrigin: true,
        secure: true,
      },
    },
    // hmr: {
    //   protocol: process.env.NODE_ENV === "production" ? "wss" : "ws",
    //   host:
    //     process.env.NODE_ENV === "production"
    //       ? "southwest-internationalschool.site"
    //       : "southwest-internationalschool.site",
    //   port: process.env.NODE_ENV === "production" ? 443 : 8000,
    // },
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
