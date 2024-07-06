import { fixed, Fixed, initSync, wasmBuffer } from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

// BigInt

const totalSupply = new Fixed(22950342684077248430458n);
const sharePrice = new Fixed(1094205545459194143n);
const totalSupplyInBase = totalSupply.mulDown(sharePrice);

console.log("Total supply in base:", totalSupplyInBase.toString());

// String

const amount = fixed("1_000.123456789012345678e18");
const fee = fixed("0.025e18");
const feeAmount = amount.mulUp(fee);

console.log("Fee amount:", feeAmount.toString());
