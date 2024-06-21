import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: process.env.PORT || 8000, // Use PORT env variable or default to 8000
    strictPort: true, // Fail if port is not available
  },
});
