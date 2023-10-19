import { HyperdriveABI } from "@hyperdrive/sdk";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, ContractFunctionResult } from "viem";
export function useMarketState(hyperdrive: Address): {
  marketState:
    | ContractFunctionResult<typeof HyperdriveABI, "getMarketState">
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
