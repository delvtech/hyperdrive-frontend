#!/bin/bash
set -e

# SETTINGS
default_out_dir="../../packages/hyperdrive-wasm"

# Echo usage
echo ""
echo "+"
echo "|  $0"
echo "|  Generates a wasm package from the hyperdrive-wasm crate."
echo "|"
echo "|  Usage: $0 [out_dir]"
echo "|"
echo "|    out_dir:  The directory to output the wasm package to. (default: $default_out_dir)"
echo "+"
echo ""

out_dir=${1:-$default_out_dir}
absolute_out_dir=$(cd "$(dirname "$out_dir")" && pwd)/$(basename "$out_dir")

# Echo settings
echo "Output directory: $absolute_out_dir"
echo ""

# Reset the output dir and example directory and build the package with the "@delvtech/" scope
echo "Building package..."
rm -rf "$out_dir"
rm -f example/*.tgz
npx wasm-pack build --target web --scope delvtech --out-dir "$out_dir"

# Wrapping in a subshell to avoid changing the current directory
(
  echo "Modifying package for increased compatibility..."

  # Move into the built package directory
  cd "$out_dir"

  # Remove the .gitignore, we want the compiled wasm to be checked in
  rm .gitignore

  # Convert the wasm file to a base64 string
  wasm_b64=$(base64 <hyperdrive_wasm_bg.wasm)

  # Add exports for the base64 encoded wasm file and a buffer of it to provide a
  # way to load the wasm file in the browser without requiring loader
  # configuration in apps.
  echo "export const wasmBase64 = \`${wasm_b64}\`;
  export const wasmBuffer = Uint8Array.from(atob(wasmBase64), (c) =>
    c.charCodeAt(0),
  ).buffer;" >>hyperdrive_wasm.js

  # Add type definitions for the exports
  echo "export const wasmBase64: string;
  export const wasmBuffer: ArrayBufferLike;" >>hyperdrive_wasm.d.ts

  # Add a main field to the package.json file for improved commonjs compatibility
  jq '.main = "hyperdrive_wasm.js"' package.json >package.temp.json
  mv package.temp.json package.json
)
