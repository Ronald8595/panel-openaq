import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración con Proxy para evitar errores de CORS en desarrollo
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-openaq': {
        target: 'https://api.openaq.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-openaq/, ''),
      },
    },
  },
})
