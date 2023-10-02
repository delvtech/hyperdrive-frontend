---
id: long
title: Open a Long
---
Looking for a [getting started guide](/docs/sdk/getting-started)?

## Overview
When the trader enters a long position, they are typically long on the bond price. They have purchased bonds at a discount, with a set maturity date. The lower the bond price, the higher the fixed return that the trader is getting, because they’re paying less money now for more base asset at maturity. By buying bonds, they bring the bond price up and the fixed rate down.

## TODO:
- import fake pulic client and wallet client so users know where things come from.
- make id also optional
- have a destructured return value
- have a couple usage examples
 - have another that uses the onSubmitted
 - this method will wait for the transaction to be mined before returning

## Usage

```tsx {14}
import { ViemReadWriteHyperdrive } from '@hyperdrive/sdk-viem'

// Create Hyperdrive SDK instance using Viem
export const hyperdrive = new ViemReadWriteHyperdrive({
    address: HYPERDRIVE_ADDRESS,
    mathAddress: HYPERDRIVE_MATH_ADDRESS,
    publicClient,
    walletClient,
    cache: querySdkCache, // optional
    id: chainId.toString(),
});
// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const {} = await hyperdrive.openLong({baseAmount, bondAmountOut, destination});
```
| Params        | Description                                   | Optional?      |
| ------------- | --------------------------------------------- | -------------- |
| baseAmount    | The amount of base asset supplied to the position | No           |
| bondAmountOut | The amount of bonds to send to the destination    | No           |
| destination   | The account opening the position                    | No           |
| asUnderlying  | TODO: come up with good comment for this           | Yes          |
| options       | [ContractWriteOptions](/docs/sdk/api-reference/interfaces/ContractWriteOptionsWithCallback)                              |     Yes          |
