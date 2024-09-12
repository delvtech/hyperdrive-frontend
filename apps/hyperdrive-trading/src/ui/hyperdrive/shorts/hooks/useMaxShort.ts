import { appConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { prepareSharesOut } from "src/ui/hyperdrive/hooks/usePrepareSharesOut";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseMaxShortResult {
  maxBaseIn: bigint | undefined;
  maxSharesIn: bigint | undefined;
  maxBondsOut: bigint | undefined;
  status: QueryStatusWithIdle;
}

export function useMaxShort({
  chainId,
  hyperdriveAddress,
  budget,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  budget: bigint;
}): UseMaxShortResult {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!readHyperdrive && !!budget;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("maxShort", {
      chainId,
      hyperdriveAddress,
      budget: budget.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getMaxShort({ budget });

          // All shares coming from the sdk need to be prepared for the UI
          const finalMaxSharesIn = await prepareSharesOut({
            appConfig,
            chainId,
            readHyperdrive,
            sharesAmount: result.maxSharesIn,
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
    status,
  };
}
