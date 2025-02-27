export interface ClaimableReward {
  /** @example 1 */
  chainId: number;
  /**
   * Address of the claim contract.
   * @example "0x0000000000000000000000000000000000000000"
   */
  claimContractAddress: `0x${string}`;
  /**
   * Amount of tokens claimable.
   * @example "1000000000000000000"
   */
  claimableAmount: string;
  /**
   * Amount of tokens pending, not yet claimable.
   * @example "1000000000000000000"
   */
  pendingAmount: string;
  /**
   * Token address of the reward.
   * @example "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842"
   */
  rewardTokenAddress: `0x${string}`;
  /** @example ["0xProof1","0xProof2","0xProof3"] */
  merkleProof: `0x${string}`[];
}
