# Hyperdrive Queries

Hyperdrive Queries is a TypeScript SDK which provides an easy way to interact
with the Hyperdrive AMM in both Web and NodeJS environments.

## What's included

- **TypeScript SDK** A VanillaJS library containing everything you need to start
  working with Hyperdrive.

- **Queries** a collection of query generators designed to work
  seamlessly with @tanstack/query, eg: React/Svelte/Solid/Vue.

## Installation

Install `@hyperdrive/queries` and its `viem` peer dependency.

Npm:
`npm i @hyperdrive/queries viem`

Yarn:
`yarn add @hyperdrive/queries viem`

#### TypeScript usage:

```ts
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { configureHyperdrive } from "@hyperdrive/queries";

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

#### React hook:

```ts
import { useQuery } from "@tanstack/react-query";
import { PublicClient } from "viem";
import { getPoolConfigQuery } from "@hyperdrive/queries";

function usePoolConfig(
  hyperdriveAddress: `0x${string}`,
  publicClient: PublicClient,
) {
  return useQuery(getPoolConfigQuery({ hyperdriveAddress, publicClient }));
}
```

#### React hook w/ custom `select`:

```ts
import { useQuery } from "@tanstack/react-query";
import { PublicClient } from "viem";
import { getPoolConfigQuery } from "@hyperdrive/queries";

function useBaseToken(
  hyperdriveAddress: `0x${string}`,
  publicClient: PublicClient,
) {
  return useQuery({
    ...getPoolConfigQuery({ hyperdriveAddress, publicClient }),
    select: (poolConfig) => poolConfig.baseToken,
  });
}
```
