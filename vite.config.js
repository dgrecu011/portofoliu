import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/portofoliu/',
  build: {
    outDir: 'docs',
  },
  plugins: [vue()],
});
