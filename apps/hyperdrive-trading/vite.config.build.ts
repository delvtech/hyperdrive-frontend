import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsconfigPaths from "vite-tsconfig-paths";

// We need this seperate configuration for this problem
// https://github.com/wevm/wagmi/discussions/2248
export default defineConfig({
  build: {
    // target esnext is needed for top-level await support
    target: "esnext",
  },
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
});
