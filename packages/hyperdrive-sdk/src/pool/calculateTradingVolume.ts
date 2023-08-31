export async function calculateTradingVolume(
  totalBondsFromOpeningLongs: bigint,
  totalBondsFromOpeningShorts: bigint,
): Promise<bigint> {
  const totalVolume = totalBondsFromOpeningLongs + totalBondsFromOpeningShorts;
  return totalVolume;
}
