import * as fixedPoint from "@delvtech/fixed-point-wasm";

fixedPoint.initSync(fixedPoint.wasmBuffer);

export { fixedPoint };
export const { Fixed, fixed, parseFixed, ln, randInRange } = fixedPoint;
