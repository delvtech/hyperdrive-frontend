# @delvtech/hyperdrive-artifacts

Typed build artifacts from the [Hyperdrive
Contracts](https://github.com/delvtech/hyperdrive).

## Building

Run the build script:

```sh
yarn build

# or

sh build.sh
```

## Usage

Each contract will have a corresponding file at
`@delvtech/hyperdrive-artifacts/ContractName` which includes an export named after
the contract with the its ABI and bytecode.

```ts
import { IHyperdrive } from '@delvtech/hyperdrive-artifacts/IHyperdrive';

const hyperdriveAbi = IHyperdrive.abi;
```
