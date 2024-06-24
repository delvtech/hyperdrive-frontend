import {
  ServerErrorResponse,
  ServerGetNetworksHandlerResponse,
} from "@delvtech/gopher";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useChains = (): UseQueryResult<
  ServerGetNetworksHandlerResponse,
  ServerErrorResponse
> => {
  const result = useQuery<
    ServerGetNetworksHandlerResponse,
    ServerErrorResponse
  >({
    queryKey: ["gopher", "networks"],
    queryFn: async () => {
      const response = await gopher.networks.networksList();
      return response.data;
    },
  });

  return result;
};
