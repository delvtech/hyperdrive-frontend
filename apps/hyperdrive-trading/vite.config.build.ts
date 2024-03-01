import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// We need this seperate configuration for this problem
// https://github.com/wevm/wagmi/discussions/2248
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite({ routesDirectory: "./src/ui/routes" }),
  ],
  publicDir: "src/public",
});
