import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { calculateEquivalentShareValue } from "src/hyperdrive/calculateEquivalentShareValue";

export function getWithdrawalSharesCurrentValue({
  lpSharePrice,
  decimals,
  withdrawalShares,
  withdrawalSharesRedeemedFromPreview,

  baseProceedsFromPreview,
}: {
  lpSharePrice: bigint | undefined;
  decimals: number;
  withdrawalShares: bigint | undefined;
  baseProceedsFromPreview: bigint | undefined;
  withdrawalSharesRedeemedFromPreview: bigint | undefined;
}): bigint | undefined {
  if (lpSharePrice === undefined || withdrawalShares === undefined) {
    return;
  }

  // Get a more accurate estimate from previewing the redeem withdrawal shares
  // and basing the current value of all of your withdrawal shares on actual
  // redemption data.
  if (
    baseProceedsFromPreview !== undefined &&
    withdrawalSharesRedeemedFromPreview
  ) {
    return calculateEquivalentShareValue({
      targetShares: withdrawalShares,
      referenceShares: withdrawalSharesRedeemedFromPreview,
      totalReferenceValue: baseProceedsFromPreview,
      decimals,
    });
  }

  // If withdrawal shares are not yet redeemable, we should just treat
  // them as the same value as lp shares.
  return calculateValueFromPrice({
    amount: withdrawalShares,
    unitPrice: lpSharePrice,
    decimals,
  });
}
