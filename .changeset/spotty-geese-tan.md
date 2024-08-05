---
"@delvtech/hyperdrive-js-core": major
"@delvtech/hyperdrive-viem": major
---

🚨 **Breaking Change**: Upgraded to Hyperdrive `v1.0.16`. The updated models, e.g. `ReadHyperdrive` are no longer compatible for `<=1.0.14` contracts. To continue using the SDK with `<=1.0.14` contracts, import the corresponding model from the `/v1.0.14` import path. E.g., `import { ReadHyperdrive_v1_0_14 } from "@delvtech/hyperdrive-viem/v1.0.14"`.
