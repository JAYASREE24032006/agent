import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5174,
        proxy: {
            '/auth': 'http://localhost:8000',
            '/api': 'http://localhost:8000'
        }
    }
})
