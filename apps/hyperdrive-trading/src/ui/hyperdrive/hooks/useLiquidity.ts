import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "wagmi";

export function useLiquidity(hyperdriveAddress: Address): {
  liquidity:
    | {
        liquidity: bigint;
        formatted: string;
      }
    | undefined;
  liquidityStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("liquidity", { hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const liquidity = await readHyperdrive.getLiquidity();
          return { liquidity: liquidity, formatted: liquidity?.toString() };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    liquidity: data,
    liquidityStatus: status,
  };
}
