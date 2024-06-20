# @delvtech/gopher

A Typescript implementation of the [Gopher Swagger API](https://gopher.test.buildwithsygma.com/swagger/index.html)

### Installation

```bash
npm install viem @delvtech/gopher
```

### Quick Start

```typescript
import {
  api,
  ServerGetFungibleTokensByChainHandlerResponse,
  EntityFungibleToken,
} from "@delvtech/gopher";

let response: ServerGetFungibleTokensByChainHandlerResponse =
  await api.assets.fungibleList().data;

let tokens: EntityFungibleToken[] = response.data;
```
