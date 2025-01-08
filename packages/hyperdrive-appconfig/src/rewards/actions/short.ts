import { Address } from "viem";

/**
 * The id to find rewards for opening a short position on a hyperdrive.
 */
export type OpenShortRewardId = `hyperdrive:open-short:${number}:${Address}`;

export function getOpenShortRewardId({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): OpenShortRewardId {
  return `hyperdrive:open-short:${chainId}:${hyperdriveAddress}`;
}
