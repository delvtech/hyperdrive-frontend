# hyperdrive-trading

A simple React frontend for interacting with Hyperdrive.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

#### Monorepo dependencies:

- [@delvtech/hyperdrive-viem](../../packages/hyperdrive-viem/)
- [@delvtech/hyperdrive-appconfig](../../packages/hyperdrive-appconfig/)

### Environment variables

This project requires environment variables in `apps/hyperdrive-trading/.env`.
See [.env.example](.env.example) for reference.

## Getting Started

### Install

Install dependencies and build packages.

**Note:** The following two commands must be run from the **root directory** of the
monorepo.

```bash
yarn
yarn run build:packages
```

## Development

The following commands assume your current directory is set to this project.

```bash
cd apps/hyperdrive-trading
```

### Run locally

First, copy the .env.example to .env and you'll need to set the VITE_SEPOLIA_RPC_URL variable to an active rpc url.

Serve with hot reload at <http://localhost:5173>.

```bash
yarn run dev
```

### Build production

Build static site for production using Vite.

```bash
yarn run build
```

### Test

```bash
yarn run test
```

### Lint

```bash
yarn run lint
```

### Typecheck

```bash
yarn run typecheck
```

## License

This project is licensed under the AGPL-3 License.
