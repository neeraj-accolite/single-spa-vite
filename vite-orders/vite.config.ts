import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// import externalize from 'vite-plugin-externalize-dependencies';

// const externalDependencies = ["single-spa", "react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client"]

// export default defineConfig(({ command }) => {
//   return {
//     build: {
//       rollupOptions: {
//         input: "src/acc-orders.tsx",
//         output: {
//           format: "esm",
//         },
//         external: externalDependencies
//       },
//     },
//     plugins: [
//       react(),
//       externalize({ externals: externalDependencies })
//     ],
//   }
// })

export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/acc-orders.tsx",
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
    port: 5173
  }
});

// export default defineConfig({
//   plugins: [react(), vitePluginSingleSpa(
//     {
//       type: 'mife',
//       serverPort: 5173,
//       spaEntryPoints: 'src/acc-orders.tsx'
//     },
//   )]
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import externalize from 'vite-plugin-externalize-dependencies';

// const externalDependencies = ["single-spa", "react", "react/jsx-dev-runtime", "react/jsx-runtime", "react-dom", "react-dom/client"]

// export default defineConfig(({ command }) => {
//   return {
//     build: {
//       rollupOptions: {
//         input: "src/main.ts",
//         output: {
//           format: "esm",
//         },
//         external: externalDependencies
//       },
//     },
//     plugins: [
//       react(),
//       externalize({ externals: externalDependencies })
//     ],
//   }
// })