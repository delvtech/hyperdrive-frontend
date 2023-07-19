import { getLpPositionQuery, LpPosition } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { PublicClient, usePublicClient } from "wagmi";

interface UseLpPositionOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

export function useLpPosition({
  account,
  hyperdriveAddress,
}: UseLpPositionOptions): {
  lpPosition: LpPosition | undefined;
  lpPositionStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const { data: lpPosition, status: lpPositionStatus } = useQuery(
    getLpPositionQuery({
      account,
      hyperdriveAddress,
      publicClient: publicClient as PublicClient,
    }),
  );

  return { lpPosition, lpPositionStatus };
}
