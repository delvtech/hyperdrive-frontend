import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { Address } from "viem";

export function useTotalOpenShortsValue({
  account,
  shorts,
  enabled,
}: {
  account: Address | undefined;
  shorts: (OpenShort & { hyperdrive: HyperdriveConfig })[] | undefined;
  enabled: boolean;
}): { totalOpenShortsValue: bigint | undefined; isLoading: boolean } {
  const queryEnabled = !!account && !!shorts && enabled;

  const { data: totalOpenShortsValue, isLoading } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "portfolio",
      queryId: "totalOpenShortsValue",
      params: {
        account,
        shorts,
      },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openShortPositionValues = await Promise.all(
            shorts.map(async (short) => {
              const readHyperdrive = await getHyperdrive({
                address: short.hyperdrive.address,
                drift: getDrift({ chainId: short.hyperdrive.chainId }),
                earliestBlock: short.hyperdrive.initializationBlock,
              });
              const preview = await readHyperdrive.previewCloseShort({
                maturityTime: short.maturity,
                shortAmountIn: short.bondAmount,
                asBase: true,
              });
              return preview.amountOut;
            }),
          );

          let total = 0n;
          openShortPositionValues.forEach((value) => {
            total += value;
          });
          return total;
        }
      : undefined,
  });

  return { totalOpenShortsValue, isLoading };
}
