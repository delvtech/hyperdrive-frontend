import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UsePreviewOpenLongOptions {
  hyperdriveAddress: Address;
  amountIn: bigint | undefined;
  asBase: boolean;
}

interface UsePreviewOpenLongResult {
  status: "error" | "idle" | "loading" | "success";
  bondsReceived: bigint | undefined;
  maturityTime: bigint | undefined;
  spotPriceAfterOpen: bigint | undefined;
  spotRateAfterOpen: bigint | undefined;
}

export function usePreviewOpenLong({
  hyperdriveAddress,
  amountIn,
  asBase,
}: UsePreviewOpenLongOptions): UsePreviewOpenLongResult {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!amountIn;

  const appConfig = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress,
  });

  const { data, status } = useQuery({
    queryKey: makeQueryKey("previewOpenLong", {
      hyperdrive: hyperdriveAddress,
      amountIn: amountIn?.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          readHyperdrive.previewOpenLong({
            amountIn,
            asBase,
            decimals: hyperdrive.decimals,
          })
      : undefined,
  });

  return {
    bondsReceived: data?.bondProceeds,
    maturityTime: data?.maturityTime,
    spotPriceAfterOpen: data?.spotPriceAfterOpen,
    spotRateAfterOpen: data?.spotRateAfterOpen,
    status,
  };
}
