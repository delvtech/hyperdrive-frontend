import { Address } from "viem";

/**
 * The id to find rewards for adding liquidity to a hyperdrive.
 */
export type AddLiquidityRewardId =
  `hyperdrive:add-liquidity:${number}:${Address}`;

export function getAddLiquidityRewardId({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): AddLiquidityRewardId {
  return `hyperdrive:add-liquidity:${chainId}:${hyperdriveAddress}`;
}
