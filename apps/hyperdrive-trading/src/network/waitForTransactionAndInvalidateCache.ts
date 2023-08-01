import { queryClient } from "src/network/queryClient";
import { Address, PublicClient } from "wagmi";

interface WaitForTransactionAndInvalidateCacheOptions {
  publicClient: PublicClient;
  hash: Address;
  queryClient: typeof queryClient;
}

export async function waitForTransactionAndInvalidateCache({
  publicClient,
  hash,
  queryClient,
}: WaitForTransactionAndInvalidateCacheOptions): Promise<void> {
  publicClient.waitForTransactionReceipt({
    hash,
    onReplaced() {
      queryClient.invalidateQueries();
    },
  });
  queryClient.invalidateQueries();
}
