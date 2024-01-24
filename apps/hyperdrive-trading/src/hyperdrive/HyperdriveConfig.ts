import { TokenConfig } from "src/token/TokenConfig";
import { yieldSources } from "src/yieldSources/yieldSources";
import { Address } from "viem";

/**
 * The appconfig a hyperdrive instance
 */

export interface HyperdriveConfig {
  address: Address;
  name: string;

  /**
   * The base token for hyperdrive deposits and withdrawals, eg: DAI or ETH
   */
  baseToken: TokenConfig;

  /**
   * The shares token for hyperdrive deposits and withdrawals, eg: sDAI or stETH
   */
  sharesToken: TokenConfig;

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

  yieldSource: keyof typeof yieldSources;
  termLengthMS: number;
}
