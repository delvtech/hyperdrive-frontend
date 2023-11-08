import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";
import { subtractBigInt } from "src/base/subtractBigInt/subtractBigInt";

export function calculateShortAccruedYield({
  toSharePrice,
  fromSharePrice,
  bondAmount,
  decimals,
}: {
  toSharePrice: bigint;
  fromSharePrice: bigint;
  bondAmount: bigint;
  decimals: number;
}): bigint {
  return multiplyBigInt(
    [subtractBigInt([toSharePrice, fromSharePrice]), bondAmount],
    decimals,
  );
}
