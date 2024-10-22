import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disable minification for debugging purposes
    sourcemap: true, // Generate source maps for easier debugging
    outDir: 'dist', // Output directory
  },
})
