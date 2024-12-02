import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", // Cambia la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Directorio de salida para GitHub Pages
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        about: resolve(__dirname, "./src/about.html"), // Otra página
        contact: resolve(__dirname, "./src/contact.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "./", // Usar rutas relativas para GitHub Pages
});
