import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { FunctionReturnType } from "@hyperdrive/evm-client";

export type MarketState = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getMarketState"
>[0];
