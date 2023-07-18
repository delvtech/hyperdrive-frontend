import { getLiquidityQuery } from "@hyperdrive/core";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

export type GetLiquidityResponse = {
  marketLiquidity: string;
};

export function useLiquidity(
  hyperdriveAddress: Address,
): UseQueryResult<GetLiquidityResponse> {
  const publicClient = usePublicClient() as any;
  return useQuery(getLiquidityQuery({ hyperdriveAddress, publicClient }));
}
