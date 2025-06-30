import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// vite.config.ts ou vite.config.js
export default defineConfig({
  base: '/',
  plugins: [vue()],
})

