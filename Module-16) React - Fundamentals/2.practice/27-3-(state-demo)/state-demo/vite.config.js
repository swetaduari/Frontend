import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Frontend/tree/main/Module-16)%20React%20-%20Fundamentals/2.practice/27-3-26(state-demo)/state-demo',
})
