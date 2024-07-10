import { EntityFungibleToken } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/ui/bridge/api";

export function useTokens(): {
  tokens: EntityFungibleToken[] | undefined;
  status: QueryStatus;
} {
  const { data, status } = useQuery({
    queryKey: makeQueryKey("gopher", { route: "assets/fungibleList" }),
    queryFn: async () => {
      const response = await gopher.assets.fungibleList();
      return response.data;
    },
  });

  return { tokens: data?.data, status };
}
