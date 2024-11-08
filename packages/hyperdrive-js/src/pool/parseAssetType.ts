import { HyperdriveSdkError } from "src/errors/HyperdriveSdkError";

export type AssetType = "LP" | "LONG" | "SHORT" | "WITHDRAWAL_SHARE";
export function parseAssetType(identifier: number): AssetType {
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

  throw new HyperdriveSdkError(
    `parseAssetType(${identifier}) did not match a valid asset type.`,
  );
}
