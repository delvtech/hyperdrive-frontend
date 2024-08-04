import type { EntityNetwork } from "@delvtech/gopher";
import type { QueryStatus } from "@tanstack/react-query";
import { useBridgeChains } from "src/ui/bridge/hooks/useBridgeChains";

export function useBridgeChainsByChainId(): {
  chains: Record<string, EntityNetwork> | undefined;
  status: QueryStatus;
} {
  const { chains = [], status } = useBridgeChains();
  const chainsByChainId: Record<string, EntityNetwork> = {};

  chains?.forEach((network) => {
    chainsByChainId[network.chainID!] = network;
  });

  return { chains: chainsByChainId, status };
}
