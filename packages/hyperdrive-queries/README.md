# Hyperdrive Queries

Hyperdrive Queries is a collection of query generators designed to work
seamlessly with @tanstack/query.

Written in TypeScript, it provides an easy way to interact with the Hyperdrive
AMM in a both Web and NodeJS environments.

## Examples

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

#### Node script:

```ts
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { configureHyperdrive } from "@hyperdrive/queries";

const { poolActions, portolioActions } = configureHyperdrive({
  hyperdriveAddress: "0x.....",
  hyperdriveMathAddress: "0x.....",
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  },
});

(async function () {
  const poolConfig = await poolActions.getPoolConfig();
  const poolInfo = await poolActions.getPoolInfo();
  const fixedRate = await poolActions.getFixedRate({ blockNumber });
  const userLongs = await portfolioActions.getActiveLongs({ who })
})();
```
