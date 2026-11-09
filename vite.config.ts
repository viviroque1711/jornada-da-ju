import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages publica o projeto no subdiretório /jornada-da-ju/.
  base: "/jornada-da-ju/",
});