import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useMaxLong({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): {
  maxBaseIn: bigint | undefined;
  maxSharesIn: bigint | undefined;
  maxBondsOut: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const appConfig = useAppConfig();

  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("maxLong", {
      market: hyperdriveAddress,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getMaxLong();

          // All shares from the sdk need to be prepared for the UI
          const finalMaxSharesIn = await prepareSharesOut({
            sharesAmount: result.maxSharesIn,
            appConfig,
            hyperdriveAddress,
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
