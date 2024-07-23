import {
  fixed,
  initSync,
  parseFixed,
  randomFixed,
  wasmBuffer,
} from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

// -----------------------------------------------------------------------------
// use `fixed` with values that are already scaled

const totalSupply = 22950342684077248430458n;
const sharePrice = 1094205545459194143n;
const totalSupplyInBase = fixed(totalSupply).mulDown(sharePrice);

console.log(`Total supply in base: ${totalSupplyInBase.bigint}`);
// => Total supply in base: 25112392235106171381320

// -----------------------------------------------------------------------------
// use `parseFixed` with unscaled decimal values

const amount = "1_000.123456789012345678";
const fee = 0.025;
const feeAmount = parseFixed(amount).mulUp(parseFixed(fee));

console.log(`Fee amount: ${feeAmount}`);
// => Fee amount: 25.003086419725308642

// -----------------------------------------------------------------------------
// use `randomFixed` to generate a random fixed-point number

let rand = randomFixed({
  min: 1e18,
  max: 100e18,
});
console.log(`Random: ${rand}`);
