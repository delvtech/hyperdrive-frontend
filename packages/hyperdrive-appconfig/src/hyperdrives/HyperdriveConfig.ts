import type { PoolConfig } from "@delvtech/hyperdrive-js";
import { YieldSourceId } from "src/yieldSources/types";
import { Address } from "viem";

export interface HyperdriveConfig {
  chainId: number;
  kind: string;
  initializationBlock: bigint;
  initializationTimestamp: bigint;
  address: Address;
  name: string;
  version: string;
  decimals: number;

  /**
   * The yield source backing the pool,
   */
  yieldSource: YieldSourceId;

  depositOptions: {
    /**
     * If true, users will be able to deposit baseTokens into hyperdrive.
     * This is useful on a testnet such as Sepolia where users can't withdraw
     * their funds to the base asset, so disabling deposits on this asset
     * is a good idea.
     */
    isBaseTokenDepositEnabled: boolean;
    isShareTokenDepositsEnabled?: boolean;
  };

  withdrawOptions: {
    /**
     * If true, users will be able to withdraw from hyperdrive in denominations
     * of base tokens. This is useful particularly in the case of stETH, where
     * you can't get vanilla ETH back out (due to how Lido works, it's a
     * multi-step, multi-day process to withdraw), but you are able to deposit
     * it.
     */
    isBaseTokenWithdrawalEnabled: boolean;
    isShareTokenWithdrawalEnabled?: boolean;
  };

  poolConfig: PoolConfig;

  /**
   * If true, the shares token will be considered 1 to 1 with the
   * base token. Defaults to false.
   */
  isSharesPeggedToBase?: boolean;

  /**
   * For use in cases where the poolConfig.baseToken is the zero address. For
   * example, this tells you what the vaultSharePrice of a hyperdrive is
   * denominated in.
   */
  baseTokenFallback?: {
    chainId: number;
    address: Address;
  };
}
