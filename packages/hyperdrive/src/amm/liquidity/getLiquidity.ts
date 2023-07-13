import { Address, Chain, PublicClient, Transport, formatUnits } from "viem";

// eslint-disable-next-line no-restricted-imports
import { getPoolInfo } from "../getPoolInfo";

// This function retrieves the market liquidity by using the following formula:
// marketLiquidity = sharePrice * shareReserves - longsOutstanding
export async function getLiquidity(
  hyperdriveAddress: Address,
  publicClient: PublicClient<Transport, Chain>,
): Promise<{ marketLiquidity: string }> {
  const poolInfo = await getPoolInfo({
    hyperdriveAddress,
    publicClient,
  });

  const sharePrice = parseFloat(formatUnits(poolInfo.sharePrice, 18));
  const shareReserves = parseFloat(formatUnits(poolInfo.shareReserves, 18));
  const longsOutstanding = parseFloat(
    formatUnits(poolInfo.longsOutstanding, 18),
  );

  const marketLiquidity = sharePrice * shareReserves - longsOutstanding;

  return { marketLiquidity: marketLiquidity.toString() };
}
