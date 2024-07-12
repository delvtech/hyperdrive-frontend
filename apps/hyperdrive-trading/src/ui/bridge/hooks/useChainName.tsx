import { QueryStatus } from "@tanstack/react-query";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useChainId } from "wagmi";

export function useChainName(): {
  name: string | undefined;
  status: QueryStatus;
} {
  const chainId = useChainId();
  const { chains, status } = useBridgeChainsByChainId();
  const name = chains?.[String(chainId)]?.name;

  return { name, status };
}
