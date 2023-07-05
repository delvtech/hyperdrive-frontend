import { BigNumber } from "ethers";

export function getAssetTimestampFromTokenId(id: bigint): number {
  const idBN = BigNumber.from(id);
  return idBN
    .and("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    .toNumber();
}
