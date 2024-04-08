import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite({ routesDirectory: "./src/ui/routes" }),
    nodePolyfills({
      exclude: ["fs"],
      globals: {
        process: true,
      },
      protocolImports: false,
    }),
  ],
  publicDir: "src/public",
  define: {
    global: {},
  },
});
