import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',  // Carpeta de origen
  build: {
    outDir: '../docs',  // Carpeta de salida
  },
  base: '/nombre-repo/',  // Cambia "nombre-repo" al nombre real de tu repositorio
});