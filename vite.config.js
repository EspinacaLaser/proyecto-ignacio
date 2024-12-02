import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Configuración para __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: "./src", // Raíz del proyecto
  build: {
    outDir: "../docs", // Carpeta de salida
    emptyOutDir: true, // Vaciar docs antes de construir
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // Alias para simplificar rutas
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/base/variables.scss";
          @import "@/styles/base/mixins.scss";
        `,
      },
    },
  },
  base: "./",
});
