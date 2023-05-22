import { getShorts } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseShortsOptions<SelectResult> {
  account: Address | undefined;
  hyperdriveMarket: Address | undefined;
  select?: (shorts: bigint[]) => SelectResult;
}

export function useShorts<SelectResult = bigint[]>({
  account,
  hyperdriveMarket,
  select,
}: UseShortsOptions<SelectResult>): {
  shorts: SelectResult | undefined;
  shortsStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const queryEnabled = !!account && !!hyperdriveMarket;
  const { data: shorts, status: shortsStatus } = useQuery({
    queryKey: ["user-shorts", { account, hyperdriveMarket, publicClient }],
    enabled: queryEnabled,
    select: select,
    queryFn: queryEnabled
      ? () =>
          getShorts({
            account,
            hyperdriveMarket,
            // Casting as any since wagmi and viem are being silly and don't
            // agree on the type of PublicClient in ways that don't seem to
            // matter in any practical way.
            publicClient: publicClient as any,
          })
      : undefined,
  });

  return { shorts, shortsStatus };
}
