import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/acc-api.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [],
  server: {
    host: "localhost",
    port: 5174
  }
});
