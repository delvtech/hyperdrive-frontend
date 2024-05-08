import { Short } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQueries } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
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

  let isLoading = true;
  const queryEnabled =
    !!account && !!openShorts && !!readHyperdrive && !!poolInfo;
  const previewCloseShortQueries = useQueries({
    queries:
      openShorts?.map((short) => ({
        queryKey: makeQueryKey("previewCloseShort", {
          hyperdriveAddress: hyperdrive.address,
          maturityTime: short.maturity?.toString(),
          shortAmountIn: short.bondAmount?.toString(),
          minAmountOut: parseUnits("0", 18).toString(),
          destination: account,
          asBase: false,
        }),
        enabled: queryEnabled,
        queryFn: queryEnabled
          ? () =>
              readHyperdrive?.previewCloseShort({
                maturityTime: short.maturity,
                shortAmountIn: short.bondAmount,
                destination: account,
                asBase: false,
                minAmountOut: parseUnits("0", 18),
                options: {
                  from: account,
                },
              })
          : undefined,
      })) ?? [],
  });
  const allQueriesSucceeded = previewCloseShortQueries.every(
    (query) => query.status === "success",
  );
  let totalShortsValue = 0n;
  if (allQueriesSucceeded) {
    previewCloseShortQueries.forEach((query) => {
      const amountOutInBase = convertSharesToBase({
        decimals: hyperdrive.decimals,
        sharesAmount: query.data,
        vaultSharePrice: poolInfo?.vaultSharePrice,
      });
      totalShortsValue += amountOutInBase || 0n;
    });
  }

  isLoading = previewCloseShortQueries.some(
    (query) => query.status === "loading",
  );

  return { totalShortsValue, isLoading };
}
