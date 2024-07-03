# @hyperdrive/appconfig

Pre-generated metadata for applications that use Hyperdrive.

# Example Usage

```ts
import { forkAppConfig } from "@hyperdrive/appconfig";

// 1. Grab the first hyperdrive in the app config
const { poolConfig, baseToken: baseTokenAddress } =
  forkAppConfig.hyperdrives[0];

// 2. Lookup its base token
const baseToken = forkAppConfig.tokens.find(
  (token) => token.address === baseTokenAddress,
);

// 3. Access token metadata
const { name, symbol, decimals, iconUrl } = baseToken;
```

# Building the package

1. Add .env variables for chains where Hyperdrive is deployed
2. Run the appropriate `gen:local` or `gen:fork` script (see package.json)
3. Run the `build` script.

Note: The `generated/` folder is checked into the repo. You'll want to
regenerate the app configs whenever there are new addresses to obtain metadata
for.

Once generated, build the package to make it available to other projects in the
monorepo.
