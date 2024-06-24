import { ServerErrorResponse } from "@delvtech/gopher";
import { UseQueryResult } from "@tanstack/react-query";
import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { useChainId } from "wagmi";

export function useChainName(): Omit<
  UseQueryResult<string | undefined, ServerErrorResponse>,
  "refetch"
> {
  const chainId = useChainId();
  const result = useChainsByChainId();
  const name = result?.data?.[String(chainId)]?.name;

  return { ...result, data: name };
}
