# hyperdrive-wasm

WASM wrappers for
[hyperdrive-rs](https://github.com/delvtech/hyperdrive/tree/main/crates/hyperdrive-math)
built using [wasm-pack](https://github.com/rustwasm/wasm-pack).

## Installing

```sh
yarn add @delvtech/hyperdrive-wasm

# or

npm i @delvtech/hyperdrive-wasm
```

## Usage

```ts
import * as hyperwasm from "@delvtech/hyperdrive-wasm";

const apr = hyperwasm.getFixedApr(poolInfo, poolConfig); // => '0.034999999999999999'
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
