import * as fixedPoint from "@delvtech/fixed-point-wasm";
import { beforeEach } from "vitest";

beforeEach(() => {
  // This is safe to call multiple times. Internally it will return early if
  // the WASM module has already been initialized.
  fixedPoint.initSync(fixedPoint.wasmBuffer);
});
