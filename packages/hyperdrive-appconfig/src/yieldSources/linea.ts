import { YieldSource } from "src/yieldSources/types";
import { linea } from "viem/chains";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    rseth: "rseth";
    lineaEzeth: "lineaEzeth";
  }
}

export const rseth: YieldSource<"fetchLineaRewards"> = {
  chainId: linea.id,
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
  rewards: {
    functionName: "fetchLineaRewards",
    args: [],
  },
};
export const lineaEzeth: YieldSource<"fetchLineaRewards"> = {
  chainId: linea.id,
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
  rewards: {
    functionName: "fetchLineaRewards",
    args: [],
  },
};
