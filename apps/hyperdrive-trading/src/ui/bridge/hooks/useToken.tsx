import { EntityFungibleToken } from "@delvtech/gopher";
import { QueryStatus } from "@tanstack/react-query";
import { useTokens } from "src/ui/bridge/hooks/useTokens";

export const useToken = (
  tokenSymbol: string,
): {
  token: EntityFungibleToken | undefined;
  status: QueryStatus;
} => {
  const { tokens, status } = useTokens();
  const token = tokens?.find((token) => token.symbol === tokenSymbol);
  return { token, status };
};
