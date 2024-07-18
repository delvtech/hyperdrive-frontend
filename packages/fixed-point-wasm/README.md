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

// Use `fixed` with bigints, numbers, or strings
const amount = fixed(1_000_123456789012345678n);
const fee = fixed(0.025e18);

// Perform fixed-point arithmetic
const feeAmount = amount.mulUp(fee);

console.log(feeAmount.bigint);
// => 25003086419725308642n

console.log(feeAmount.toString());
// => "25.003086419725308642"

console.log(feeAmount.toNumber());
// => 25.00308641972531
```
