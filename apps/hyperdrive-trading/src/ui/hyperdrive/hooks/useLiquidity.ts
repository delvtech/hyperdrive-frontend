import { getLiquidityQuery } from "@hyperdrive/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Address, usePublicClient } from "wagmi";

export function useLiquidity(hyperdriveAddress: Address): {
  liquidity:
    | {
        liquidity: bigint;
        formatted: string;
      }
    | undefined;
  liquidityStatus: QueryStatus;
} {
  const publicClient = usePublicClient();

  const { data, status } = useQuery(
    getLiquidityQuery({
      hyperdriveAddress,
      publicClient: publicClient as any,
    }),
  );

  return {
    liquidity: data,
    liquidityStatus: status,
  };
}
