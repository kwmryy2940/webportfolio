import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"/webportfolio",
  build: {
    // outputDir:"docs",
    // outDir:"./docs",
    // assetsDir:"./",
    // publicPath:"./",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir:"./dist"
  },
});
