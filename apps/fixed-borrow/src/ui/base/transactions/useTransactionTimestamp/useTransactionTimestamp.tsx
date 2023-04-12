import { useProvider } from "wagmi";
import { Hash } from "@wagmi/core";
import { QueryStatus, useQuery } from "@tanstack/react-query";

export function useTransactionTimestamp(txHash: Hash): {
  timestamp: number | undefined;
  timestampStatus: QueryStatus;
} {
  const provider = useProvider();

  const { data: timestamp, status: timestampStatus } = useQuery({
    queryKey: ["getBlockForTransaction", { txHash }],
    queryFn: async () => {
      const tx = await provider.getTransaction(txHash);
      const block = await provider.getBlock(tx.blockNumber as number);
      const timestamp = block.timestamp * 1000;
      return timestamp;
    },
  });

  return { timestamp, timestampStatus };
}
