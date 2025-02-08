import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseShortBondsGivenDepositOptions {
  chainId: number;
  hyperdriveAddress: Address;
  amountIn: bigint;
  asBase: boolean;
  tolerance: bigint | undefined;
}

export function useShortBondsGivenDeposit({
  chainId,
  hyperdriveAddress,
  amountIn,
  asBase,
  tolerance,
}: UseShortBondsGivenDepositOptions): {
  bondsOut: bigint;
} {
  const appConfig = useAppConfigForConnectedChain();
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled =
    !!readHyperdrive &&
    !!amountIn &&
    asBase !== undefined &&
    tolerance !== undefined;

  const { data } = useQuery({
    queryKey: makeQueryKey("shortBondsGivenDeposit", {
      chainId,
      hyperdriveAddress,
      amountIn: amountIn.toString(),
      asBase,
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getShortBondsGivenDeposit({
            amountIn,
            asBase,
            tolerance,
          });
          return {
            bondsOut: result,
          };
        }
      : undefined,
  });

  return { bondsOut: data?.bondsOut ?? 0n };
}
