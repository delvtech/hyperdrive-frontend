import { QueryStatus, useQuery } from "@tanstack/react-query";
import * as dnum from "dnum";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useLiquidity({
  hyperdriveAddress,
  decimals,
}: {
  hyperdriveAddress: Address;
  decimals: number;
}): {
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
          const liquidity = await readHyperdrive.getIdleLiquidity();
          return {
            liquidity: liquidity,
            formatted: dnum.format([liquidity, decimals], { digits: 0 }),
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    liquidity: data,
    liquidityStatus: status,
  };
}
