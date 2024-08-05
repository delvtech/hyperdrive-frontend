import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
interface UseOpenLpPositionOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}
export function useOpenLpPosition({
  account,
  hyperdriveAddress,
}: UseOpenLpPositionOptions): {
  lpShareBalance: bigint;
  baseAmountPaid: bigint;
  baseValue: bigint;
  sharesValue: bigint;
  openLpPositionStatus: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data, status: openLpPositionStatus } = useQuery({
    queryKey: makeQueryKey("openLpPosition", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getOpenLpPosition({ account })
      : undefined,
    enabled: queryEnabled,
  });
  return {
    lpShareBalance: data?.lpShareBalance ?? 0n,
    baseAmountPaid: data?.baseAmountPaid ?? 0n,
    baseValue: data?.baseValue ?? 0n,
    sharesValue: data?.sharesValue ?? 0n,
    openLpPositionStatus,
  };
}
