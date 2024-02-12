import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { FunctionReturn } from "@delvtech/evm-client";

export type MarketState = FunctionReturn<
  typeof IHyperdrive.abi,
  "getMarketState"
>;
