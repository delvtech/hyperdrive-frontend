import { ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useMarketState({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): {
  marketState:
    | Awaited<ReturnType<ReadHyperdrive["getMarketState"]>>
    | undefined;
  marketStateStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;
  const { data: marketState, status: marketStateStatus } = useQuery({
    queryKey: makeQueryKey("marketState", { hyperdrive: hyperdriveAddress }),
    queryFn: queryEnabled ? () => readHyperdrive.getMarketState() : undefined,
    enabled: queryEnabled,
  });
  return { marketState, marketStateStatus };
}
