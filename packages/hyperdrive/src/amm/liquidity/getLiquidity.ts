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
  console.log(poolInfo);
  const sharePrice = formatUnits(poolInfo.sharePrice, 18);
  const shareReserves = formatUnits(poolInfo.shareReserves, 18);
  const longsOutstanding = formatUnits(poolInfo.longsOutstanding, 18);
  console.log(sharePrice, shareReserves, longsOutstanding);
  const totalLiquidity = parseFloat(sharePrice) * parseFloat(shareReserves);
  const minusLongs = totalLiquidity - parseFloat(longsOutstanding);
  console.log(minusLongs, "minusLongs");

  return { marketLiquidity: minusLongs.toString() };
}
