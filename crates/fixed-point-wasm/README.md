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
console.log(amount.bigint, amount.toString());
// => 1500000n "1.500000"

const fee = parseFixed(0.025, 6);
console.log(fee.bigint, fee.toString());
// => 25000n "0.025000"
```

## `fixed` function

Use `fixed` with values that are already scaled.

```ts
const totalSupply = 22950342684077248430458n;
const sharePrice = 1094205545459194143n;
const totalSupplyInBase = fixed(totalSupply).mulDown(sharePrice);
console.log(`Total supply in base: ${totalSupplyInBase.bigint}`);
// => Total supply in base: 25112392235106171381320
```

```ts
const fromBigint = fixed(1500000000000000000n);
const fromNumber = fixed(1.5e18);
const fromString = fixed("1.5e18");
const withDecimals = fixed(1.5e6, 6);

console.log(fromBigint.toString());
// => 1.500000000000000000

console.log(fromNumber.toString());
// => 1.500000000000000000

console.log(fromString.toString());
// => 1.500000000000000000

console.log(withDecimals.toString());
// => 1.500000
```

## `parseFixed` function

Use `parseFixed` with unscaled decimal values.

```ts
const amount = "1_000.123456789012345678";
const fee = 0.025;
const feeAmount = parseFixed(amount).mulUp(parseFixed(fee));

console.log(`Fee amount: ${feeAmount}`);
// => Fee amount: 25.003086419725308642
```

```ts
const fromNumber = parseFixed(1.5);
const fromString = parseFixed("1.5");
const withDecimals = parseFixed("1.5", 6);

console.log(fromNumber.toString());
// => 1.500000000000000000

console.log(fromString.toString());
// => 1.500000000000000000

console.log(withDecimals.toString());
// => 1.500000
```

## `randomFixed` function

Use `randomFixed` to generate a random fixed-point number.

```ts
let rand = randomFixed({
  min: 1e18,
  max: 100e18,
});
console.log(`Random: ${rand}`);
```
