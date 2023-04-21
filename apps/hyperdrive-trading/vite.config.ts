import tailwindConfig from "./tailwind.config.cjs";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  // Node.js global to browser globalThis
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
    },
  },
});
