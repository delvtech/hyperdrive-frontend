import { fixed, initSync, wasmBuffer } from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

const a = fixed(-100e18);
const b = a.abs();

console.table({
  a: a.toString(),
  b: b.toString(),
  equalValue: b.eq(fixed(100e18)),
});
