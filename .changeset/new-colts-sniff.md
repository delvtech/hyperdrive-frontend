---
"@delvtech/fixed-point-wasm": patch
---

Added support for CJS and removed the need to initiate the package (e.g., `initSync(wasmBuffer)`). This also fixes errors related to a missing '.wasm' module in frameworks like Next.
