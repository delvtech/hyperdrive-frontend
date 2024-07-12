import { EntityFungibleToken } from "@delvtech/gopher";
import { QueryStatus } from "@tanstack/react-query";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";

export function useBridgeToken(tokenSymbol: string | undefined): {
  token: EntityFungibleToken | undefined;
  status: QueryStatus;
} {
  const { tokens, status } = useBridgeTokens();
  const token = tokens?.find((token) => token.symbol === tokenSymbol);
  return { token, status };
}
