import { EntityFungibleToken } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useTokens = (): {
  tokens: EntityFungibleToken[] | undefined;
  status: QueryStatus;
} => {
  const { data, status } = useQuery({
    queryKey: ["gopher", "tokens"],
    queryFn: async () => {
      const response = await gopher.assets.fungibleList();
      return response.data;
    },
  });

  return { tokens: data?.data, status };
};
