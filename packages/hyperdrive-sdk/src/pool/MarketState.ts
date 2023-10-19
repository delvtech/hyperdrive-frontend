import { HyperdriveABI } from "src/abis/Hyperdrive";
import { FunctionReturnType } from "src/base/abitype";
export type MarketState = FunctionReturnType<
  typeof HyperdriveABI,
  "getMarketState"
>[0];
