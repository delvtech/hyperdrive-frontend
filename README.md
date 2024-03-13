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

# Disclaimer

The language used in this code and documentation is not intended to, and does not, have any particular financial, legal, or regulatory significance.

---

Copyright © 2024  DELV

Licensed under the GNU Affero General Public License Version 3.0 (the "OSS License").

By accessing or using this code, you signify that you have read, understand and agree to be bound by and to comply with the [OSS License](https://www.gnu.org/licenses/gpl-3.0.html) and [DELV's Terms of Service](https://elementfi.s3.us-east-2.amazonaws.com/element-finance-terms-of-service.pdf). If you do not agree to those terms, you are prohibited from accessing or using this code.

Unless required by applicable law or agreed to in writing, software distributed under the OSS License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the OSS License and the DELV Terms of Service for the specific language governing permissions and limitations.