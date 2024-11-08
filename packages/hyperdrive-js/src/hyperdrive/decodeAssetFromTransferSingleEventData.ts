import { AssetType, parseAssetType } from "src/hyperdrive/parseAssetType";

export function decodeAssetFromTransferSingleEventData(
  eventData: `0x${string}`,
): {
  assetType: AssetType;
  /**
   * in seconds
   */
  timestamp: bigint;
} {
  const cleanEventData = eventData.slice(2);

  const identifier = Number(cleanEventData.slice(0, 2));
  const assetType = parseAssetType(identifier);
  // 62 hexadecimal digits (248 bits) = timestamp (in seconds)
  const timestampPart = cleanEventData.slice(2, 64);
  const timestamp = BigInt(parseInt(timestampPart, 16));
  return {
    assetType,
    timestamp,
  };
}
