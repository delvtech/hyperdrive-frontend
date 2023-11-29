// Adding a query parameter to the import path will cause the esm cache to be invalidated.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as hyperwasm from "@delvtech/hyperdrive-wasm?v0.2.0";

hyperwasm.initSync(hyperwasm.wasmBuffer);

export { hyperwasm };
