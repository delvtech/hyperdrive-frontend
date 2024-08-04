import type { ReadHyperdrive } from "@delvtech/hyperdrive-js-core";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import type { Address } from "viem";
export function useMarketState(hyperdrive: Address): {
  marketState:
    | Awaited<ReturnType<ReadHyperdrive["getMarketState"]>>
    | undefined;
  marketStateStatus: QueryStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive);
  const queryEnabled = !!readHyperdrive;
  const { data: marketState, status: marketStateStatus } = useQuery({
    queryKey: makeQueryKey("marketState", { hyperdrive }),
    queryFn: queryEnabled ? () => readHyperdrive.getMarketState() : undefined,
    enabled: queryEnabled,
  });
  return { marketState, marketStateStatus };
}
