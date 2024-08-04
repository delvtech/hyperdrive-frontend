import type { FunctionReturn } from "@delvtech/evm-client";
import type { HyperdriveAbi } from "src/hyperdrive/base/abi";

export type PoolConfig = FunctionReturn<HyperdriveAbi, "getPoolConfig">;
export type PoolInfo = FunctionReturn<HyperdriveAbi, "getPoolInfo">;
export type MarketState = FunctionReturn<HyperdriveAbi, "getMarketState">;
