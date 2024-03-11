import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useMaxLong({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): {
  maxBaseIn: bigint | undefined;
  maxSharesIn: bigint | undefined;
  maxBondsOut: bigint | undefined;
  status: "error" | "idle" | "loading" | "success";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("maxLong", {
      market: hyperdriveAddress,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled ? () => readHyperdrive.getMaxLong() : undefined,
  });

  return {
    maxBaseIn: data?.maxBaseIn,
    maxSharesIn: data?.maxSharesIn,
    maxBondsOut: data?.maxBondsOut,
    status,
  };
}
