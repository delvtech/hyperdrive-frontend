#!/usr/bin/env node
import { spawnSync } from "child_process";
import {
  appendFileSync,
  existsSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "fs";
import { readFile } from "fs/promises";
import { basename, resolve } from "path";
import { version } from "../package.json";

const [_, bin, ...args] = process.argv;
const script = basename(bin);

// SETTINGS
const DEFAULT_OUT_DIR = "../../packages/hyperdrive-wasm";

// Log usage
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

async function main() {
  const outDir = resolve(args[0] || DEFAULT_OUT_DIR);
  const backupPath = `${outDir}_backup`;

  // Log settings
  console.log("Version: ", version);
  console.log("Output Directory: ", outDir, "\n");

  // Update the version in the Cargo.toml file
  const cargoManifestPath = resolve(__dirname, "../Cargo.toml");
  writeFileSync(
    cargoManifestPath,
    readFileSync(cargoManifestPath, "utf8").replace(
      // https://regex101.com/r/PLmbXb/1
      /^version(\s*)=(\s*)"[^"]+"/m,
      `version$1=$2"${version}"`,
    ),
  );

  // Create a backup of the previous build if it exists
  backupBuild(outDir, backupPath);

  // Build the package with the "@delvtech/" scope
  console.log("Building package...");
  const buildProcessResult = spawnSync(
    "npx",
    [
      "wasm-pack",
      "build",
      "--target",
      "web",
      "--scope",
      "delvtech",
      "--out-dir",
      outDir,
    ],
    {
      stdio: "inherit",
    },
  );

  // Restore the previous build and exit if the build failed
  if (buildProcessResult.error) {
    restoreBackup(outDir, backupPath);
    process.exit(1);
  }

  // Restore the changelog and remove the previous build if it exists
  if (existsSync(backupPath)) {
    const changelogPath = resolve(backupPath, "CHANGELOG.md");
    if (existsSync(changelogPath)) {
      console.log("Restoring previous changelog...");
      renameSync(changelogPath, resolve(outDir, "CHANGELOG.md"));
    }

    console.log("Removing previous build...");
    rmSync(backupPath, { recursive: true });
  }

  console.log("Modifying package for increased compatibility...");

  // Transform the wasm binary into a base64 string and embed it directly into
  // the module to simplify usage and avoid the need for loader configuration in
  // app bundlers.
  const wasmPath = resolve(outDir, "hyperdrive_wasm_bg.wasm");
  const wasmBase64 = await readFile(wasmPath).then((data) =>
    data.toString("base64"),
  );

  const modulePath = resolve(outDir, "hyperdrive_wasm.js");
  appendFileSync(
    modulePath,
    `export const wasmBase64 = "${wasmBase64}"
  export const wasmBuffer = Uint8Array.from(atob(wasmBase64), (c) =>
    c.charCodeAt(0),
  ).buffer;`,
  );

  // Add type definitions for the added exports
  appendFileSync(
    resolve(outDir, "hyperdrive_wasm.d.ts"),
    `export const wasmBase64: string;
export const wasmBuffer: ArrayBuffer;`,
  );

  // Remove the wasm binary
  rmSync(wasmPath);
  rmSync(resolve(outDir, "hyperdrive_wasm_bg.wasm.d.ts"));

  const packageJsonPath = resolve(outDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

  // Remove the wasm binary from the package.json files list.
  packageJson.files = packageJson.files.filter(
    (filename: string) => !filename.startsWith("hyperdrive_wasm_bg.wasm"),
  );

  // Add a main field for improved commonjs compatibility.
  packageJson.main = "hyperdrive_wasm.js";

  // Explicitly set the publishConfig access to public to ensure it's published
  // by changesets.
  packageJson.publishConfig = { access: "public" };

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Remove the .gitignore, we want the compiled wasm to be checked in
  rmSync(resolve(outDir, ".gitignore"));

  console.log("Done!");
}

function backupBuild(outDir: string, backupPath: string) {
  // Don't overwrite existing backups
  if (!existsSync(outDir) || existsSync(backupPath)) {
    return;
  }

  console.log("Creating backup of previous build at: ", backupPath);
  renameSync(outDir, backupPath);

  // There's an edge case found with the watcher where an npm script is run
  // after the new package.json is created and the backup is still present.
  // When this happens, yarn workspaces will throw an error about having
  // multiple packages with the same name. To avoid this, we temporarily
  // rename the backup package.json to avoid conflicts.
  renameSync(
    resolve(backupPath, "package.json"),
    resolve(backupPath, "package.json.backup"),
  );
}

function restoreBackup(outDir: string, backupPath: string) {
  if (!existsSync(backupPath)) {
    return;
  }

  console.log("Restoring backup of previous build from: ", backupPath);

  if (existsSync(outDir)) {
    rmSync(outDir, { recursive: true });
  }

  renameSync(backupPath, outDir);
  renameSync(
    resolve(outDir, "package.json.backup"),
    resolve(outDir, "package.json"),
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
