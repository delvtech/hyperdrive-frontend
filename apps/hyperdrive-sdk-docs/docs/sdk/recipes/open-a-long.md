---
id: long
title: Open a Long
---

## Overview

When the trader enters a long position, they are typically long on the bond price. They have purchased bonds at a discount, with a set maturity date. The lower the bond price, the higher the fixed return that the trader is getting, because they’re paying less money now for more base asset at maturity. By buying bonds, they bring the bond price up and the fixed rate down.

## Usage

### Create Hyperdrive SDK instance using Viem

```tsx {18}
import { ViemReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { publicClient, walletClient } from "./clients";

export const hyperdrive = new ViemReadWriteHyperdrive({
  address: `0x...`,
  mathAddress: `0x...`,
  publicClient,
  walletClient,
});
```

### Open a long, wait for the tx to be mined, then grab the result

```tsx
const { maturityTime, bondProceeds } = await hyperdrive.openLong({
  baseAmount,
  bondAmountOut,
  destination,
});
```

### Open a long and grab the submitted txHash

openLong can also be called with [ContractWriteOptions](/docs/sdk/api-reference/interfaces/ContractWriteOptionsWithCallback) that allows you to specify a callback for when the transaction is submitted. A custom cache can also be passed in.

```ts
await hyperdrive.openLong({
  baseAmount,
  bondAmountOut,
  destination,
  chache: customSdkCache,
  id: chainId.toString(),
  options: {
    onSubmitted: (txHash) => {
      console.log(`txHash: ${txHash}`);
    },
  },
});
```

## Input

| Params        | Description                                                                                 | Optional? |
| ------------- | ------------------------------------------------------------------------------------------- | --------- |
| baseAmount    | The amount of base asset supplied to the position                                           | No        |
| bondAmountOut | The amount of bonds to send to the destination                                              | No        |
| destination   | The account opening the position                                                            | No        |
| asUnderlying  | TODO: come up with good comment for this                                                    | Yes       |
| options       | [ContractWriteOptions](/docs/sdk/api-reference/interfaces/ContractWriteOptionsWithCallback) | Yes       |
| id            | Custom id for this instance of hyperdrive                                                   | Yes       |

## Output

| Params       | Description                           |
| ------------ | ------------------------------------- |
| maturityTime | The maturity time of the bonds.       |
| bondProceeds | The amount of bonds the user received |
