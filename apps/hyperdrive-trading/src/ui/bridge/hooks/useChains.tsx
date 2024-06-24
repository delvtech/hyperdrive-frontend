import {
  EntityNetwork,
  ServerErrorResponse,
  ServerGetNetworksHandlerResponse,
} from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useChains = (): {
  chains: EntityNetwork[] | undefined;
  status: QueryStatus;
} => {
  const { data, status } = useQuery<
    ServerGetNetworksHandlerResponse,
    ServerErrorResponse
  >({
    queryKey: ["gopher", "networks"],
    queryFn: async () => {
      const response = await gopher.networks.networksList();
      return response.data;
    },
  });

  return { chains: data?.data, status };
};
