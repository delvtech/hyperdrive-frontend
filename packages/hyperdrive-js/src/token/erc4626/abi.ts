import { IERC4626 } from "@delvtech/hyperdrive-artifacts/IERC4626";
import { MockERC4626 } from "@delvtech/hyperdrive-artifacts/MockERC4626";

export const erc4626Abi = IERC4626.abi;
export type Erc4626Abi = typeof erc4626Abi;

export const mockErc4626Abi = MockERC4626.abi;
export type MockErc4626Abi = typeof mockErc4626Abi;
