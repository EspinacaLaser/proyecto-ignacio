import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig ({
  base: "",
  build: {
    root: "./src", //cambia la raiz del proyecto a src
    outDir: "./docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve("index.html"),
      },
    },
    },
});