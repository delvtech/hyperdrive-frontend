import { PoolConfig } from "@delvtech/hyperdrive-viem";
import { yieldSources } from "src/yieldSources";
import { Address } from "viem";

export interface HyperdriveConfig {
  address: Address;
  name: string;
  version: string;
  decimals: number;

  /**
   * The base token for hyperdrive deposits and withdrawals, eg: DAI or ETH
   */
  baseToken: Address;

  /**
   * The shares token for hyperdrive deposits and withdrawals, eg: sDAI or stETH
   */
  sharesToken: Address;

  /**
   * The yield source backing the pool,
   */
  yieldSource: keyof typeof yieldSources;

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
}
