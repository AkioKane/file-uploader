import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      '/api/sign-up': {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      '/api/sign-in': {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      '/api/check-auth': {
        target: "http://localhost:3000",
        changeOrigin: true
      },
      '/api/log-out': {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      '/api/add-files': {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      '/api/uploads/download': {
        target: "http://localhost:3000",
        changeOrigin: true,
      }
    }
  }
})
