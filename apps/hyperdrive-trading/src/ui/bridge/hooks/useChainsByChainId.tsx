import { EntityNetwork, ServerErrorResponse } from "@delvtech/gopher";
import { UseQueryResult } from "@tanstack/react-query";
import { useChains } from "src/ui/bridge/hooks/useChains";

export const useChainsByChainId = (): Omit<
  UseQueryResult<Record<string, EntityNetwork>, ServerErrorResponse>,
  "refetch"
> => {
  const result = useChains();

  const transformedData: Record<string, EntityNetwork> = {};
  result?.data?.data?.forEach((network) => {
    transformedData[network.chainID!] = network;
  });

  return { ...result, data: transformedData };
};
