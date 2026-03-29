import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: process.env.VITE_BASE_PATH || '/Frontend/tree/main/Module-16)%20React%20-%20Fundamentals/3.Tasks/filter_by_Product_type',
})
