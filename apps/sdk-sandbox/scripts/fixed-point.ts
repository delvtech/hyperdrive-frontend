import { fixed, initSync, wasmBuffer } from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

// const totalSupply = 22950342684077248430458n;
// const sharePrice = 1094205545459194143n;
// const totalSupplyInBase = fixed(totalSupply).mulDown(sharePrice);

// console.log(`Total supply in base: ${totalSupplyInBase.bigint}`);
// // => Total supply in base: 25112392235106171381320

// const fee = parseFixed(0.025);
// const feeAmount = parseFixed("1_000.123456789012345678").mulUp(fee);

// console.log(`Fee amount: ${feeAmount}`);
// // => Fee amount: 25.003086419725308642

console.log(
  fixed(170141183460469231731687303715884105727n).format({
    compactDisplay: "long",
  }),
);
