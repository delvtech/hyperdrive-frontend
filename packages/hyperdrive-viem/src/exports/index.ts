import {
  ReadClientOptions as BaseReadClientOptions,
  ReadWriteClientOptions as BaseReadWriteClientOptions,
} from "@delvtech/hyperdrive-js";
import { ViemReadClientOptions } from "src/viem/viemReadMixin";
import { ViemReadWriteClientOptions } from "src/viem/viemReadWriteMixin";

// Factory
export {
  ReadFactory,
  ReadWriteFactory,
  type ReadFactoryOptions,
  type ReadWriteFactoryOptions,
} from "src/factory";

// Registry
export {
  ReadRegistry,
  ReadWriteRegistry,
  type ReadRegistryOptions,
  type ReadWriteRegistryOptions,
} from "src/registry";

// Hyperdrive //

export {
  getHyperdrive,
  type Hyperdrive,
  type HyperdriveOptions,
} from "src/hyperdrive/getHyperdrive";

// base
export {
  ReadHyperdrive,
  ReadWriteHyperdrive,
  type ReadHyperdriveOptions,
  type ReadWriteHyperdriveOptions,
} from "src/hyperdrive/base";

// erc-4626
export {
  ReadErc4626Hyperdrive,
  ReadMockErc4626Hyperdrive,
  ReadWriteErc4626Hyperdrive,
  ReadWriteMockErc4626Hyperdrive,
} from "src/hyperdrive/erc4626";

// ezeth
export {
  ReadEzEthHyperdrive,
  ReadWriteEzEthHyperdrive,
} from "src/hyperdrive/ezeth";

// lseth
export {
  ReadLsEthHyperdrive,
  ReadWriteLsEthHyperdrive,
} from "src/hyperdrive/lseth";

// reth
export {
  ReadREthHyperdrive,
  ReadWriteREthHyperdrive,
} from "src/hyperdrive/reth";

// steth
export {
  ReadStEthHyperdrive,
  ReadWriteStEthHyperdrive,
  type ReadStEthHyperdriveOptions,
  type ReadWriteStEthHyperdriveOptions,
} from "src/hyperdrive/steth";

// Client
export type ReadClientOptions = ViemReadClientOptions<BaseReadClientOptions>;
export type ReadWriteClientOptions =
  ViemReadWriteClientOptions<BaseReadWriteClientOptions>;

// Re-exports //

export type { BaseReadClientOptions, BaseReadWriteClientOptions };

export {
  adjustAmountByPercentage,
  BlockNotFoundError,
  calculateAprFromPrice,
  calculateMatureLongYieldAfterFees,
  erc20Abi,
  erc4626Abi,
  ezEthHyperdriveAbi,
  factoryAbi,
  getHprFromApr,
  getHprFromApy,
  hyperdriveAbi,
  HyperdriveSdkError,
  lsEthAbi,
  MethodNotImplementedError,
  mockErc4626Abi,
  ReadClient,
  ReadErc20,
  ReadErc4626,
  ReadEth,
  ReadLsEth,
  ReadMockErc4626,
  ReadREth,
  ReadStEth,
  ReadWriteClient,
  ReadWriteErc20,
  ReadWriteErc4626,
  ReadWriteEth,
  ReadWriteLsEth,
  ReadWriteMockErc4626,
  ReadWriteREth,
  ReadWriteStEth,
  registryAbi,
  rEthAbi,
  stEthAbi,
  type ClosedLong,
  type ClosedLpShares,
  type ClosedShort,
  type Constructor,
  type ContractClientOptions,
  type Erc20Abi,
  type Erc4626Abi,
  type EzEthHyperdriveAbi,
  type FactoryAbi,
  type HyperdriveAbi,
  type Long,
  type LsEthAbi,
  type MockErc4626Abi,
  type OpenLongPositionReceived,
  type OpenShort,
  type PoolConfig,
  type PoolInfo,
  type ReadContractClientOptions,
  type ReadErc20Options,
  type ReadEthOptions,
  type ReadToken,
  type ReadWriteContractClientOptions,
  type ReadWriteErc20Options,
  type ReadWriteEthOptions,
  type ReadWriteToken,
  type RedeemedWithdrawalShares,
  type RegistryAbi,
  type REthAbi,
  type Short,
  type StEthAbi,
} from "@delvtech/hyperdrive-js";
