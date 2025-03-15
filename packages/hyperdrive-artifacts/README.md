# @delvtech/hyperdrive-artifacts

Strongly typed build artifacts, including ABIs and Bytecodes, for the
[Hyperdrive AMM](https://github.com/delvtech/hyperdrive) contracts.

## Install

```sh
npm i @delvtech/hyperdrive-artifacts
```

## Usage

Each contract has a corresponding export path located at
`@delvtech/hyperdrive-artifacts/ContractName` which includes an export named
after the contract with the its ABI and bytecode.

```ts
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";

const hyperdriveAbi = IHyperdrive.abi;
const hyperdriveBytecode = IHyperdrive.bytecode;
```

## Generating TypeScript Files

The generate script takes the git ref to clone and compile as the first positional
argument. This means you can change the version of the contract to generate
artifacts for in the `package.json`:

```json
  "generate": "sh scripts/generate.sh v1.0.20"
```

Then run:

```sh
yarn workspace @delvtech/hyperdrive-artifacts generate
```
