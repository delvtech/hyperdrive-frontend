import { ClosedLong, Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { useOpenOrClosedSearchParam } from "src/ui/markets/hooks/useOpenOrClosedSearchParam";
import { Address } from "viem";

// Typeguard for ClosedLongs
function isClosedLongs(longs: Long[] | ClosedLong[]): longs is ClosedLong[] {
  return (longs as ClosedLong[])[0]?.baseAmount !== undefined;
}

export function useTotalLongsValue({
  hyperdrive,
  account,
  longs,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
  longs: Long[] | ClosedLong[] | undefined;
}): { totalLongsValue: bigint | undefined; isLoading: boolean } {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const activeOpenOrClosedTab = useOpenOrClosedSearchParam();

  const queryEnabled = !!account && !!longs && !!readHyperdrive && !!poolInfo;

  const { data: totalLongsValue, isLoading } = useQuery({
    queryKey: makeQueryKey("totalLongsValue", {
      hyperdriveAddress: hyperdrive.address,
      account,
      activeOpenOrClosedTab,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          let totalLongsValue = 0n;
          if (activeOpenOrClosedTab === "Closed" && isClosedLongs(longs)) {
            longs.forEach((long) => {
              totalLongsValue += long.baseAmount;
            });
            return totalLongsValue;
          }
          const promises = longs.map((long) =>
            readHyperdrive.previewCloseLong({
              maturityTime: long.maturity,
              bondAmountIn: long.bondAmount,
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
            totalLongsValue += amountOutInBase || 0n;
          });

          return totalLongsValue;
        }
      : undefined,
  });

  return { totalLongsValue, isLoading };
}
