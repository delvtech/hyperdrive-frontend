import { Short } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
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
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

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
          let totalOpenShortsValue = 0n;

          const promises = shorts.map((short) =>
            readHyperdrive.previewCloseShort({
              maturityTime: short.maturity,
              shortAmountIn: short.bondAmount,
              asBase: false,
            }),
          );

          const results = await Promise.all(promises);

          results.forEach((result) => {
            const amountOutInBase = convertSharesToBase({
              decimals: hyperdrive.decimals,
              sharesAmount: result.amountOut,
              vaultSharePrice: poolInfo?.vaultSharePrice,
            });
            totalOpenShortsValue += amountOutInBase || 0n;
          });

          return totalOpenShortsValue;
        }
      : undefined,
  });

  return { totalOpenShortsValue, isLoading };
}
