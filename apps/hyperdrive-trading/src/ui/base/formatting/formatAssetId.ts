export function formatAssetId(assetId: string): string {
  // first 2 and last 4
  return `${assetId.slice(0, 4)}...${assetId.slice(-4)}`;
}
