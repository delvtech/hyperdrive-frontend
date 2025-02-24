import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  OpenLongPositionReceived,
  getHyperdrive,
} from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Address } from "viem";
export function useTotalOpenLongsValueTwo({
  account,
  longs,
  enabled = true,
}: {
  account: Address | undefined;
  longs:
    | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  enabled: boolean;
}): {
  totalOpenLongsValue: bigint | undefined;
  isLoading: boolean;
  totalOpenLongsValueError: Error;
} {
  const appConfig = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!longs && enabled;
  const {
    data: totalOpenLongsValue,
    isLoading,
    error: totalOpenLongsValueError,
  } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "portfolio",
      queryId: "totalOpenLongsValue",
      params: {
        account,
        longs,
      },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openLongPositionValues = await Promise.all(
            longs.map(async (long) => {
              const readHyperdrive = await getHyperdrive({
                address: long.hyperdrive.address,
                drift: getDrift({ chainId: long.hyperdrive.chainId }),
                earliestBlock: long.hyperdrive.initializationBlock,
              });
              const preview = await readHyperdrive.previewCloseLong({
                maturityTime: long.details?.maturity || 0n,
                bondAmountIn: long.details?.bondAmount || 0n,
                asBase: true,
              });
              console.log(preview.amountOut, "preview.amountOut");
              return preview.amountOut;
            }),
          );

          let total = 0n;
          openLongPositionValues.forEach((value) => {
            total += value;
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
