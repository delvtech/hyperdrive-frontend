import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Long } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useTotalOpenLongsValueTwo({
  hyperdrive,
  account,
  longs,
  enabled,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  longs: Long[] | undefined;
  enabled: boolean;
}): {
  totalOpenLongsValue: bigint | undefined;
  isLoading: boolean;
  totalOpenLongsValueError: Error;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId: hyperdrive.chainId,
    address: hyperdrive.address,
  });
  const { poolInfo } = usePoolInfo({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const queryEnabled =
    !!account && !!longs && !!readHyperdrive && !!poolInfo && enabled;

  const {
    data: totalOpenLongsValue,
    isLoading,
    error: totalOpenLongsValueError,
  } = useQuery({
    queryKey: makeQueryKey("totalLongsValue", {
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      account,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const previews = await Promise.all(
            longs.map((long) =>
              readHyperdrive.previewCloseLong({
                maturityTime: long.maturity,
                bondAmountIn: long.bondAmount,
                asBase: true,
              }),
            ),
          );

          let total = 0n;
          previews.forEach((preview) => {
            total += preview.amountOut || 0n;
          });

          return total;
        }
      : undefined,
  });

  return {
    totalOpenLongsValue,
    isLoading,
    totalOpenLongsValueError: totalOpenLongsValueError as Error,
  };
}
