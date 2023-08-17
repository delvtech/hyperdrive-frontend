# Hyperdrive Queries

Hyperdrive Queries is a collection of query generators designed to work
seamlessly with @tanstack/query, eg: React/Svelte/Solid/Vue.

- **Queries**

## Installation

Install `@hyperdrive/queries` and its `viem` peer dependency.

Npm:
`npm i @hyperdrive/queries viem`

Yarn:
`yarn add @hyperdrive/queries viem`

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
