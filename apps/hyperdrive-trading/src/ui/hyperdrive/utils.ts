import { BigNumber } from "ethers";

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
