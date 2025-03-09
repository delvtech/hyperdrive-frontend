#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import lockfile from "proper-lockfile";
import { CargoToml, PackageJson } from "scripts/types";
import { parse } from "smol-toml";
import { version } from "../package.json";

const __filename = new URL(import.meta.url).pathname;
const __dirname = dirname(__filename);
const script = basename(__filename);

// SETTINGS
const DEFAULT_OUT_DIR = "../../packages/fixed-point-wasm";
const TMP_DIR = "tmp";

// Log usage
console.log(`
+
|  ${script}
|  Generates a wasm package from the fixed-point-wasm crate.
|
|  Usage: ${script} [out_dir]
|
|    out_dir: The output directory for the generated package. (default: ${DEFAULT_OUT_DIR})
+
`);

try {
  const release = await lockfile
    // Lock the script to prevent concurrent builds
    .lock(__filename, {
      retries: 3,
      update: 3_000, // 3 seconds
      stale: 60_000 * 10, // 10 minutes
    });

  const outDir = resolve(process.argv[3] || DEFAULT_OUT_DIR);

  // Log settings
  console.log("Version: ", version);
  console.log("Output Directory: ", outDir, "\n");

  // Load the Cargo.toml file.
  const cargoManifestPath = resolve(__dirname, "../Cargo.toml");
  const cargoTomlSrc = readFileSync(cargoManifestPath, "utf8");
  const cargoToml = parse(cargoTomlSrc) as unknown as CargoToml;

  // Sync the version with the package.json
  cargoToml.package.version = version;
  writeFileSync(
    cargoManifestPath,
    cargoTomlSrc.replace(
      // https://regex101.com/r/PLmbXb/1
      /^version(\s*)=(\s*)"[^"]+"/m,
      `version$1=$2"${version}"`,
    ),
  );

  // Build the wasm package.
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

  // Release the lockfile
  release();
  console.log("Done!");
  process.exit(0);
} catch (err) {
  console.error(err);
  lockfile.unlock(__filename);
  process.exit(1);
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
