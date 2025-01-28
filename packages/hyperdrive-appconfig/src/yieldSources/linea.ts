import { YieldSourceConfig } from "src/yieldSources/types";
import { linea } from "viem/chains";

export const rseth: YieldSourceConfig = {
  chainId: linea.id,
  id: "rseth",
  shortName: "KelpDAO rsETH",
  protocol: "kelpDao",
  historicalRatePeriod: 30,
};
export const lineaEzeth: YieldSourceConfig = {
  chainId: linea.id,
  id: "lineaEzeth",
  shortName: "Renzo ezETH",
  protocol: "renzo",
  historicalRatePeriod: 14,
};
