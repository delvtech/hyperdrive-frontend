import {
  fixed,
  initSync,
  parseFixed,
  wasmBuffer,
} from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

// BigInt

const totalSupply = fixed(22950342684077248430458n);
const sharePrice = fixed(1094205545459194143n);
const totalSupplyInBase = totalSupply.mulDown(sharePrice);

console.log("Total supply in base:", totalSupplyInBase.toString());
// => 25112.392235106171381320

// String

const amount = parseFixed("1_000.123456789012345678e18");
const fee = parseFixed("0.025e18");
const feeAmount = amount.mulUp(fee);

console.log("Fee amount:", feeAmount.toString());
// => 25.003086419725308642
