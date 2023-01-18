import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  assetsDir:'./',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index01: resolve(__dirname, 'index01.html'),
        index02: resolve(__dirname, 'index02.html'),
      },
    },
  },
})
