import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Block } from "viem";
import { usePublicClient } from "wagmi";

export function useCurrentBlock(): { currentBlock: Block | undefined } {
  const publicClient = usePublicClient();
  const { data: currentBlock } = useQuery({
    queryKey: makeQueryKey("provider", "getBlock"),
    queryFn: () => publicClient.getBlock(),
  });
  return { currentBlock };
}
