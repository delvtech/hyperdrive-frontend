import { getLiquidity } from "@hyperdrive/core";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetLiquidityResponse } from "src/ui/base/types";
import { PublicClient } from "viem";
import { usePublicClient } from "wagmi";
export function useLiquidity(
  hyperdriveAddress: `0x${string}`,
): UseQueryResult<GetLiquidityResponse> {
  const publicClient = usePublicClient() as PublicClient;
  return useQuery({
    queryKey: ["liquidity", { hyperdriveAddress, publicClient }],
    queryFn: () => getLiquidity(hyperdriveAddress, publicClient),
  });
}
