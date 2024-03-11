---
id: "index"
title: "Getting Started"
sidebar_position: 0
custom_edit_url: null
---

# Getting Started

A TypeScript SDK for the [Hyperdrive
AMM](https://www.github.com/delvtech/hyperdrive).

The SDK has been designed to seamlessly integrate with multiple web3 libraries.
Choose one below to get started:

- [Viem Quickstart](#viem-quickstart)
- [Ethers Quickstart](#ethers-quickstart)
- [Web3.js Quickstart](#web3js-quickstart)

## Viem Quickstart

To use the Hyperdrive SDK with [Viem](https://viem.sh):

### Install

```sh
npm i viem @delvtech/hyperdrive-viem
```

### Using the `ReadHyperdrive`

The [`ReadHyperdrive`][ReadHyperdrive-reference] interface provides methods for
fetching data and performing calculations with a public client.

```ts
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { createReadHyperdrive } from "@delvtech/hyperdrive-viem";

// 1. Create a public client
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 2. Create a ReadHyperdrive instance
const hyperdrive = createReadHyperdrive({
  address: "0x...",
  publicClient,
});

// 3. Get data from the contracts
const liquidity = await hyperdrive.getLiquidity();
```

### Using the `ReadWriteHyperdrive`

The [`ReadWriteHyperdrive`][ReadWriteHyperdrive-reference] interface extends
[`ReadHyperdrive`][ReadHyperdrive-reference] with additional methods for sending
transactions with a wallet client.

```ts
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "viem/chains";
import { createReadHyperdrive } from "@delvtech/hyperdrive-viem";

// 1. Create a public client
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// 2. Create a wallet client
const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum!),
});

// 3. Create a ReadWriteHyperdrive instance
const hyperdrive = createReadWriteHyperdrive({
  address: "0x...",
  publicClient,
  walletClient,
});

// 4. Send a transaction
const transactionHash = await hyperdrive.pause(true);
```

## Ethers Quickstart

_Coming soon!_

## Web3.js Quickstart

_Coming soon!_

[ReadHyperdrive-reference]: /docs/sdk/api-reference/classes/ReadHyperdrive "ReadHyperdrive Reference"
[ReadWriteHyperdrive-reference]: /docs/sdk/api-reference/classes/ReadWriteHyperdrive "ReadWriteHyperdrive
    Reference"
