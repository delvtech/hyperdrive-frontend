import { Short } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useTotalOpenShortsValue({
  hyperdrive,
  account,
  shorts,
  enabled,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  shorts: Short[] | undefined;
  enabled: boolean;
}): { totalOpenShortsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive({
    chainId: hyperdrive.chainId,
    address: hyperdrive.address,
  });
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const queryEnabled =
    !!account && !!shorts && !!readHyperdrive && !!poolInfo && enabled;

  const { data: totalOpenShortsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalOpenShortsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const previews = await Promise.all(
            shorts.map((short) =>
              readHyperdrive.previewCloseShort({
                maturityTime: short.maturity,
                shortAmountIn: short.bondAmount,
                asBase: true,
              }),
            ),
          );

          let total = 0n;
          previews.forEach((preview) => {
            total += preview.amountOut;
          });

          return total;
        }
      : undefined,
  });

  return { totalOpenShortsValue, isLoading };
}
