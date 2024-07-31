import { defineConfig } from "tsup";

export default defineConfig({
  // Splitting the entry points in foundational packages like this makes it
  // easier for wrapper packages to selectively re-export `*` from some entry
  // points and while augmenting or modifying others.
  entry: [
    "src/exports/index.ts",

    "src/exports/contract.ts",
    "src/exports/errors.ts",
    "src/exports/model.ts",
    "src/exports/utils.ts",

    // factory
    "src/exports/factory/index.ts",
    "src/exports/factory/model.ts",
    "src/exports/factory/rest.ts",

    // hyperdrive
    "src/exports/hyperdrive/index.ts",
    "src/exports/hyperdrive/model.ts",
    "src/exports/hyperdrive/rest.ts",

    // registry
    "src/exports/registry/index.ts",
    "src/exports/registry/model.ts",
    "src/exports/registry/rest.ts",

    // token
    "src/exports/token/index.ts",
    "src/exports/token/model.ts",
    "src/exports/token/rest.ts",

    // v1.0.14
    "src/exports/v1.0.14/index.ts",
    "src/exports/v1.0.14/hyperdrive/index.ts",
    "src/exports/v1.0.14/hyperdrive/model.ts",
    "src/exports/v1.0.14/hyperdrive/rest.ts",
  ],
  format: ["esm"],
  dts: true,
  clean: true,
  minify: true,
  cjsInterop: true,
});
