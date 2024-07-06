# fixed-point-wasm

WASM wrappers for
[fixedpointmath](https://github.com/delvtech/hyperdrive-rs/tree/main/crates/fixedpointmath)
built using [wasm-pack](https://github.com/rustwasm/wasm-pack).

## Installing

```sh
yarn add @delvtech/fixed-point-wasm

# or

npm i @delvtech/fixed-point-wasm
```

## Usage

```ts
import { initSync, wasmBuffer, fixed } from "@delvtech/fixed-point-wasm";

fixed.initSync(fixed.wasmBuffer);

const amount = fixed("1_000.123456789012345678");
const fee = fixed("0.025e18");
const feeAmount = amount.mul(fee);
```

## Building

[Install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) then run:

```sh
npm build
```

This will create the node package at `./pkg/`, add a couple exports so the
package can be used in apps without any extra work on the app developer to
enable wasm support, then create a tarball for installation.

## Running the Example

A boilerplate wasm-pack app can be found at `./example`. To run it, first build
then:

```sh
npm install
npm start
```
