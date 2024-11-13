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
import lockfile from "proper-lockfile";
import { version } from "../package.json";

const script = basename(__filename);

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

lockfile
  // Lock the script to prevent concurrent builds
  .lock(__filename, {
    retries: 3,
    update: 3_000, // 3 seconds
    stale: 60_000 * 10, // 10 minutes
  })
  .then(async (release) => {
    const outDir = resolve(process.argv[3] || DEFAULT_OUT_DIR);
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
    const buildProcessResultEsm = spawnSync(
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
    if (buildProcessResultEsm.error) {
      restoreBackup(outDir, backupPath);
      process.exit(1);
    }

    // Build the package for common js in a tmp directory.
    const buildProcessResultCjs = spawnSync(
      "npx",
      [
        "wasm-pack",
        "build",
        "--target",
        "nodejs",
        "--scope",
        "delvtech",
        "--out-dir",
        resolve(outDir, "tmp"),
      ],
      {
        stdio: "inherit",
      },
    );

    // Restore the previous build and exit if the build failed
    if (buildProcessResultCjs.error) {
      restoreBackup(outDir, backupPath);
      process.exit(1);
    }

    // We only need the module and wasmfile for the CJS build so we grab
    // tme from the tmp directory and then remove the tmp directory.
    renameSync(
      resolve(outDir, "tmp", "hyperdrive_wasm.js"),
      resolve(outDir, "hyperdrive_wasm.cjs"),
    );
    renameSync(
      resolve(outDir, "tmp", "hyperdrive_wasm_bg.wasm"),
      resolve(outDir, "hyperdrive_wasm_bg_cjs.wasm"),
    );
    rmSync(resolve(outDir, "tmp"), { recursive: true });

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

    // For ESM:
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

    // For CJS:
    // Replace the esm wasm file with the cjs wasm file.  CJS can import the
    // wasm file without a bundler.
    rmSync(wasmPath);
    renameSync(resolve(outDir, "hyperdrive_wasm_bg_cjs.wasm"), wasmPath);

    // Add type definitions for the added exports
    appendFileSync(
      resolve(outDir, "hyperdrive_wasm.d.ts"),
      `declare const wasmBase64: string;
declare const wasmBuffer: ArrayBuffer;`,
    );

    // Remove the wasm binary definition file.
    rmSync(resolve(outDir, "hyperdrive_wasm_bg.wasm.d.ts"));

    // Now we'll update the package.json.
    const packageJsonPath = resolve(outDir, "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

    // Add the commonjs module file to the list of files.
    packageJson.files.push("hyperdrive_wasm.cjs");

    // Set the type field to "module"
    packageJson.type = "module";

    // Add a main field for improved commonjs compatibility.
    packageJson.main = "hyperdrive_wasm.cjs";
    packageJson.types = "hyperdrive_wasm.d.ts";

    // Add exports for both ESM and CJS compatibility for modern node versions.
    packageJson.exports = {
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
    };

    // Explicitly set the publishConfig access to public to ensure it's published
    // by changesets.
    packageJson.publishConfig = { access: "public" };

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // Remove the .gitignore, we want the compiled wasm to be checked in
    rmSync(resolve(outDir, ".gitignore"));

    // Release the lockfile
    release();

    console.log("Done!");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    // Ensure the lockfile is released
    lockfile.unlock(__filename);
    process.exit(0);
  });

function backupBuild(outDir: string, backupPath: string) {
  // Don't overwrite existing backups
  if (!existsSync(outDir) || existsSync(backupPath)) {
    return;
  }

  console.log("Creating backup of previous build at: ", backupPath);
  renameSync(outDir, backupPath);

  // There's an edge case where an npm script is run after the new package.json
  // is created and the backup is still present. When this happens, yarn
  // workspaces will throw an error about having multiple packages with the same
  // name. To avoid this, we temporarily rename the backup package.json.
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
