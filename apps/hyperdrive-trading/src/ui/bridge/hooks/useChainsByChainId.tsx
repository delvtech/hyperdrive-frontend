import { EntityNetwork } from "@delvtech/gopher";
import { QueryStatus } from "@tanstack/react-query";
import { useChains } from "src/ui/bridge/hooks/useChains";

export const useChainsByChainId = (): {
  chains: Record<string, EntityNetwork> | undefined;
  status: QueryStatus;
} => {
  const { chains = [], status } = useChains();
  const chainsByChainId: Record<string, EntityNetwork> = {};

  chains?.forEach((network) => {
    chainsByChainId[network.chainID!] = network;
  });

  return { chains: chainsByChainId, status };
};
