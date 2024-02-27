# Viem integrations for the Hyperdrive SDK

Viem adapter for the [@delvtech/hyperdrive-js-core](/packages/hyperdrive-sdk/).

### Installation

```bash
npm install @delvtech/hyperdrive-viem
```

### Quick Start

```typescript
import { ViemReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { publicClient } from "./client";

const hyperdrive = new ViemReadHyperdrive({
  address: "0x...", // hyperdrive contract address
  publicClient,
});

const myLongs = hyperdrive.getOpenLongs("0x...");
```
