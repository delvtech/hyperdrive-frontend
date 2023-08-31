# Viem integrations for the Hyperdrive SDK

Viem implementations of the `Contract` and `HyperdriveContract` interfaces from [@hyperdrive/sdk](/packages/hyperdrive-sdk/).

### Installation

```bash
npm install @hyperdrive/viem
```

### Quick Start

```typescript
import { configureHyperdrive, HyperdriveAbi } from "@hyperdrive/sdk";
import { createHyperdriveContract } from "@hyperdrive/sdk-viem";
import { publicClient } from "./client";

const contract = createHyperdriveContract({
  address: "0x...", // hyperdrive contract address
  publicClient,
});

const hyperdrive = configureHyperdrive(contract);

const myLongs = hyperdrive.getOpenLongs("0x...");
```
