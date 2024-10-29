import { YieldSource } from "src/yieldSources/types";
import { linea } from "viem/chains";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    rseth: "rseth";
    lineaEzeth: "lineaEzeth";
  }
}

export const rseth: YieldSource = {
  chainId: linea.id,
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
  rewardsFn: "fetchLineaRewards",
};
export const lineaEzeth: YieldSource = {
  chainId: linea.id,
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
  rewardsFn: "fetchLineaRewards",
};
