[![License](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](https://github.com/delvtech/hyperdrive-frontend/blob/master/LICENSE)
[![Static Badge](https://img.shields.io/badge/DELV-Terms%20Of%20Service-orange)](https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf)

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
- [@delvtech/hyperdrive-wasm](packages/hyperdrive-artifacts/) - Wasm bindings for the [Hyperdrive Rust SDK](https://github.com/delvtech/hyperdrive-rs)
- [@hyperdrive/appconfig](packages/hyperdrive-appconfig/) - Hyperdrive static metadata by chain (eg: poolConfig, name, symbol, decimal, etc.)

### Installation

Install dependencies and build packages.

**Note:** The following two commands must be run from the **root directory** of the
monorepo before interacting with any apps or packages.

```bash
yarn
yarn run build:packages
```

> To use the local version of `@delvtech/hyperdrive-wasm` in the other packages instead of installing it from NPM, it must be built before dependencies are installed. To ensure this happens, a `preinstall` script is included in the root `package.json` that runs `yarn build:crates`.

### Environment variables

Some projects in this monorepo require environment variables. Make sure to
create a `.env` file according to the project's `.env.sample` when building or
doing development.

### Where to now?

Check out the list of [apps and packages](#what-is-inside) above.

### Creating a release

This repo uses [changesets](https://github.com/changesets/changesets) to manage
versioning and changelogs. This means you shouldn't need to manually change of
the internal package versions. (excluding the `@delvtech/hyperdrive-wasm` package. See below)

Before opening a PR, run `yarn changeset` and follow the prompts to describe the
changes you've made. This will create a changeset file that should be committed.

As changesets are committed to the `main` branch, the [changesets github
action](https://github.com/changesets/action) in the release workflow will
automatically keep track of the pending `package.json` and `CHANGELOG.md`
updates in an open PR titled `chore: version packages`.

Once this PR is merged, the release workflow will be triggered, creating new
tags and github releases, and publishing the updated packages to NPM. **These
PRs should be carefully reviewed!**

#### Updating `@delvtech/hyperdrive-wasm`

The `@delvtech/hyperdrive-wasm` package is a bit special because it contains a
pre-built wasm binary. This binary is built using the `wasm-pack` tool, and the
resulting package is published to NPM. This means that the version of the
`@delvtech/hyperdrive-wasm` package in the `package.json` files of the other
packages must be updated manually.

To create a new release of `@delvtech/hyperdrive-wasm`:

1. Update the version in the `Cargo.toml` file of the `hyperdrive-wasm` crate and commit the change.
   
2. Add a new tag for the version with the format `@delvtech/hyperdrive-wasm@vX.Y.Z` (eg: `@delvtech/hyperdrive-wasm@v0.1.0`).
   ```sh
    git tag @delvtech/hyperdrive-wasm@vX.Y.Z
    ```

3. Push the tag to the repository.
   ```sh
    git push --tags
    ```

4. Create a new release on the GitHub repository from the tag. This will trigger the GitHub action to publish the new version to NPM.
   
5. Update the version of `@delvtech/hyperdrive-wasm` in the `package.json` files of the other packages to the new version.
   
6. Follow the steps above to create a new releases for the other packages with changesets.

# Disclaimer

The language used in this code and documentation is not intended to, and does not, have any particular financial, legal, or regulatory significance.

---

Copyright © 2024  DELV

Licensed under the GNU Affero General Public License Version 3.0 (the "OSS License").

By accessing or using this code, you signify that you have read, understand and agree to be bound by and to comply with the [OSS License](https://www.gnu.org/licenses/gpl-3.0.html) and [DELV's Terms of Service](https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf). If you do not agree to those terms, you are prohibited from accessing or using this code.

Unless required by applicable law or agreed to in writing, software distributed under the OSS License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the OSS License and the DELV Terms of Service for the specific language governing permissions and limitations.
