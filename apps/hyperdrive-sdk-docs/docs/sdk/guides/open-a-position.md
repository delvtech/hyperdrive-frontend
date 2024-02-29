---
id: position
title: Open a Position
---

## Overview

In this short guide, we'll use a
[`ReadWriteHyperdrive`][ReadWriteHyperdrive-reference] instance to open a long
position, locking in a fixed rate (Read more about [long
positions](https://app.gitbook.com/o/-MXeT9pntmqRJiE1hMf6/s/XxVgcFIHiBW2xa7lepeu/~/changes/11/hyperdrive-overview/position-types/longs-fixed-rates)
in the [Hyperdrive
docs](https://app.gitbook.com/o/-MXeT9pntmqRJiE1hMf6/s/XxVgcFIHiBW2xa7lepeu/~/changes/11/hyperdrive-overview/overview)).
The steps will be similar for short and LP positions.

This guide assumes you've already installed an implementation of the Hyperdrive
TypeScript SDK and created a
[`ReadWriteHyperdrive`][ReadWriteHyperdrive-reference] instance. Checkout the
[Getting Started](/docs/sdk/) guide to learn how.

### 1. Get the current vault share price

We'll start by getting the current share price of the pool using the
[`getPoolInfo`](/docs/sdk/api-reference/classes/ReadHyperdrive#getpoolinfo) method which
will be used as the minimum share price for the open long transaction:

```ts
import { hyperdrive } from "./hyperdrive.ts";

const { vaultSharePrice } = await hyperdrive.getPoolInfo();
```

### 2. Calculate slippage tolerance

Use the
[`previewOpenLong`](/docs/sdk/api-reference/classes/ReadHyperdrive#previewopenlong)
method to get the expected proceeds and adjust to match your slippage tolerance:

```ts
// Import path depends on the Hyperdrive SDK implementation you have installed.
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";

// 1. Preview the transaction
const { bondProceeds } = await hyperdrive.previewOpenLong({
  amountIn: 10000000000000000000000n,
  asBase: true, // <- Or false to deposit share tokens
  decimals: 18,
});

// 2. Adjust by your slippage tolerance
const minBondsOut = adjustAmountByPercentage({
  amount: bondProceeds,
  percentage: 1n, // <- Adjust for your tolerance
  decimals: 18,
  direction: "down",
});
```

### 3. Open the position

Use the [`openLong`](/docs/sdk/api-reference/classes/ReadWriteHyperdrive#openlong) method to
send the transaction with the minimum expected share price and your slippage
tolerance.

```tsx
const pendingTransactionHash = await readWriteHyperdrive.openLong({
  amount: 10000000000000000000000n,
  asBase: true,
  destination: "0x123abc...",
  minSharePrice: vaultSharePrice,
  minBondsOut,
});
```

[ReadWriteHyperdrive-reference]: /docs/sdk/api-reference/classes/ReadWriteHyperdrive
