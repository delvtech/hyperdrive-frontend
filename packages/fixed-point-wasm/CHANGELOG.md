# @delvtech/fixed-point-wasm

## 0.0.8

### Patch Changes

- a2fc913: Added support for CJS and removed the need to initiate the package (e.g., `initSync(wasmBuffer)`). This also fixes errors related to a missing '.wasm' module in frameworks like Next.

## 0.0.7

### Patch Changes

- c9acbb5: Fixed the `trailingZeros` option of the `format` method to actually be `false` by default as its doc comment states.
- 18482c3: Add `absDiff` method
- c9acbb5: Added `toHex()` method.
- c605fa0: Added support for negative exponents to `parseFixed`, e.g., `parseFixed(1e-18)`.

## 0.0.6

### Patch Changes

- 716c6f7: Add `.abs()` method.

## 0.0.5

### Patch Changes

- 66133b5: Fix negative number parsing for strings and `parseFixed`
- 3099256: Fix `toString()` for instances with `0` decimals.

## 0.0.4

### Patch Changes

- c5a369d: Added support for negative numbers, added support for base prefixes in strings, e.g., `parseFixed('0xff')`, changed the value returned from `.valueOf()` to be the string representation of the fixed-point number rather than the scaled bigint. With this change, you can now use the `+` or `-` unary operators as shorthand for `.toNumber()`, e.g., `+parseFixed(1.5)`.
- c5a369d: Bumped deps

## 0.0.3

### Patch Changes

- e50602e: Added an optional `decimals` arg to all methods to automatically convert non-`FixedPoint` values in arguments for `FixedPoint` methods. E.g., instead of `fixed(sixDecimalBigint, 6).mul(fixed(otherSixDecimalBigint, 6))`, you can now do `fixed(sixDecimalBigInt, 6).mul(otherSixDecimalBigInt, 6)`.
- e50602e: Fixed error formatting
- ac419ee: Added a new `formatCurrency` method and a `percent` option to the `format` method.
- ac419ee: Added comparison methods: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `min`, `max`, `clamp`
- e50602e: Fixed handling of `FixedPoint` instances in the creation of new `FixedPoint` instances. E.g., `parseFixed(parseFixed(0.1234), 2).toString()` will now equal `"0.12"`. Before, creating a `FixedPoint` from another `FixedPoint` would scale the value twice.
- ac419ee: Added `format` method

## 0.0.2

### Patch Changes

- 5af0afa: Added a `parseFixed` function for unscaled decimal values.
- 5af0afa: All value argument types updated `FixedPoint | bigint | number | string`.
- 5af0afa: Added support for custom decimals.

## 0.0.1

### Patch Changes

- ff9e8a7: Initial release
