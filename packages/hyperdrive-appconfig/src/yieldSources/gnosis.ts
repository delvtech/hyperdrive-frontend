import { YieldSource } from "src/yieldSources/types";
import { gnosis } from "viem/chains";

declare module "src/yieldSources/types" {
  interface YieldSourceIdMap {
    gnosisWsteth: "gnosisWsteth";
    sxdai: "sxdai";
  }
}

export const gnosisWsteth: YieldSource = {
  chainId: gnosis.id,
  id: "gnosisWsteth",
  shortName: "Lido wstETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};

export const sxdai: YieldSource = {
  chainId: gnosis.id,
  id: "sxdai",
  shortName: "Savings xDAI",
  protocol: "maker",
  historicalRatePeriod: 7,
};
