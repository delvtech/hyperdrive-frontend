#!/bin/bash
  set -e

# Wrapping in a subshell to avoid changing the current directory
(
  cd $(dirname $0)/..


  rm -rf pkg

  # Build the package with wasm-pack and add the "@delvtech/" scope to the package
  wasm-pack build --target web --scope delvtech

  # Move into the built package directory
  cd pkg

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

  # Create a tarball of the package
  npm pack
)
