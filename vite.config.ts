import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Las rutas relativas permiten publicar el build en / o en /equipo/.
  base: './',
  build: { outDir: 'dist', emptyOutDir: true },
});
