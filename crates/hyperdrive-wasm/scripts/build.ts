#!/usr/bin/env node
import { spawnSync } from "child_process";
import { readFileSync, renameSync, rmSync, writeFileSync } from "fs";
import { basename, resolve } from "path";
import lockfile from "proper-lockfile";
import { CargoToml, PackageJson } from "scripts/types";
import tomlJson from "toml-json";
import { version } from "../package.json";

const script = basename(__filename);

// SETTINGS
const DEFAULT_OUT_DIR = "../../packages/hyperdrive-wasm";
const TMP_DIR = "tmp";

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

  // Ensure the lockfile is released.
  lockfile.unlock(__filename);
  process.exit(0);
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

  // Load the Cargo.toml file.
  const cargoManifestPath = resolve(__dirname, "../Cargo.toml");
  const cargoToml = tomlJson({
    fileUrl: cargoManifestPath,
  }) as CargoToml;

  // Update the version in the Cargo.toml file.
  writeFileSync(
    cargoManifestPath,
    readFileSync(cargoManifestPath, "utf8").replace(
      // https://regex101.com/r/PLmbXb/1
      /^version(\s*)=(\s*)"[^"]+"/m,
      `version$1=$2"${version}"`,
    ),
  );

  // Build the hyperdrive-wasm files.
  console.log("Building package...");
  const buildProcessResult = spawnSync(
    "npx",
    ["wasm-pkg-build", "--modules", "cjs,esm-sync", "--out-dir", TMP_DIR],
    {
      stdio: "inherit",
    },
  );

  // Throw an error if the build failed.
  if (buildProcessResult.error) {
    throw buildProcessResult.error;
  }

  // Copy generated files to the output directory.
  const filePrefix = cargoToml.package.name.replaceAll("-", "_");
  const fileNames = [
    {
      from: `${filePrefix}_worker.js`,
      to: `${filePrefix}.js`,
    }, // esm-sync
    {
      from: `${filePrefix}.js`,
      to: `${filePrefix}.cjs`,
    }, // cjs
    {
      from: `${filePrefix}.d.ts`,
      to: `${filePrefix}.d.ts`,
    }, // types
    {
      from: `${filePrefix}_bg.wasm`,
      to: `${filePrefix}_bg.wasm`,
    }, // wasm for cjs
  ];
  fileNames.forEach(({ from, to }) => {
    renameSync(resolve(TMP_DIR, from), resolve(outDir, to));
  });

  // Remove the temporary build files.
  console.log("Removing temporary build files...");
  rmSync(TMP_DIR, { recursive: true });

  console.log("Creating package.json...");
  const packageJson = buildPackageJsonFromCargoToml(cargoToml, fileNames);

  // Save the package.json to the output directory.
  writeFileSync(
    resolve(outDir, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );

  // Release the lockfile.
  release();
  console.log("Done!");
}

/**
 * Generates a package.json given a list of generated files.
 *
 * @param cargoToml The parsed Cargo.toml file.k
 * @param fileNames A list of generated files where each item contains the
 *   "from" (the original file name) and "to" (the desired file name in the
 *   output directory) properties.
 *
 * @returns The generated package.json object.
 */
function buildPackageJsonFromCargoToml(
  cargoToml: CargoToml,
  fileNames: { from: string; to: string }[],
): PackageJson {
  const filePrefix = cargoToml.package.name.replaceAll("-", "_");
  // Create the package.json.
  const packageJson: PackageJson = {
    name: `@delvtech/${cargoToml.package.name}`,
    collaborators: cargoToml.package.authors.filter(Boolean), // remove empty strings
    version: cargoToml.package.version,
    license: cargoToml.package.license,
    files: fileNames.map(({ to }) => to),
    sideEffects: ["./snippets/*"],
    type: "module",
    // Add a main field for improved commonjs compatibility.
    main: `${filePrefix}.cjs`,
    types: `${filePrefix}.d.ts`,
    // Add exports for both ESM and CJS compatibility for modern node versions.
    exports: {
      ".": {
        default: {
          require: `./${filePrefix}.cjs`,
          import: `./${filePrefix}.js`,
          types: `./${filePrefix}.d.ts`,
        },
      },
    },
    // Explicitly set the publishConfig access to public to ensure it's published
    // by changesets.
    publishConfig: {
      access: "public",
    },
  };

  return packageJson;
}
