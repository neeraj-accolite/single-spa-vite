import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/acc-address.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [vue()],
  server: {
    host: "localhost",
    port: 8600
  }
});

