import { QueryStatus } from "@tanstack/react-query";
import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { useChainId } from "wagmi";

export function useChainName(): {
  name: string | undefined;
  status: QueryStatus;
} {
  const chainId = useChainId();
  const { chains, status } = useChainsByChainId();
  const name = chains?.[String(chainId)]?.name;

  return { name, status };
}
