# Hyperdrive SDK

A vanilla TypeScript SDK containing everything you need to start working with
the Hyperdrive AMM.

## Installation

Install `@hyperdrive/sdk` and its [viem](https://viem.sh) peer dependency.

Npm:

```bash
npm i @hyperdrive/sdk viem
```

Yarn:

```bash
yarn add @hyperdrive/sdk viem
```

## Configure Hyperdrive

First, configure your desired hyperdrive address to be used by the SDK, and the
clients you want to use for reading/writing to the Ethereum network.

```ts
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { configureHyperdrive } from "@hyperdrive/sdk";

export const hyperdrive = configureHyperdrive({
  hyperdriveAddress: "0x.....",
  hyperdriveMathAddress: "0x.....",
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  },
});
```

## You're good to go!

Use the SDK! You can now import and use the Hyperdrive SDK throughout your app.

```ts
(async function () {
  const fixedRate = await hyperdrive.pool.getFixedRate();
  const myLongs = await hyperdrive.portfolio.getActiveLongs({ who: "0x..." });
})();
```
