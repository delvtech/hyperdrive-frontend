# @delvtech/hyperdrive-js-core

A TypeScript SDK for the [Hyperdrive
AMM](https://www.github.com/delvtech/hyperdrive).

> This is a foundational package. If you're looking to use the SDK. Checkout the
> list of [binding packages](#Binding-Packages) below.

This package contains the core logic for interacting with the Hyperdrive
contracts, but doesn't include a web3 library for communicating with a network.
For this, we publish thin binding packages which seamlessly integrate the SDK
with a specific web3 library and re-export everything from the core. This design
enables us to be flexible in the web3 libraries (and even persisitence layers)
we support.

## Binding Packages

Use the Hyperdrive TypeScript SDK with your web3 library of choice:

| Web3 Library                   | Package                                                                                                               |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [Viem](https://viem.sh)        | [`@delvtech/hyperdrive-viem`](https://www.github.com/delvtech/hyperdrive-monorepo/tree/main/packages/hyperdrive-viem) |
| [Ethers](https://ethers.org/)  | `@delvtech/hyperdrive-ethers` _(coming soon)_                                                                         |
| [Web3.js](https://web3js.org/) | `@delvtech/hyperdrive-web3` _(coming soon)_                                                                           |

## Creating a new binding package

To abstract away the web3 library, the SDK uses
[@delvtech/evm-client](https://www.github.com/delvtech/evm-client). Each SDK binding
package uses a corresponding `@delvtech/evm-client` binding package.

| SDK binding package                                                                                                   | EVM Client binding package                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`@delvtech/hyperdrive-viem`](https://www.github.com/delvtech/hyperdrive-monorepo/tree/main/packages/hyperdrive-viem) | [`@delvtech/evm-client-viem`](https://www.github.com/delvtech/evm-client/tree/main/packages/evm-client-viem)     |
| `@delvtech/hyperdrive-ethers` _(coming soon)_                                                                         | [`@delvtech/evm-client-ethers`](https://www.github.com/delvtech/evm-client/tree/main/packages/evm-client-ethers) |
| `@delvtech/hyperdrive-web3` _(coming soon)_                                                                           | `@delvtech/evm-client-web3` _(coming soon)_                                                                      |

Find or create the evm-client package for the web3 library you want to support
and use it to create `CachedReadContract`, `CachedReadWriteContract`, and
`Network` instances.

**Viem `ReadHyperdrive` example:**

```ts
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import {
  SimpleCache,
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import { Address, PublicClient } from "viem";

interface CreateReadHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
  cache?: SimpleCache;
  namespace?: string;
}

export function createReadHyperdrive({
  address,
  publicClient,
  cache,
  namespace,
}: CreateReadHyperdriveOptions): ReadHyperdrive {
  // Create a new ReadHyperdrive using the evm-client bindings for Viem.
  return new ReadHyperdrive({
    contract: createCachedReadContract({
      abi: IHyperdrive.abi,
      address,
      publicClient,
      cache,
      namespace,
    }),
    network: createNetwork(publicClient),
  });
}
```
