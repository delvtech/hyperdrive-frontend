import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseImpliedRateOptions {
  hyperdriveAddress: Address | undefined;
  bondAmount: bigint | undefined;
  timestamp: bigint | undefined;
  variableApy: bigint | undefined;
}

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useImpliedRate({
  bondAmount,
  timestamp,
  variableApy,
  hyperdriveAddress,
}: UseImpliedRateOptions): {
  impliedRate: bigint | undefined;
  impliedRateStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readHyperdrive &&
    bondAmount !== undefined &&
    timestamp !== undefined &&
    variableApy !== undefined;

  const { data: impliedRate, status: impliedRateStatus } = useQuery({
    queryKey: makeQueryKey("impliedRate", {
      hyperdriveAddress,
      bondAmount: bondAmount?.toString(),
      timestamp: timestamp?.toString(),
      variableApy: variableApy?.toString(),
    }),
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getImpliedRate({
            bondAmount,
            timestamp,
            variableApy,
          });
          return result;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return { impliedRate, impliedRateStatus };
}
