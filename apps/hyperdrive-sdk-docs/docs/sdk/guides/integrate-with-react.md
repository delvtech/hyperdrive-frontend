---
id: react
title: Integrate with React
---

## Overview

In this short guide, we'll use [Wagmi](https://wagmi.sh) and
[`@delvtech/hyperdrive-viem`](https://github.com/delvtech/hyperdrive-monorepo/tree/main/packages/hyperdrive-viem)
to create `useReadHyperdrive` and `useReadWriteHyperdrive` hooks for React apps.
The steps will be similar for other implementations of the SDK.

### 1. Create a global sdk cache

Create a cache instance that will be used for all SDK interactions.

```ts
import { createLruSimpleCache } from "@delvtech/hyperdrive-viem";

export const sdkCache = createLruSimpleCache({ max: 500 });
```

### 2. Create a `useReadHyperdrive` hook

```ts
import {
  ReadHyperdrive,
  createReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { useChainId, usePublicClient } from "wagmi";
import { sdkCache } from "path/to/sdkCache"; // <- Change to your sdk path

/**
 * Returns a `ReadHyperdrive` instance for a given address.
 */
export function useReadHyperdrive(
  address: `0x${string}` | undefined,
): ReadHyperdrive | undefined {
  // Get the chain id and public client
  const chainId = useChainId();
  const publicClient = usePublicClient();

  // Optionally wrap the instance in useMemo
  return useMemo(() => {
    if (!address || !publicClient) {
      return undefined;
    }

    return createReadHyperdrive({
      address,
      publicClient,
      cache: sdkCache,
      // Use the namespace to prefix cache keys
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient]);
}
```

### 3. Create a `useReadWriteHyperdrive` hook

```ts
import {
  ReadHyperdrive,
  createReadHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { useMemo } from "react";
import { useChainId, usePublicClient, useWalletClient } from "wagmi";
import { sdkCache } from "path/to/sdkCache"; // <- Change to your sdk path

/**
 * Returns a `ReadWriteHyperdrive` instance for a given address.
 */
export function useReadWriteHyperdrive(
  address: `0x${string}` | undefined,
): ReadWriteHyperdrive | undefined {
  // Get the chain id and clients
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  // Optionally wrap the instance in useMemo
  return useMemo(() => {
    if (!address || !publicClient || !walletClient) {
      return undefined;
    }

    return createReadWriteHyperdrive({
      address,
      publicClient,
      walletClient,
      cache: sdkCache,
      // Use the namespace to prefix cache keys
      namespace: chainId.toString(),
    });
  }, [address, chainId, publicClient, walletClient]);
}
```
