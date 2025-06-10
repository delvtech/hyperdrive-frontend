# Building the Hyperdrive UI

This guide will help you build the Hyperdrive UI from source. The UI is built
using React and TypeScript, and it uses Vite as the build tool.

- [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Working in a Monorepo](#working-in-a-monorepo)
- [Building from Source](#building-from-source)
  - [1. Install dependencies](#1-install-dependencies)
  - [2. Build local packages](#2-build-local-packages)
  - [3. Add environment variables](#3-add-environment-variables)
  - [4. Start the development server](#4-start-the-development-server)
  - [5. Build for production](#5-build-for-production)


## Prerequisites

### Requirements

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 20 or later)
- [Yarn](https://yarnpkg.com) (version 1)

You can install Node.js using [nvm](https://github.com/nvm-sh/nvm). After
following the [installation
instructions](https://github.com/nvm-sh/nvm#installing-and-updating), run the
following commands to install and use Node.js 20.x:

```sh
nvm install 20
nvm use # run from the root of the project
```

If Yarn is not already installed, you can install it using npm:

```sh
npm install --global yarn
```

### Working in a Monorepo

In a [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces) monorepo,
the root [`package.json`](./package.json) file contains a list of workspaces,
each of which is it's own package with it's own `package.json` file.

You can work with the root [`package.json`](./package.json) mostly like you
would with any other:

```sh
yarn <script-name>

# use the -W flag when installing root dependencies
yarn -W add <package-name>
```

To target a specific package, use the `workspace` command:

```sh
yarn workspace <package-name> <script-name>
yarn workspace <package-name> add <package-name>
```

## Building from Source

> [!IMPORTANT]
>
> All commands in the following sections should be run from the root of the
> monorepo.

### 1. Install dependencies

```sh
yarn
```

### 2. Build local packages

```ts
yarn build:packages
```

### 3. Add environment variables

The UI uses environment variables for configuration which are defined in the
[`.env`](./apps/hyperdrive-trading/.env) file. Create one using the
[`.env.example`](./apps/hyperdrive-trading/.env.example) file as a template:

```sh
cp apps/hyperdrive-trading/.env.example apps/hyperdrive-trading/.env
```

Fill in at least one RPC URL and any optional variables you want to set. You can
point to an external RPC API like [Alchemy](https://www.alchemy.com), to a local
node like [`anvil`](https://getfoundry.sh/anvil/overview), or find a public RPC
endpoint on [ChainList](https://chainlist.org).

### 4. Start the development server

```sh
yarn workspace hyperdrive-trading dev
```

Once the server is running, visit [http://localhost:5173](http://localhost:5173)
in your web browser to see the UI.

### 5. Build for production

To build the UI for production, double check your environment variables in
[`.env`](./apps/hyperdrive-trading/.env) then run:

```sh
yarn workspace hyperdrive-trading build
```

This will create a static site in the
[`apps/hyperdrive-trading/dist`](./apps/hyperdrive-trading/dist) directory.