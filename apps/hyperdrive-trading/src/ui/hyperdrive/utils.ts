import { BigNumber } from "ethers";

// todo: move to hyperdrive package
export function getAssetPrefixFromTokenId(id: bigint): number {
  const idBN = BigNumber.from(id);
  return idBN.shr(0xf8).toNumber();
}

export function getAssetTimestampFromTokenId(id: bigint): number {
  const idBN = BigNumber.from(id);
  return idBN
    .and("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    .toNumber();
}

export const LONG_PREFIX_ID = 0;
export const SHORT_PREFIX_ID = 0;
