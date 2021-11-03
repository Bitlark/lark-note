import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from "vite-babel-plugin"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({
      "compact": false
    }),
    react(),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
    },
  },
})
