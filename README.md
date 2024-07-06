[![License](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](https://github.com/delvtech/hyperdrive-frontend/blob/master/LICENSE)
[![Static Badge](https://img.shields.io/badge/DELV-Terms%20Of%20Service-orange)](https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf)

## hyperdrive-frontend-monorepo

A TypeScript monorepo containing apps and packages for integrating and
interacting with Hyperdrive.

Powered by [TurboRepo](https://turbo.build).

## What is inside?

Apps

- [hyperdrive-trading](apps/hyperdrive-trading/) - A simple frontend for interacting with Hyperdrive.
- [hyperdrive-sdk-docs](apps/hyperdrive-sdk-docs/) - Docs site for the Hyperdrive SDK.

Packages

- [@delvtech/hyperdrive-js-core](packages/hyperdrive-js-core/) - Hyperdrive SDK core logic.
- [@delvtech/hyperdrive-viem](packages/hyperdrive-viem/) - Viem bindings for `@delvtech/hyperdrive-js-core`.
- [@delvtech/hyperdrive-artifacts](packages/hyperdrive-artifacts/) - ABIs and bytecode for Hyperdrive contracts.
- [@delvtech/fixed-point-wasm](packages/hyperdrive-artifacts/) - Wasm bindings for the [fixedpointmath](https://github.com/delvtech/hyperdrive-rs/tree/main/crates/fixedpointmath) Rust crate.
- [@delvtech/hyperdrive-wasm](packages/hyperdrive-artifacts/) - Wasm bindings for the [Hyperdrive Rust SDK](https://github.com/delvtech/hyperdrive-rs).
- [@hyperdrive/appconfig](packages/hyperdrive-appconfig/) - Hyperdrive static metadata by chain (eg: poolConfig, name, symbol, decimal, etc.)

Crates

- [delv-core](crates/delv-core/) - Core utilities shared across the other crates.
- [fixed-point-wasm](crates/fixed-point-wasm/) - The Rust crate that compiles to the `@delvtech/fixed-point-wasm` package.
- [hyperdrive-wasm](crates/hyperdrive-wasm/) - The Rust crate that compiles to the `@delvtech/hyperdrive-wasm` package.
- [ts-macro](crates/ts-macro/) - An attribute macro for generating TypeScript bindings from Rust structs.
- [ts-type](crates/ts-type/) - A library for generating minimal ASTs for TypeScript types from Rust types and/or TypeScript type strings.

### Installation

Install dependencies and build packages.

**Note:** The following two commands must be run from the **root directory** of the
monorepo before interacting with any apps or packages.

```bash
yarn
yarn run build:packages
```

If you're working on the `@delvtech/hyperdrive-wasm` package, you will need to
have the [Rust](https://www.rust-lang.org/) toolchain and
[Forge](https://github.com/foundry-rs/foundry#installatio://github.com/foundry-rs/foundry#installation)
installed to compile it. You can install it by running:

- [Install Rust](https://www.rust-lang.org/tools/install)
- [Install Forge](https://book.getfoundry.sh/getting-started/installation)

Then, run the following command from the root directory of the monorepo:

```bash
yarn run build:crates
```

### Environment variables

Some projects in this monorepo require environment variables. Make sure to
create a `.env` file according to the project's `.env.sample` when building or
doing development.

### Where to now?

Check out the list of [apps and packages](#what-is-inside) above.

### Creating a release

This repo uses [changesets](https://github.com/changesets/changesets) to manage
versioning and changelogs. This means you shouldn't need to manually change of
the internal package versions.

Before opening a PR, run `yarn changeset` and follow the prompts to describe the
changes you've made. This will create a changeset file that should be committed.

As changesets are committed to the `main` branch, the [changesets github
action](https://github.com/changesets/action) in the release workflow will
automatically keep track of the pending `package.json` and `CHANGELOG.md`
updates in an open PR titled `chore: version packages`.

Once this PR is merged, the release workflow will be triggered, creating new
tags and github releases, and publishing the updated packages to NPM. **These
PRs should be carefully reviewed!**

# Disclaimer

The language used in this code and documentation is not intended to, and does not, have any particular financial, legal, or regulatory significance.

---

Copyright © 2024 DELV

Licensed under the GNU Affero General Public License Version 3.0 (the "OSS License").

By accessing or using this code, you signify that you have read, understand and agree to be bound by and to comply with the [OSS License](https://www.gnu.org/licenses/gpl-3.0.html) and [DELV's Terms of Service](https://delv-public.s3.us-east-2.amazonaws.com/delv-terms-of-service.pdf). If you do not agree to those terms, you are prohibited from accessing or using this code.

Unless required by applicable law or agreed to in writing, software distributed under the OSS License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the OSS License and the DELV Terms of Service for the specific language governing permissions and limitations.
