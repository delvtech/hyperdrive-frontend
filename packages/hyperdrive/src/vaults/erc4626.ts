import { mockErc4626Abi } from "src/abis/MockErc4626";
import { formatRate } from "src/base/formatRate";
import { Address, PublicClient } from "viem";

export async function getVaultRate({
  vaultAddress,
  publicClient,
}: {
  vaultAddress: Address;
  publicClient: PublicClient;
}): Promise<{ vaultRate: bigint; formatted: string }> {
  const rate = await publicClient.readContract({
    address: vaultAddress,
    abi: mockErc4626Abi,
    functionName: "getRate",
  });
  return {
    vaultRate: rate,
    formatted: formatRate(rate),
  };
}
