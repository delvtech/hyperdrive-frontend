import { PoolConfig } from "@delvtech/hyperdrive-viem";
import { Address } from "viem";

export interface HyperdriveConfig {
  address: Address;
  name: string;

  decimals: number;

  /**
   * The base token for hyperdrive deposits and withdrawals, eg: DAI or ETH
   */
  baseToken: Address;

  /**
   * The shares token for hyperdrive deposits and withdrawals, eg: sDAI or stETH
   */
  sharesToken: Address;

  withdrawOptions: {
    /**
     * If true, users will be able to withdraw from hyperdrive in denominations
     * of base tokens. This is useful particularly in the case of stETH, where
     * you can't get vanilla ETH back out (due to how Lido works, it's a
     * multi-step, multi-day process to withdraw), but you are able to deposit
     * it.
     */
    isBaseTokenWithdrawalEnabled: boolean;
  };

  poolConfig: PoolConfig;
}
