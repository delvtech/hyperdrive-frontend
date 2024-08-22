import {
  fixed,
  initSync,
  parseFixed,
  wasmBuffer,
} from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

const totalSupply = 22950342684077248430458n;
const sharePrice = 1094205545459194143n;
const totalSupplyInBase = fixed(totalSupply).mulDown(sharePrice);

console.log(`Total supply in base: ${totalSupplyInBase.bigint}`);
// => Total supply in base: 25112392235106171381320

const fee = parseFixed(0.025);
const feeAmount = parseFixed("1_000.123456789012345678").mulUp(fee);

console.log(`Fee amount: ${feeAmount}`);
// // => Fee amount: 25.003086419725308642

console.log(
  `Fee amount: ${feeAmount.formatCurrency({
    decimals: 4,
    rounding: "ceil",
  })}`,
);
// // => Fee amount: $25.0031

const price = 981873174114563822n;
const price1 = fixed(price, 6);
const price2 = fixed(price).mul(parseFixed(1, 6));
console.log("price1", price1.bigint);
// price1 981873174114563822n
console.log("price2", price2.bigint);
// price2 981873n
const price3 = parseFixed(981873n, 18);
console.log("price3", price3.bigint);

// const fixedRatePaid = fixed(-1363359n, 6).div(2363359n, 6);
// console.log("fixedRatePaid", fixedRatePaid.bigint);

const blocks = fixed(7127, 1).div(2).bigint;
console.log("blocks", blocks);
