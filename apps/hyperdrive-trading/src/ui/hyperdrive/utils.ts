import { BigNumber } from "ethers";

/**
 * @deprecated
 */
export function getAssetTimestampFromTokenId(id: bigint): number {
  const idBN = BigNumber.from(id);
  return idBN
    .and("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    .toNumber();
}
