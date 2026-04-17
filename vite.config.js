import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
   base: "/",
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("react-router")) return "router";
            if (id.includes("lenis")) return "lenis";
            if (id.includes("gsap")) return "gsap";
            return "vendor";
          }
        },
      },
    },
  },
});
