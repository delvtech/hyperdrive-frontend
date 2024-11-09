import { YieldSourceDefinition } from "src/yieldSources/types";
import { linea } from "viem/chains";

export const rseth: YieldSourceDefinition = {
  chainId: linea.id,
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
  rewardsFn: "fetchLineaRewards",
};
export const lineaEzeth: YieldSourceDefinition = {
  chainId: linea.id,
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
  rewardsFn: "fetchLineaRewards",
};
