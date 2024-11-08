import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/exports/index.ts", "src/exports/v1.0.14.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
  cjsInterop: true,
});
