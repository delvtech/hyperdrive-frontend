import { IERC4626Hyperdrive } from "@delvtech/hyperdrive-artifacts/IERC4626Hyperdrive";
import { MockERC4626Hyperdrive } from "@delvtech/hyperdrive-artifacts/MockERC4626Hyperdrive";

export const erc4626HyperdriveAbi = IERC4626Hyperdrive.abi;
export type Erc4626HyperdriveAbi = typeof erc4626HyperdriveAbi;

export const mockErc4626HyperdriveAbi = MockERC4626Hyperdrive.abi;
export type MockErc4626HyperdriveAbi = typeof mockErc4626HyperdriveAbi;
