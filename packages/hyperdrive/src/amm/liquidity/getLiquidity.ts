import { Address, Chain, PublicClient, Transport, formatUnits } from "viem";
// Ask about this 👇
// eslint-disable-next-line no-restricted-imports
import { getPoolInfo } from "../getPoolInfo";

export async function getLiquidity(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
): Promise<{ marketLiquidity: string }> {
  const poolInfo = await getPoolInfo({
    hyperdriveAddress,
    publicClient,
  });
  const marketLiquidity = formatUnits(poolInfo.shareReserves, 18);
  return { marketLiquidity };
}
