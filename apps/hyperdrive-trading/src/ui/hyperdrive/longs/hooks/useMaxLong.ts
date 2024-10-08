import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useMaxLong({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): {
  maxBaseIn: bigint | undefined;
  maxSharesIn: bigint | undefined;
  maxBondsOut: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("maxLong", {
      hyperdriveAddress,
      chainId,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getMaxLong();

          // All shares from the sdk need to be prepared for the UI
          const finalMaxSharesIn = await prepareSharesOut({
            sharesAmount: result.maxSharesIn,
            appConfig,
            chainId,
            readHyperdrive,
          });

          return {
            ...result,
            maxSharesIn: finalMaxSharesIn,
          };
        }
      : undefined,
  });

  return {
    maxBaseIn: data?.maxBaseIn,
    maxSharesIn: data?.maxSharesIn,
    maxBondsOut: data?.maxBondsOut,
    status: getStatus(status, fetchStatus),
  };
}
