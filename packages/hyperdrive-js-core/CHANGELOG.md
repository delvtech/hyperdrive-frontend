# @delvtech/hyperdrive-js-core

## 3.0.3

### Patch Changes

- 40b8f1b: Return bigint instead of number for getLpApy

## 3.0.1

### Patch Changes

- 8e77c04: Add `earliestBlock` option to `ReadModel` and bump `evm-client-viem` version to use `eth_getLogs` rather than `eth_getFilterLogs`.
- Updated dependencies [4e841fc]
  - @delvtech/hyperdrive-artifacts@1.0.18

## 3.0.0

### Major Changes

- b26e00b: 🚨 **Breaking Change**: Upgraded to Hyperdrive `v1.0.16`. The updated models, e.g. `ReadHyperdrive` are no longer compatible for `<=1.0.14` contracts. To continue using the SDK with `<=1.0.14` contracts, import the corresponding model from the `/v1.0.14` import path. E.g., `import { ReadHyperdrive_v1_0_14 } from "@delvtech/hyperdrive-viem/v1.0.14"`.

### Minor Changes

- 19814a4: Add getKind to ReadHyperdrive

### Patch Changes

- Updated dependencies [c5a369d]
- Updated dependencies [b26e00b]
- Updated dependencies [eefe0fc]
- Updated dependencies [c5a369d]
  - @delvtech/fixed-point-wasm@0.0.4
  - @delvtech/hyperdrive-wasm@0.15.3
  - @delvtech/hyperdrive-artifacts@1.0.16

## 2.4.3

### Patch Changes

- Updated dependencies [e4f7227]
  - @delvtech/hyperdrive-artifacts@0.4.0

## 2.4.2

### Patch Changes

- Updated dependencies [e50602e]
- Updated dependencies [e50602e]
- Updated dependencies [ac419ee]
- Updated dependencies [09ef9ec]
- Updated dependencies [ac419ee]
- Updated dependencies [e50602e]
- Updated dependencies [ac419ee]
  - @delvtech/fixed-point-wasm@0.0.3
  - @delvtech/hyperdrive-wasm@0.15.2

## 2.4.1

### Patch Changes

- Updated dependencies [5af0afa]
- Updated dependencies [5af0afa]
- Updated dependencies [5af0afa]
  - @delvtech/fixed-point-wasm@0.0.2

## 2.4.0

### Minor Changes

- fc33e22: Add MVP Registry and Factory models.

### Patch Changes

- f8f4078: Add errors to exports
- Updated dependencies [b87f8c2]
- Updated dependencies [ff9e8a7]
- Updated dependencies [60bbc40]
  - @delvtech/hyperdrive-wasm@0.15.1
  - @delvtech/fixed-point-wasm@0.0.1

## 2.3.1

### Patch Changes

- 5913c54: Change "APR" to "Apr"
- Updated dependencies [5913c54]
  - @delvtech/hyperdrive-wasm@0.15.0

## 2.3.0

### Minor Changes

- 21dca9c: Cleanup

### Patch Changes

- 21dca9c: Simplify checkpoint retrieval. Add `getCheckpointTime` method.
- b91debc: Fix incorrect openVaultSharePrice argument for previewCloseShort
- Updated dependencies [a9aedb1]
  - @delvtech/hyperdrive-wasm@0.14.4

## 2.2.1

### Patch Changes

- 6a53f5a: Add calcHprGivenApy and calcHprGivenApr methods to hyperwasm
- Updated dependencies [6a53f5a]
  - @delvtech/hyperdrive-wasm@0.14.3

## 2.2.0

### Minor Changes

- 53bfffc: refactor previewCloseShort to add fees and use hyerwasm functions

## 2.1.0

### Minor Changes

- 1564468: Replace simulate call in previewAdddLiquidity with hyperwasm method

### Patch Changes

- 8283062: Refactor getYieldSourceRate to use internal calc based on vaultSharePrice
- c277e22: Add mainnet steth yield source apy

## 2.0.0

### Minor Changes

- 95b0406: Upgrade to the latest v1.0.6 smart contracts

### Patch Changes

- Updated dependencies [95b0406]
  - @delvtech/hyperdrive-artifacts@0.3.0
  - @delvtech/hyperdrive-wasm@0.14.0

## 1.0.1

### Patch Changes

- e43604f: Add getVersion to ReadHyperdrive

## 1.0.0

### Patch Changes

- Updated dependencies [7921848]
  - @delvtech/hyperdrive-artifacts@0.2.0

## 0.0.4

### Patch Changes

- ac4c4ee: Added a getSharesToken getter to ReadWriteHyperdrive.
- Updated dependencies [0696ad7]
  - @delvtech/hyperdrive-artifacts@0.1.0

## 0.0.3

### Patch Changes

- de73cff: Add default maxIterations to core-js
- Updated dependencies [de73cff]
  - @delvtech/hyperdrive-artifacts@0.0.3

## 0.0.2

### Patch Changes

- 1636855: Update license field in packages.json and add publishConfig to artifacts package.json
- Updated dependencies [1636855]
  - @delvtech/hyperdrive-artifacts@0.0.2

## 0.0.1

### Patch Changes

- 3c1bc5b: 🚀
- Updated dependencies [3c1bc5b]
  - @delvtech/hyperdrive-artifacts@0.0.1
