import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/exports/index.ts",

    "src/exports/factory.ts",
    "src/exports/hyperdrive.ts",
    "src/exports/registry.ts",
    "src/exports/token.ts",

    // v1.0.14
    "src/exports/v1.0.14/index.ts",
    "src/exports/v1.0.14/hyperdrive.ts",
  ],
  format: ["esm"],
  dts: true,
  clean: true,
  minify: true,
  cjsInterop: true,
});
