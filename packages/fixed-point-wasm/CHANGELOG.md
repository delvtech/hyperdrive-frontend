# @delvtech/fixed-point-wasm

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
