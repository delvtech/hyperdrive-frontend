# Install @delvtech/hyperdrive-wasm from source if it doesn't exist
if [ ! -d packages/hyperdrive-wasm ]; then
  echo "Compiling @delvtech/hyperdrive-wasm from source..."
  yarn workspace hyperdrive-wasm build
fi
