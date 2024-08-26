---
"@delvtech/fixed-point-wasm": patch
---

Added support for negative numbers, added support for base prefixes in strings, e.g., `parseFixed('0xff')`, changed the value returned from `.valueOf()` to be the string representation of the fixed-point number rather than the scaled bigint. With this change, you can now use the `+` or `-` unary operators as shorthand for `.toNumber()`, e.g., `+parseFixed(1.5)`.
