import { YieldSource } from "src/yieldSources/types";
import { gnosis } from "viem/chains";

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

export const gnosisSgyd: YieldSource = {
  chainId: gnosis.id,
  id: "gnosisSgyd",
  shortName: "Savings GYD",
  protocol: "gyroscope",
  historicalRatePeriod: 1,
};
