---
"@delvtech/fixed-point-wasm": patch
---

Added an optional `decimals` arg to all methods to automatically convert non-`FixedPoint` values in arguments for `FixedPoint` methods. E.g., instead of `fixed(sixDecimalBigint, 6).mul(fixed(otherSixDecimalBigint, 6))`, you can now do `fixed(sixDecimalBigInt, 6).mul(otherSixDecimalBigInt, 6)`.
