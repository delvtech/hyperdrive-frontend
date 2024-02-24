import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UsePreviewOpenLongOptions {
  hyperdriveAddress: Address;
  baseAmount: bigint | undefined;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  bondsReceived: bigint | undefined;
  maturityTime: bigint | undefined;
}

export function usePreviewOpenLong({
  hyperdriveAddress,
  baseAmount,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!baseAmount;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      market: hyperdriveAddress,
      baseAmount: baseAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewOpenLong({
            baseAmount,
          })
      : undefined,
  });
  return {
    bondsReceived: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    status,
  };
}
