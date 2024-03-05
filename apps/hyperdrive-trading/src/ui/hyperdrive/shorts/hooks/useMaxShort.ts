import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseMaxShortResult {
  maxBaseIn: bigint | undefined;
  maxSharesIn: bigint | undefined;
  maxBondsOut: bigint | undefined;
  status: "error" | "idle" | "loading" | "success";
}

export function useMaxShort({
  hyperdriveAddress,
  budget,
}: {
  budget: bigint | undefined;
  hyperdriveAddress: Address;
}): UseMaxShortResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && budget !== undefined;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("maxShort", {
      market: hyperdriveAddress,
      budget: budget?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () => readHyperdrive.getMaxShort({ budget })
      : undefined,
  });

  return {
    maxBaseIn: data?.maxBaseIn,
    maxSharesIn: data?.maxSharesIn,
    maxBondsOut: data?.maxBondsOut,
    status,
  };
}
