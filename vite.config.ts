import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [],
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
