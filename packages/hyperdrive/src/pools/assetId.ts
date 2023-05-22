/**
 * This is a TypeScript port of the AssetId contract, which provides utils for
 * encoding and decoding the token ids of the Hyperdrive contract, which is a
 * multi-token contract.
 * @see github.com/delvtech/hyperdrive/blob/main/contracts/src/libraries/AssetId.sol
 */

export const LP_ASSET_ID_PREFIX = 0 as const;
export const LONG_ASSET_ID_PREFIX = 1 as const;
export const SHORT_ASSET_ID_PREFIX = 2 as const;
export const WITHDRAWAL_SHARE_ASSET_ID_PREFIX = 3 as const;

export type AssetIdPrefix =
  | typeof LP_ASSET_ID_PREFIX
  | typeof LONG_ASSET_ID_PREFIX
  | typeof SHORT_ASSET_ID_PREFIX
  | typeof WITHDRAWAL_SHARE_ASSET_ID_PREFIX;

// Encodes a prefix and a timestamp into an asset ID. Asset IDs are
// used so that LP, long, and short tokens can all be represented in a
// single MultiToken instance. The zero asset ID indicates the LP
// token.
// _prefix: A one byte prefix that specifies the asset type.
// _timestamp: A timestamp associated with the asset.
// Returns: The asset ID.
export function encodeAssetId(
  assetPrefix: AssetIdPrefix,
  timestamp: bigint,
): bigint {
  // [identifier: 8 bits][timestamp: 248 bits]
  if (
    timestamp >
    0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn
  ) {
    throw new Error("InvalidTimestamp");
  }
  return (BigInt(assetPrefix) << 248n) | timestamp;
}

// Decodes an encoded asset ID into it's constituent parts of an
// identifier, data and a timestamp.
// _id: The asset ID.
// Returns: _prefix: A one byte prefix that specifies the asset type.
// _timestamp: A timestamp associated with the asset.
export function decodeAssetId(assetId: bigint): {
  assetIdPrefix: AssetIdPrefix;
  timestamp: bigint;
} {
  // [identifier: 8 bits][timestamp: 248 bits]
  const assetIdPrefix = Number(assetId >> 248n) as AssetIdPrefix;
  const timestamp =
    assetId & 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn;
  return { assetIdPrefix, timestamp };
}

export function isHyperdriveShort(assetId: bigint): boolean {
  return decodeAssetId(assetId).assetIdPrefix === SHORT_ASSET_ID_PREFIX;
}
