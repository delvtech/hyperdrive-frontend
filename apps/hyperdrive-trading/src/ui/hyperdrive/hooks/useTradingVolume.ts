import { getTradingVolumeQuery } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

import { usePublicClient } from "wagmi";
type GetTradingVolumeResponse = {
  tradingVolume: string | undefined;
};
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint,
): GetTradingVolumeResponse {
  const publicClient = usePublicClient();

  const { data: tradingVolume } = useQuery(
    getTradingVolumeQuery({
      hyperdriveAddress,
      publicClient,
      currentBlockNumber,
    }),
  );

  return { tradingVolume: tradingVolume?.formatted };
}
