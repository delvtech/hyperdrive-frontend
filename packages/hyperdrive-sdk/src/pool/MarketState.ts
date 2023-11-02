import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { FunctionReturnType } from "src/base/abitype";

export type MarketState = FunctionReturnType<
  typeof IHyperdrive.abi,
  "getMarketState"
>[0];
