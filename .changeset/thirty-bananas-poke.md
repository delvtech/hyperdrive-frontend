---
"@delvtech/fixed-point-wasm": patch
---

Fixed handling of `FixedPoint` instances in the creation of new `FixedPoint` instances. E.g., `parseFixed(parseFixed(0.1234), 2).toString()` will now equal `"0.12"`. Before, creating a `FixedPoint` from another `FixedPoint` would scale the value twice.
