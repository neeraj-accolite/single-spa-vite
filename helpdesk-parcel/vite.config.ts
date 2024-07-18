import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/acc-helpdesk.tsx",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5175
  }
});