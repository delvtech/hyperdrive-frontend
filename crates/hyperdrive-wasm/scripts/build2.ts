#!/usr/bin/env node
import { spawnSync } from "child_process";
import { readFileSync, renameSync, rmSync, writeFileSync } from "fs";
import { basename, resolve } from "path";
import lockfile from "proper-lockfile";
import { CargoToml } from "scripts/types";
import tomlJson from "toml-json";
import { version } from "../package.json";

const script = basename(__filename);

// SETTINGS
const DEFAULT_OUT_DIR = "../../packages/hyperdrive-wasm";
const DEFAULT_TMP_DIR = "tmp";

async function main() {
  // Log usage.
  console.log(`
  +
  |  ${script}
  |  Generates a wasm package from the hyperdrive-wasm crate.
  |
  |  Usage: ${script} [out_dir]
  |
  |    out_dir: The output directory for the generated package. (default: ${DEFAULT_OUT_DIR})
  +
  `);

  // Try the build.
  try {
    await build();
  } catch (err) {
    console.error(err);
    // Ensure the lockfile is released.
    lockfile.unlock(__filename);
    process.exit(1);
  }
}

main();

/**
 * Builds a WebAssembly package from the hyperdrive-wasm crate.
 *
 * This function performs the following tasks:
 * - Locks the script to prevent concurrent builds.
 * - Logs the current version and output directory.
 * - Updates the version in the Cargo.toml file.
 * - Builds the package with the "@delvtech/" scope for both ESM and CJS targets.
 * - Renames and removes temporary build files.
 * - Creates a package.json to support both ESM and CJS compatibility, adds
 *   type definitions, and ensures the package is configured for public publishing.
 * - Releases the lockfile and exits the process.
 */
async function build() {
  const release = await lockfile
    // Lock the script to prevent concurrent builds.
    .lock(__filename, {
      retries: 3,
      update: 3_000, // 3 seconds
      stale: 60_000 * 10, // 10 minutes
    });

  const outDir = resolve(process.argv[3] || DEFAULT_OUT_DIR);

  // Log settings.
  console.log("Version: ", version);
  console.log("Output Directory: ", outDir, "\n");

  // Update the version in the Cargo.toml file.
  const cargoManifestPath = resolve(__dirname, "../Cargo.toml");
  writeFileSync(
    cargoManifestPath,
    readFileSync(cargoManifestPath, "utf8").replace(
      // https://regex101.com/r/PLmbXb/1
      /^version(\s*)=(\s*)"[^"]+"/m,
      `version$1=$2"${version}"`,
    ),
  );

  // Build the package with the "@delvtech/" scope.
  console.log("Building package...");
  const buildProcessResult = spawnSync(
    "npx",
    [
      "wasm-pkg-build",
      "--modules",
      "cjs,esm-inline",
      "--out-dir",
      DEFAULT_TMP_DIR,
    ],
    {
      stdio: "inherit",
    },
  );

  // Restore the previous build and exit if the build failed.
  if (buildProcessResult.error) {
    process.exit(1);
  }

  // Copy generated files to the output directory.
  const fileNames = [
    { from: "hyperdrive_wasm_web.js", to: "hyperdrive_wasm.js" }, // esm-inline
    { from: "hyperdrive_wasm.js", to: "hyperdrive_wasm.cjs" }, // cjs
    { from: "hyperdrive_wasm.d.ts", to: "hyperdrive_wasm.d.ts" }, // types
    { from: "hyperdrive_wasm_bg.wasm", to: "hyperdrive_wasm_bg.wasm" }, // wasm for cjs
  ];
  fileNames.forEach(({ from, to }) => {
    renameSync(resolve(DEFAULT_TMP_DIR, from), resolve(outDir, to));
  });

  // Remove the temporary build files
  console.log("Removing temporary build files...");
  rmSync(DEFAULT_TMP_DIR, { recursive: true });

  console.log("Creating package.json...");

  // Load the Cargo.toml file
  const cargoToml = tomlJson({
    fileUrl: "Cargo.toml",
  }) as CargoToml;

  // Now we'll create the package.json.
  const packageJson = {
    name: `@delvtech/${cargoToml.package.name}`,
    collaborators: cargoToml.package.authors.filter(Boolean),
    version: cargoToml.package.version,
    license: cargoToml.package.license,
    files: fileNames.map(({ to }) => to),
    module: "hyperdrive_wasm.js",
    types: "hyperdrive_wasm.d.ts",
    sideEffects: ["./snippets/*"],
    type: "module",
    // Add a main field for improved commonjs compatibility.
    main: "hyperdrive_wasm.cjs",
    // Add exports for both ESM and CJS compatibility for modern node versions.
    exports: {
      ".": {
        default: {
          require: "./hyperdrive_wasm.cjs",
          import: "./hyperdrive_wasm.js",
        },
        types: {
          require: "./hyperdrive_wasm.d.ts",
          import: "./hyperdrive_wasm.d.ts",
        },
      },
    },
    // Explicitly set the publishConfig access to public to ensure it's published
    // by changesets.
    publishConfig: {
      access: "public",
    },
  };

  // Save the package.json to the output directory.
  writeFileSync(
    resolve(outDir, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );

  // Release the lockfile.
  release();

  console.log("Done!");

  // Ensure the lockfile is released.
  lockfile.unlock(__filename);
  process.exit(0);
}
