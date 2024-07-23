import { fixed, initSync, wasmBuffer } from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

// bigints

const totalSupply = 22950342684077248430458n;
const sharePrice = 1094205545459194143n;
const totalSupplyInBase = fixed(totalSupply).mulDown(sharePrice);

console.log(`Total supply in base: ${totalSupplyInBase.bigint}`);
// => Total supply in base: 25112392235106171381320

// strings and numbers

const amount = "1_000.123456789012345678e18";
const fee = 0.025e18;
const feeAmount = fixed(amount).mulUp(fee);

console.log(`Fee amount: ${feeAmount}`);
// => Fee amount: 25.003086419725308642
