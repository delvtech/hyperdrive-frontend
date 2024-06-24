import {
  ServerErrorResponse,
  ServerGetFungibleTokensByChainHandlerResponse,
} from "@delvtech/gopher";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useTokens = (): UseQueryResult<
  ServerGetFungibleTokensByChainHandlerResponse,
  ServerErrorResponse
> => {
  const result = useQuery<
    ServerGetFungibleTokensByChainHandlerResponse,
    ServerErrorResponse
  >({
    queryKey: ["gopher", "tokens"],
    queryFn: async () => {
      const response = await gopher.assets.fungibleList();
      return response.data;
    },
  });

  return result;
};
