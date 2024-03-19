// Main Hyperdrive sdk entrypoint for consumers
export {
  ReadHyperdrive,
  type ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
export {
  ReadWriteHyperdrive,
  type ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
export {
  ReadStEthHyperdrive,
  type ReadStEthHyperdriveOptions,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
export {
  ReadWriteStEthHyperdrive,
  type ReadWriteStEthHyperdriveOptions,
} from "src/hyperdrive/steth/ReadWriteStEthHyperdrive";

// Token
export type { ReadToken } from "src/token/ReadToken";
export type { ReadWriteToken } from "src/token/ReadWriteToken";
export { ReadErc20, type ReadErc20Options } from "src/token/erc20/ReadErc20";
export {
  ReadWriteErc20,
  type ReadWriteErc20Options,
} from "src/token/erc20/ReadWriteErc20";
export { ReadEth, type ReadEthOptions } from "src/token/eth/ReadEth";
export {
  ReadWriteEth,
  type ReadWriteEthOptions,
} from "src/token/eth/ReadWriteEth";
export { ReadStEth, type ReadStEthOptions } from "src/token/steth/ReadStEth";
export {
  ReadWriteStEth,
  type ReadWriteStEthOptions,
} from "src/token/steth/ReadWriteStEth";

export type {
  ContractFactoryOptions,
  ReadContractFactory,
  ReadWriteContractFactory,
} from "src/evm-client/contractFactory";

export type {
  IReadHyperdriveContract,
  IReadWriteHyperdriveContract,
} from "src/hyperdrive/HyperdriveContract";

// Pool
export type { PoolConfig } from "src/pool/PoolConfig";
export type { PoolInfo } from "src/pool/PoolInfo";
export type { Checkpoint } from "src/pool/Checkpoint";
export { getCheckpointId } from "src/pool/getCheckpointId";

// Shorts
export type { Short, ClosedShort, OpenShort } from "src/shorts/types";

// Longs
export type { ClosedLong, Long } from "src/longs/types";
export { calculateFixedRateFromOpenLong } from "src/longs/calculateFixedRateFromOpenLong";
export { calculateMatureLongYieldAfterFees } from "src/longs/calculateMatureLongYieldAfterFees";

// LP
export type { ClosedLpShares } from "src/lp/ClosedLpShares";

// Withdrawal Shares
export type { RedeemedWithdrawalShares } from "src/withdrawalShares/RedeemedWithdrawalShares";

// Math utils
export { adjustAmountByPercentage } from "src/base/adjustAmountByPercentage";
export { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";

// Model
export {
  ReadModel,
  type ReadContractModelOptions,
  type ReadModelOptions,
} from "src/model/ReadModel";
export {
  ReadWriteModel,
  type ReadWriteContractModelOptions,
  type ReadWriteModelOptions,
} from "src/model/ReadWriteModel";
