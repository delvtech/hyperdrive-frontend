import * as hyperwasm from "@delvtech/hyperdrive-wasm";

hyperwasm.initSync(hyperwasm.wasmBuffer);

export { hyperwasm };
