# @hyperdrive/sdk

A vanilla TypeScript SDK containing everything you need to start working with
the Hyperdrive AMM.

| Library                    | Description                                    |
| -------------------------- | ---------------------------------------------- |
| `@hyperdrive/sdk`          | TypeScript SDK for Hyperdrive                  |
| `@hyperdrive/sdk-viem`     | Viem bindings for the TypeScript SDK           |
| _`@hyperdrive/sdk-ethers`_ | _TODO: Ethers bindings for the TypeScript SDK_ |

## Quickstart (Viem)

Install in your project:

```bash
npm i @hyperdrive/sdk @hyperdrive/sdk-viem viem
```

Configure the Hyperdrive SDK and get the current fixed rate:

```ts
import {
  PublicClient,
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from "viem";
import { mainnet } from "viem/chains";
import { HyperdriveSDK } from "@hyperdrive/sdk";
import {
  HyperdriveContract,
  HypedriveMathContract,
} from "@hyperdrive/sdk-viem";

// 1. Set up your viem clients
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});

// 2. Create contract instances
const hyperdriveContract = new HyperdriveContract({
  publicClient,
  walletClient,
  address: "0x12345",
});
const mathContract = new HyperdriveMathContract({
  publicClient,
  address: "0x67890",
});

// 3. Create Hyperdrive SDK instance
export const hyperdrive = new HyperdriveSdk({
  hyperdriveContract,
  mathContract,
});

(async function () {
  console.log(`The current fixed rate is: ${await hyperdrive.getFixedRate()}`);
})();
```
