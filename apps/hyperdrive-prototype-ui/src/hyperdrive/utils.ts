import { BigNumber } from "ethers";

export function getAssetPrefixFromTokenId(bn: BigNumber): number {
  return bn.shr(0xf8).toNumber();
}

export function getAssetTimestampFromTokenId(bn: BigNumber): BigNumber {
  return bn.and(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
  );
}
