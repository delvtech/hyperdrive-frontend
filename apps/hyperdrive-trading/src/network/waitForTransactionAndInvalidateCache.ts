import { queryClient } from "src/network/queryClient";
import { Address, PublicClient } from "wagmi";

interface WaitForTransactionAndInvalidateCacheOptions {
  publicClient: PublicClient;
  hash: Address;
  queryClient: typeof queryClient;
}

/**
 * Used for invalidating the cache after a transaction has been mined.
 * @param publicClient
 * @param hash
 * @param queryClient
 */
export async function waitForTransactionAndInvalidateCache({
  publicClient,
  hash,
  queryClient,
}: WaitForTransactionAndInvalidateCacheOptions): Promise<void> {
  publicClient.waitForTransactionReceipt({
    hash,
    onReplaced() {
      queryClient.resetQueries();
    },
  });
  queryClient.resetQueries();
}
