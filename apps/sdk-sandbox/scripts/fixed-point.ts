import {
  fixed,
  initSync,
  parseFixed,
  wasmBuffer,
} from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

const a = fixed(-100e18);
const b = a.abs();

console.table({
  a: a.toString(),
  b: b.toString(),
  equalValue: b.eq(fixed(100e18)),
});

console.log(parseFixed(0.004283196243807873e18).bigint);
