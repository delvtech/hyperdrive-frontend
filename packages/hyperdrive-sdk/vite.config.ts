import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      "@delvtech/hyperdrive-wasm?v0.2.0": "@delvtech/hyperdrive-wasm",
    },
  },
});
