import * as fixedPoint from "@delvtech/fixed-point-wasm";

fixedPoint.initSync(fixedPoint.wasmBuffer);

export { fixedPoint };
export const { fixed, FixedPoint, ln, parseFixed, randomFixed } = fixedPoint;
