# @delvtech/hyperdrive-viem

## 3.0.6

### Patch Changes

- @delvtech/hyperdrive-js-core@3.0.6

## 3.0.5

### Patch Changes

- @delvtech/hyperdrive-js-core@3.0.5

## 3.0.4

### Patch Changes

- Updated dependencies [bd6d2da]
  - @delvtech/hyperdrive-js-core@3.0.4

## 3.0.3

### Patch Changes

- Updated dependencies [40b8f1b]
  - @delvtech/hyperdrive-js-core@3.0.3

## 3.0.2

### Patch Changes

- 5eaa737: Bump evm-client-viem version to 0.6.3 to fix bug causing event args to not be sent in ethGetLogs

## 3.0.1

### Patch Changes

- 8e77c04: Add `earliestBlock` option to `ReadModel` and bump `evm-client-viem` version to use `eth_getLogs` rather than `eth_getFilterLogs`.
- Updated dependencies [8e77c04]
  - @delvtech/hyperdrive-js-core@3.0.1

## 3.0.0

### Major Changes

- b26e00b: 🚨 **Breaking Change**: Upgraded to Hyperdrive `v1.0.16`. The updated models, e.g. `ReadHyperdrive` are no longer compatible for `<=1.0.14` contracts. To continue using the SDK with `<=1.0.14` contracts, import the corresponding model from the `/v1.0.14` import path. E.g., `import { ReadHyperdrive_v1_0_14 } from "@delvtech/hyperdrive-viem/v1.0.14"`.

### Patch Changes

- Updated dependencies [19814a4]
- Updated dependencies [b26e00b]
  - @delvtech/hyperdrive-js-core@3.0.0

## 2.4.3

### Patch Changes

- @delvtech/hyperdrive-js-core@2.4.3

## 2.4.2

### Patch Changes

- @delvtech/hyperdrive-js-core@2.4.2

## 2.4.1

### Patch Changes

- @delvtech/hyperdrive-js-core@2.4.1

## 2.4.0

### Patch Changes

- Updated dependencies [fc33e22]
- Updated dependencies [f8f4078]
  - @delvtech/hyperdrive-js-core@2.4.0

## 2.3.1

### Patch Changes

- Updated dependencies [5913c54]
  - @delvtech/hyperdrive-js-core@2.3.1

## 2.3.0

### Minor Changes

- fece201: Updated the `@delvtech/hyperdrive-core` version and made it fixed.

### Patch Changes

- Updated dependencies [21dca9c]
- Updated dependencies [21dca9c]
- Updated dependencies [b91debc]
  - @delvtech/hyperdrive-js-core@2.3.0

## 0.1.0

### Minor Changes

- 95b0406: Upgrade to the latest v1.0.6 smart contracts

### Patch Changes

- Updated dependencies [95b0406]
  - @delvtech/hyperdrive-js-core@2.0.0
  - @delvtech/hyperdrive-artifacts@0.3.0

## 0.0.5

### Patch Changes

- Updated dependencies [7921848]
  - @delvtech/hyperdrive-artifacts@0.2.0
  - @delvtech/hyperdrive-js-core@1.0.0

## 0.0.4

### Patch Changes

- Updated dependencies [0696ad7]
- Updated dependencies [ac4c4ee]
  - @delvtech/hyperdrive-artifacts@0.1.0
  - @delvtech/hyperdrive-js-core@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [de73cff]
- Updated dependencies [de73cff]
  - @delvtech/hyperdrive-js-core@0.0.3
  - @delvtech/hyperdrive-artifacts@0.0.3

## 0.0.2

### Patch Changes

- 1636855: Update license field in packages.json and add publishConfig to artifacts package.json
- Updated dependencies [1636855]
  - @delvtech/hyperdrive-artifacts@0.0.2
  - @delvtech/hyperdrive-js-core@0.0.2

## 0.0.1

### Patch Changes

- 3c1bc5b: 🚀
- Updated dependencies [3c1bc5b]
  - @delvtech/hyperdrive-js-core@0.0.1
  - @delvtech/hyperdrive-artifacts@0.0.1
