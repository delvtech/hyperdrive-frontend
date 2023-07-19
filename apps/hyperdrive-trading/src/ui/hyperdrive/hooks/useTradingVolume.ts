import { getTradingVolumeQuery } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";

import { usePublicClient } from "wagmi";
type GetTradingVolumeResponse = {
  tradingVolume: string;
};
export function useTradingVolume(
  hyperdriveAddress: Address,
  currentBlockNumber: bigint,
): { tradingVolume: string | unknown } {
  const publicClient = usePublicClient() as any;

  const { data: tradingVolume } = useQuery(
    getTradingVolumeQuery({
      hyperdriveAddress,
      publicClient,
      currentBlockNumber,
    }),
  );

  return { tradingVolume };
}
