# @delvtech/hyperdrive-appconfig

Pre-generated metadata for applications that use Hyperdrive.

Note: The data schema in this package may change at any time, and semantic
versioning is not strictly enforced.

# Table of Contents

- [@delvtech/hyperdrive-appconfig](#delvtechhyperdrive-appconfig)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Example Usage](#example-usage)
- [Building the package](#building-the-package)
- [Selector Functions](#selector-functions)
  - [`findBaseToken`](#findbasetoken)
  - [`findHyperdriveConfig`](#findhyperdriveconfig)
  - [`findToken`](#findtoken)
- [Utility Functions](#utility-functions)
  - [`isMainnetChain`](#ismainnetchain)

# Installation

```shell
# npm
npm install @delvtech/hyperdrive-appconfig

# pnpm
pnpm add @delvtech/hyperdrive-appconfig

# Yarn
yarn add @delvtech/hyperdrive-appconfig
```

# Example Usage

```ts
import { appConfig, findBaseToken } from "@delvtech/hyperdrive-appconfig";

// 1. Grab the first hyperdrive in the app config
const firstHyperdrive = appConfig.hyperdrives[0];

// 2. Lookup its base token
const baseToken = findBaseToken({
  hyperdriveChainId: firstHyperdrive.chainId,
  hyperdriveAddress: firstHyperdrive.address,
  appConfig,
});

// 3. Access token metadata
const { name, symbol, decimals, iconUrl } = baseToken;
```

# Building the package

1. Add .env variables for chains where Hyperdrive is deployed
2. Run the appropriate, eg: `gen:local` or `gen:cloudchain` script (see package.json)
3. Run the `build` script.

Note: The `generated/` folder is checked into the repo. You'll want to
regenerate the app configs whenever there are new addresses to obtain metadata
for.

Once generated, build the package to make it available to other projects in the
monorepo.

# Selector Functions

This package exports several selector functions to help you find specific
configurations within the app config. Here's a breakdown of each function:

## `findBaseToken`

Finds the base token configuration for a given Hyperdrive instance.

**Inputs:**

- `hyperdriveChainId`: The chain ID of the Hyperdrive instance
- `hyperdriveAddress`: The address of the Hyperdrive instance
- `appConfig`: The entire app configuration object

**Output:** The TokenConfig object for the base token.

**Errors:** This will throw an error if the base token cannot be found.

**Example:**

```ts
import { appConfig, findBaseToken } from "@delvtech/hyperdrive-appconfig";

const firstHyperdrive = appConfig.hyperdrives[0];

const baseToken = findBaseToken({
  hyperdriveChainId: firstHyperdrive.chainId,
  hyperdriveAddress: firstHyperdrive.address,
  appConfig,
});

const { name, symbol, decimals, iconUrl, ... } = baseToken;
```

## `findHyperdriveConfig`

Finds the Hyperdrive configuration for a given chain ID and address.

**Inputs:**

- `hyperdriveChainId`: The chain ID of the Hyperdrive instance
- `hyperdriveAddress`: The address of the Hyperdrive instance
- `hyperdrives`: The hyperdrives list on the appConfig object

**Output:** The HyperdriveConfig object for the specified Hyperdrive instance.

**Example:**

```ts
import {
  appConfig,
  findHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";

const hyperdriveConfig = findHyperdriveConfig({
  hyperdriveChainId: 1,
  hyperdriveAddress: "0x...",
  hyperdrives: appConfig.hyperdrives,
});

const { name, poolConfig, initializationBlock, withdrawOptions, ... } =
  hyperdriveConfig;
```

## `findToken`

Finds the token configuration for a given chain ID and token address.

Note: When retrieving the base token for a Hyperdrive, it's recommended to use
`findBaseToken` instead of `findToken`. `findBaseToken` is specifically designed
for Hyperdrive configurations and provides more comprehensive functionality. It
not only attempts to resolve the base token directly but also handles cases
where a fallback base token is specified. This ensures you always get the
correct token configuration for the Hyperdrive, even in complex scenarios.

**Inputs:**

- `chainId`: The chain ID of the token
- `tokenAddress`: The address of the token
- `tokens`: The tokens list on the appConfig object

**Output:** The TokenConfig object for the specified token, or `undefined` if not found.

**Example:**

```ts
import { appConfig, findToken } from "@delvtech/hyperdrive-appconfig";

const token = findToken({
  chainId: 1,
  tokenAddress: "0x...",
  tokens: appConfig.tokens,
});

const { name, symbol, decimals, iconUrl, ... } = token;
```

# Utility Functions

## `isMainnetChain`

Determines if a given chain ID corresponds to a mainnet chain. This includes any
mainnet chain, such as Ethereum Mainnet, Linea, Base, etc.

**Input:**

- `chainId`: The chain ID to check

**Output:** A boolean indicating whether the chain is a mainnet chain

**Example:**

```ts
import { appConfig, isMainnetChain } from "@delvtech/hyperdrive-appconfig";

const firstHyperdrive = appConfig.hyperdrives[0];

const isMainnetHyperdrive = isMainnetChain(firstHyperdrive.chainId);

const firstToken = appConfig.tokens[0];
const isMainnetToken = isMainnetChain(firstToken.chainId);
```
