export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const MAX_UINT256 = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
);

export const DAILY_AVERAGE_BLOCK_TOTAL = 7127n;

/**
 * SHIFT_DECIMALS is used to adjust the price to have 18 decimal places,
 * which is a common standard for ERC20 token prices.
 */
export const SHIFT_DECIMALS = 10n ** 18n;
