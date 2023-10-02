---
id: long
title: Open a Long
---
Looking for a [getting started guide](/docs/sdk/getting-started)?

## Overview
When the trader enters a long position, they are typically long on the bond price. They have purchased bonds at a discount, with a set maturity date. The lower the bond price, the higher the fixed return that the trader is getting, because they’re paying less money now for more base asset at maturity. By buying bonds, they bring the bond price up and the fixed rate down.

## Usage

```tsx {16}
import { ViemReadWriteHyperdrive } from '@hyperdrive/sdk-viem'
import { publicClient, walletClient } from '../clients'
import { HYPERDRIVE_ADDRESS, HYPERDRIVE_MATH_ADDRESS } from '../constants'
import { querySdkCache } from '../cache'
import { chainId } from '../chainId'

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
const { maturityTime, bondProceeds } = await hyperdrive.openLong({baseAmount, bondAmountOut, destination});

// openLong can also be called with ContractWriteOptions that allows you to specify a callback for when the transaction is submitted
// a custom cache can also be passed in
await hyperdrive.openLong({
    baseAmount,
    bondAmountOut,
    destination,
    chache: customSdkCache,
    id: chainId.toString(),
    options: {
        onSubmitted: (txHash) => {
            console.log(`txHash: ${txHash}`)
        }
}});

```
## Input
| Params        | Description                                   | Optional?      |
| ------------- | --------------------------------------------- | -------------- |
| baseAmount    | The amount of base asset supplied to the position | No           |
| bondAmountOut | The amount of bonds to send to the destination    | No           |
| destination   | The account opening the position                    | No           |
| asUnderlying  | TODO: come up with good comment for this           | Yes          |
| options       | [ContractWriteOptions](/docs/sdk/api-reference/interfaces/ContractWriteOptionsWithCallback) | Yes |
| id            | Custom id for this instance of hyperdrive                                           | Yes          |

## Output
| Params        | Description                                   |
| ------------- | --------------------------------------------- |
| maturityTime  | The maturity time of the bonds.        |
| bondProceeds  | The amount of bonds the user received                  |
