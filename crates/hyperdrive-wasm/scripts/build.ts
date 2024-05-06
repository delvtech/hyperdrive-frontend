#!/usr/bin/env node
import { spawnSync } from "child_process";
import { appendFileSync, readFileSync, rmSync, writeFileSync } from "fs";
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

  // Reset the output dir and build the package with the "@delvtech/" scope
  console.log("Building package...");
  rmSync(outDir, { recursive: true, force: true });
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

  if (buildProcessResult.error) {
    process.exit(1);
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

  // Remove the wasm binary from the package.json files list and add a main
  // field for improved commonjs compatibility.
  const packageJsonPath = resolve(outDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  packageJson.files = packageJson.files.filter(
    (filename: string) => !filename.startsWith("hyperdrive_wasm_bg.wasm"),
  );
  packageJson.main = "hyperdrive_wasm.js";
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Remove the .gitignore, we want the compiled wasm to be checked in
  rmSync(resolve(outDir, ".gitignore"));
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
