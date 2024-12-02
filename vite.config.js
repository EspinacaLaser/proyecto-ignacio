import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    root:"./src",
    outDir: "./docs",
    rollupOptiones: {
      input: {
        main: resolve("src", "index.html"),
      },
    },
  },
  base: "./",
});