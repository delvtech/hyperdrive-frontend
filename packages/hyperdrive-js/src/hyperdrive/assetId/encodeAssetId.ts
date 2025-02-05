import { HyperdriveSdkError } from "src/HyperdriveSdkError";

const MAX_U248 = 2n ** 248n - 1n;

/**
 * Encodes the prefix for a given asset type and a timestamp into an asset ID.
 * Asset IDs are used so that LP, long, and short tokens can all be represented
 * in a single MultiToken instance.
 *
 * @param assetType - The type of the asset
 * @param timestamp - The position's maturity timestamp in seconds
 *
 * @remarks
 * The asset ID is a 256-bit integer that is composed of two parts:
 * - The first 8 bits represent the asset type
 * - The remaining 248 bits represent the timestamp
 */
export function encodeAssetId(
  assetTypePrefix: bigint,
  timestamp: bigint,
): bigint {
  if (timestamp > MAX_U248) {
    throw new HyperdriveSdkError(`Invalid timestamp: ${timestamp}`);
  }
  return (assetTypePrefix << 248n) | timestamp;
}
