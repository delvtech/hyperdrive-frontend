import { YieldSourceConfig } from "src/yieldSources/types";
import { gnosis } from "viem/chains";

export const gnosisWsteth: YieldSourceConfig = {
  chainId: gnosis.id,
  id: "gnosisWsteth",
  shortName: "Lido wstETH",
  protocol: "lido",
  historicalRatePeriod: 1,
};

export const sxdai: YieldSourceConfig = {
  chainId: gnosis.id,
  id: "sxdai",
  shortName: "Savings xDAI",
  protocol: "maker",
  historicalRatePeriod: 7,
};

export const gnosisSgyd: YieldSourceConfig = {
  chainId: gnosis.id,
  id: "gnosisSgyd",
  shortName: "Savings GYD",
  protocol: "gyroscope",
  historicalRatePeriod: 1,
  rewardsFn: "fetchGyroscopeRewards",
};
