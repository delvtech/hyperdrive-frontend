import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseImpliedRateOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
  bondAmount: bigint | undefined;
  openVaultSharePrice: bigint | undefined;
  variableApy: bigint | undefined;
}

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useImpliedRate({
  bondAmount,
  openVaultSharePrice,
  variableApy,
  hyperdriveAddress,
}: UseImpliedRateOptions): {
  impliedRate: bigint | undefined;
  impledRateStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readHyperdrive &&
    bondAmount !== undefined &&
    openVaultSharePrice !== undefined &&
    variableApy !== undefined;

  const { data: impliedRate, status: impliedRateStatus } = useQuery({
    queryKey: makeQueryKey("impliedRate", {
      hyperdriveAddress,
      bondAmount: bondAmount?.toString(),
      openVaultSharePrice: openVaultSharePrice?.toString(),
      variableApy: variableApy?.toString(),
    }),
    queryFn: queryEnabled
      ? async () =>
          await readHyperdrive.getImpliedRate({
            bondAmount,
            openVaultSharePrice,
            variableApy,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return { impliedRate, impledRateStatus: impliedRateStatus };
}
