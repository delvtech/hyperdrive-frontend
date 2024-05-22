import { Short } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useTotalShortsValue({
  hyperdrive,
  account,
  openShorts,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  openShorts: Short[] | undefined;
}): { totalShortsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const queryEnabled =
    !!account && !!openShorts && !!readHyperdrive && !!poolInfo;

  const { data: totalShortsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalShortsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const promises = openShorts.map((short) =>
            readHyperdrive.previewCloseShort({
              maturityTime: short.maturity,
              shortAmountIn: short.bondAmount,
              asBase: false,
            }),
          );

          const results = await Promise.all(promises);

          let totalShortsValue = 0n;
          results.forEach((result) => {
            const amountOutInBase = convertSharesToBase({
              decimals: hyperdrive.decimals,
              sharesAmount: result.maxAmountOut,
              vaultSharePrice: poolInfo?.vaultSharePrice,
            });
            totalShortsValue += amountOutInBase || 0n;
          });

          return totalShortsValue;
        }
      : undefined,
  });

  return { totalShortsValue, isLoading };
}
