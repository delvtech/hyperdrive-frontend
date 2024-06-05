export function formatAssetId(assetId: string): string {
  return `${assetId.slice(0, 4)}...${assetId.slice(-4)}`;
}
