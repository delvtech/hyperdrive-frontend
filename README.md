## hyperdrive-frontend-monorepo

A TypeScript monorepo containing apps and packages for integrating and
interacting with Hyperdrive.

Powered by [TurboRepo](https://turbo.build).

## What is inside?

Apps

- [hyperdrive-trading](apps/hyperdrive-trading/) - A simple frontend for interacting with Hyperdrive
- [hyperdrive-sdk-docs](apps/hyperdrive-sdk-docs/) - Docs site for the Hyperdrive SDK

Packages

- [@delvtech/hyperdrive-js-core](packages/hyperdrive-js-core/) - Hyperdrive SDK core logic
- [@delvtech/hyperdrive-viem](packages/hyperdrive-viem/) - Viem bindings for `@delvtech/hyperdrive-js-core`
- [@delvtech/hyperdrive-artifacts](packages/hyperdrive-artifacts/) - ABIs and bytecode for Hyperdrive contracts
- [@hyperdrive/appconfig](packages/hyperdrive-appconfig/) - Hyperdrive static metadata by chain (eg: poolConfig, name, symbol, decimal, etc.)
- [@hyperdrive/cli](packages/hyperdrive-cli/) - Use Hyperdrive from the command line. (Experimental)

### Installation

Install dependencies and build packages.

**Note:** The following two commands must be run from the **root directory** of the
monorepo before interacting with any apps or packages.

```bash
yarn
yarn run build:packages
```

### Environment variables

Some projects in this monorepo require environment variables. Make sure to
create a `.env` file according to the project's `.env.sample` when building or
doing development.

### Where to now?

Check out the list of [apps and packages](#what-is-inside) above.

## License

This project is licensed under the AGPL-3 License.
