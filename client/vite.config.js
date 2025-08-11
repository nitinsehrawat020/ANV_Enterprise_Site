import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Clean functional config to control console stripping only in production
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],
    server: { host: true },
    esbuild: {
      drop: isProd ? ["console", "debugger"] : [],
    },
    build: {
      rollupOptions: {
        external: ["quill", "chart.js/auto"],
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
            router: ["react-router-dom"],
            ui: ["styled-components", "@emotion/is-prop-valid"],
            query: ["@tanstack/react-query"],
            toast: ["react-hot-toast"],
            prime: ["primereact"],
          },
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
      target: "esnext",
      minify: "esbuild",
      cssMinify: true,
    },
    assetsInclude: ["**/*.webp", "**/*.avif"],
  };
});
