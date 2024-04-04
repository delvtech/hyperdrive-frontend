import { FunctionReturn } from "@delvtech/evm-client";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";

export type MarketState = FunctionReturn<
  typeof IHyperdrive.abi,
  "getMarketState"
>;
