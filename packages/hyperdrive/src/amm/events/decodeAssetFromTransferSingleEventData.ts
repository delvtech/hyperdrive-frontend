/**
 * This is a TypeScript port of the AssetId contract, which provides utils for
 * encoding and decoding the token ids of the Hyperdrive contract, which is a
 * multi-token contract.
 * @see https://github.com/delvtech/hyperdrive/blob/main/contracts/src/libraries/AssetId.sol
 */

import { Hash } from "viem";

export type AssetType = "LP" | "LONG" | "SHORT" | "WITHDRAWAL_SHARE";

/**
 * Decodes a TransferSingle event.data into it's constituent parts: an assetType
 * and timestamp (if it exists).
 */
export function decodeAssetFromTransferSingleEventData(eventData: Hash): {
  assetType: AssetType;
  timestamp: bigint;
} {
  // Remove the leading "0x"
  const cleanEventData = eventData.slice(2);

  // 2 hexadecimal digits (8 bits) = identifier
  const identifier = Number(cleanEventData.slice(0, 2));
  const assetType = parseAssetType(identifier);

  // 62 hexadecimal digits (248 bits) = timestamp (in seconds)
  const timestampPart = cleanEventData.slice(2, 64);
  const timestamp = BigInt(parseInt(timestampPart, 16));

  return {
    assetType,

    // NOTE: LP tokens won't have a timestamp, we'll see what happens when we
    // get to that
    timestamp,
  };
}

function parseAssetType(identifier: number): AssetType {
  if (identifier === 0) {
    return "LP";
  }
  if (identifier === 1) {
    return "LONG";
  }
  if (identifier === 2) {
    return "SHORT";
  }
  if (identifier === 3) {
    return "WITHDRAWAL_SHARE";
  }

  throw Error(
    `parseAssetType(${identifier}) did not match a valid asset type.`,
  );
}
