import type { EntityNetwork } from "@delvtech/gopher";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/bridge/api";

export function useBridgeChains(): {
  chains: EntityNetwork[] | undefined;
  status: QueryStatus;
} {
  const { data, status } = useQuery({
    queryKey: makeQueryKey("gopher", { route: "networks/networksList" }),
    queryFn: async () => {
      const response = await gopher.networks.networksList();
      return response.data;
    },
  });

  return { chains: data?.data, status };
}
