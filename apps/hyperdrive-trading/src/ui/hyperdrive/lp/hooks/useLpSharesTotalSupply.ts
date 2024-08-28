import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseLpSharesTotalSupplyOptions {
  chainId: number;
  hyperdriveAddress: Address | undefined;
}
export function useLpSharesTotalSupply({
  chainId,
  hyperdriveAddress,
}: UseLpSharesTotalSupplyOptions): {
  lpSharesTotalSupply: bigint | undefined;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;
  const { data: lpSharesTotalSupply } = useQuery({
    queryKey: makeQueryKey("lpSharesTotalSupply", { hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getLpSharesTotalSupply()
      : undefined,
    enabled: queryEnabled,
  });
  return { lpSharesTotalSupply };
}
