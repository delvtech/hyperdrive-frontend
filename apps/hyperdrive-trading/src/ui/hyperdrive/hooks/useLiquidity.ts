import { getLiquidity } from "@hyperdrive/core";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { usePublicClient } from "wagmi";

export function useLiquidity(
  hyperdriveAddress: `0x${string}`,
): UseQueryResult<any> {
  const publicClient = usePublicClient() as any;
  return useQuery({
    queryKey: ["liquidity", { hyperdriveAddress, publicClient }],
    queryFn: () => getLiquidity(hyperdriveAddress, publicClient),
  });
}
