import * as fixedPoint from "@delvtech/fixed-point-wasm";

fixedPoint.initSync(fixedPoint.wasmBuffer);

export { FixedPoint, fixed, parseFixed } from "@delvtech/fixed-point-wasm";
