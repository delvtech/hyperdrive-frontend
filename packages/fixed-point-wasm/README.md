# fixed-point-wasm

WASM wrappers for
[fixedpointmath](https://github.com/delvtech/hyperdrive-rs/tree/main/crates/fixedpointmath)
built using [wasm-pack](https://github.com/rustwasm/wasm-pack).

## Installing

```sh
yarn add @delvtech/fixed-point-wasm

# or

npm i @delvtech/fixed-point-wasm
```

## Usage

```ts
import {
  fixed,
  initSync,
  parseFixed,
  wasmBuffer,
} from "@delvtech/fixed-point-wasm";

// Initialize the WASM module
initSync(wasmBuffer);

const amount = 1_000_123456789012345678n;
const fee = parseFixed(0.025); // parse unscaled values

const feeAmount = fixed(amount).mulUp(fee);

console.log(feeAmount.bigint);
// => 25003086419725308642n

console.log(feeAmount.toString()); // or console.log(`${feeAmount}`)
// => "25.003086419725308642"

console.log(feeAmount.toNumber());
// => 25.00308641972531
```

## Custom decimal places

By default, all fixed-point numbers are created with 18 decimal places, but this can be changed by passing a second argument to the `fixed` and `parseFixed` functions.

```ts
const amount = fixed(1.5e6, 6);
console.log(amount.toString());
// => "1.500000"

const fee = parseFixed(0.025, 6);
console.log(fee.toString());
// => "0.025000"
```
