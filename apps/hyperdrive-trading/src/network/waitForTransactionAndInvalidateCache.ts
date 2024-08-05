import type { queryClient } from "src/network/queryClient";
import type { Address, PublicClient } from "viem";

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
  await publicClient.waitForTransactionReceipt({
    hash,
    onReplaced() {
      queryClient.invalidateQueries();
    },
  });
  queryClient.invalidateQueries();
}
