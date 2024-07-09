import { EntityNetwork } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/ui/bridge/api/api";

export const useChains = (): {
  chains: EntityNetwork[] | undefined;
  status: QueryStatus;
} => {
  const { data, status } = useQuery({
    queryKey: makeQueryKey("gopher", { route: "networks/networksList" }),
    queryFn: async () => {
      const response = await gopher.networks.networksList();
      return response.data;
    },
  });

  return { chains: data?.data, status };
};
