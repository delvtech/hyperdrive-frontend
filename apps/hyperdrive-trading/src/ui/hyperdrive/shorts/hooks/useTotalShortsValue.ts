import { ClosedShort, Short } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

// Type guard for ClosedShort
function isClosedShorts(
  shorts: Short[] | ClosedShort[],
): shorts is ClosedShort[] {
  return (shorts as ClosedShort[])[0]?.baseAmountReceived !== undefined;
}

export function useTotalShortsValue({
  hyperdrive,
  account,
  shorts,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  shorts: Short[] | ClosedShort[] | undefined;
}): { totalShortsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const queryEnabled = !!account && !!shorts && !!readHyperdrive && !!poolInfo;

  const { data: totalShortsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalShortsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
      activeOpenOrClosedTab,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          if (activeOpenOrClosedTab === "Closed" && isClosedShorts(shorts)) {
            let totalShortsValue = 0n;
            shorts.forEach((short) => {
              totalShortsValue += short.baseAmountReceived;
            });
            return totalShortsValue;
          } else if (activeOpenOrClosedTab === "Open") {
            const promises = (shorts as Short[]).map((short) =>
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
                sharesAmount: result.amountOut,
                vaultSharePrice: poolInfo?.vaultSharePrice,
              });
              totalShortsValue += amountOutInBase || 0n;
            });

            return totalShortsValue;
          }
          return 0n;
        }
      : undefined,
  });

  return { totalShortsValue, isLoading };
}
