// NOTE: Make sure to add the hyperwasm version number to the end of the import.
// Adding a query parameter to the import path will cause the esm cache to be
// invalidated and the latest version of the wasm package will be loaded.
// @ts-ignore
import * as hyperwasm from "@delvtech/hyperdrive-wasm?v0.14.2";

hyperwasm.initSync(hyperwasm.wasmBuffer);

export { hyperwasm };
