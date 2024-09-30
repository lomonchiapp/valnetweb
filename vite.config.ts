import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces
    port: 5173, // Puerto en el que se ejecuta Vite (puedes cambiarlo si lo deseas)
  },
});