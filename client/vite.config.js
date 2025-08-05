import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Image optimization plugin - temporarily disabled
    // viteImagemin({
    //   webp: {
    //     quality: 75,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   pngquant: {
    //     quality: [0.65, 0.8],
    //   },
    // }),
  ],
  server: {
    host: true,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    rollupOptions: {
      external: ["quill", "chart.js/auto"],
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["styled-components", "@emotion/is-prop-valid"],
          query: ["@tanstack/react-query"],
          toast: ["react-hot-toast"],
          prime: ["primereact"],
        },
        // Optimize asset naming for caching
        assetFileNames: (assetInfo) => {
          if (
            /\.(png|jpe?g|webp|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
    // Optimize bundle size
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
  },
  // Image optimization through import processing
  assetsInclude: ["**/*.webp", "**/*.avif"],
});
