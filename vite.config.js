import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/_variables.scss' as *;`, // Asegúrate de usar la ruta absoluta
      },
    },
  },
  root: "./src",
  build: {
    outDir: "../docs",
  },
});
