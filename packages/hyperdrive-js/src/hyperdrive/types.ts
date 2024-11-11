import { FunctionReturn } from "@delvtech/drift";
import { HyperdriveAbi } from "src/hyperdrive/abi";

export type PoolConfig = FunctionReturn<HyperdriveAbi, "getPoolConfig">;
export type PoolInfo = FunctionReturn<HyperdriveAbi, "getPoolInfo">;
export type MarketState = FunctionReturn<HyperdriveAbi, "getMarketState">;
