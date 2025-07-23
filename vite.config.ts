import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined // один файл bundle для оптимизации в Telegram
      }
    }
  },
  server: {
    host: true, // для тестирования в Telegram
    https: false // будет включен в production
  },
  base: './' // относительные пути для GitHub Pages
})
