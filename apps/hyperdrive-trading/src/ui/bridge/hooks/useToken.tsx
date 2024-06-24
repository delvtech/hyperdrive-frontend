import { EntityFungibleToken, ServerErrorResponse } from "@delvtech/gopher";
import { UseQueryResult } from "@tanstack/react-query";
import { useTokens } from "src/ui/bridge/hooks/useTokens";

export const useToken = (
  tokenSymbol: string,
): Omit<
  UseQueryResult<EntityFungibleToken | undefined, ServerErrorResponse>,
  "refetch"
> => {
  const result = useTokens();
  const token = result?.data?.data?.find(
    (token) => token.symbol === tokenSymbol,
  );
  return { ...result, data: token };
};
