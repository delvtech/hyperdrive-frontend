# Viem integrations for the Hyperdrive SDK

Viem adapter for the [@hyperdrive/sdk](/packages/hyperdrive-sdk/).

### Installation

```bash
npm install @hyperdrive/sdk-viem
```

### Quick Start

```typescript
import { ViemReadHyperdrive } from "@hyperdrive/sdk-viem";
import { publicClient } from "./client";

const hyperdrive = new ViemReadHyperdrive({
  address: "0x...", // hyperdrive contract address
  publicClient,
});

const myLongs = hyperdrive.getOpenLongs("0x...");
```
