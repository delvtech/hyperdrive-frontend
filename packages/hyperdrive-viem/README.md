# @delvtech/hyperdrive-viem

A [Viem](https://viem.sh) implementation of the [Hyperdrive Typescript SDK](https://hyperdrive-js.delv.tech)

### Installation

```bash
npm install viem @delvtech/hyperdrive-viem
```

### Quick Start

```typescript
import { createReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { publicClient } from "./client";

const hyperdrive = createReadHyperdrive({
  address: "0x...", // hyperdrive contract address
  publicClient,
});

const myLongs = hyperdrive.getOpenLongs({
  account: "0x..."
});
```
