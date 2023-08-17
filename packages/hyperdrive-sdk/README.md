# Hyperdrive SDK

A vanilla TypeScript SDK containing everything you need to start working with
the Hyperdrive AMM.

## Installation

Install `@hyperdrive/sdk` and its `viem` peer dependency.

Npm:
`npm i @hyperdrive/sdk viem`

Yarn:
`yarn add @hyperdrive/sdk viem`

#### TypeScript usage:

```ts
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { configureHyperdrive } from "@hyperdrive/sdk";

const { pool, portolio } = configureHyperdrive({
  hyperdriveAddress: "0x.....",
  hyperdriveMathAddress: "0x.....",
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  },
});

(async function () {
  const poolConfig = await pool.getPoolConfig();
  const poolInfo = await pool.getPoolInfo();
  const fixedRate = await pool.getFixedRate({ blockNumber });
  const userLongs = await portfolio.getActiveLongs({ who })
})();
```
