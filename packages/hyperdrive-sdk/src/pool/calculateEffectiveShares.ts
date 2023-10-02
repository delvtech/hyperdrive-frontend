/**
 * From Alex: 
 * > `PoolInfo.shareAdjusmtent` is a new value that allows the
 * > effectiveShareReserves to be calculated. I'm happy to elaborate on the zeta
 * > adjustment (or "share adjustment") feature if anyone has any questions, but
 * > the gist is that instead of always using shareReserves in calculation
 * > functions, you'll now pass effectiveShareReserves = shareReserves -
 * > shareAdjustment some of the time. The parameter names and comments have
 * > changed to reflect this, but as mentioned, feel free to reach out if you're
 * > not sure which one to use.

 * @param shareReserves  from PoolInfo
 * @param shareAdjustment from PoolInfo
 * @returns effectiveShareReserves
 */
export function calculateEffectiveShareReserves(
  shareReserves: bigint,
  shareAdjustment: bigint,
): bigint {
  return shareReserves - shareAdjustment;
}
