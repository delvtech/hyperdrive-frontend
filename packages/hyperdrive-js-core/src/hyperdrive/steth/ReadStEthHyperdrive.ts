import { ContractReadOptions } from "@delvtech/evm-client";
import * as dnum from "dnum";
import { Constructor } from "src/base/types";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { ReadEth } from "src/token/eth/ReadEth";
import { ReadStEth } from "src/token/steth/ReadStEth";

export interface ReadStEthHyperdriveOptions extends ReadHyperdriveOptions {
  /**
   * The `StETHHyperdrive` contract stores and operates on Lido balances in
   * shares. However, since users are most familiar with stETH public balances,
   * this model will accept and return balances in stETH by default and convert
   * them to shares when interacting with the contract to ease UI integration.
   *
   * To use shares instead of stETH, set this to `true`.
   *
   * @default false
   *
   * @see
   * https://docs.lido.fi/guides/lido-tokens-integration-guide#bookkeeping-shares
   */
  useSharesAccounting?: boolean;
}

export class ReadStEthHyperdrive extends readStEthHyperdriveMixin(
  ReadHyperdrive,
) {
  constructor(options: ReadStEthHyperdriveOptions) {
    super(options);
  }
}

/**
 * @internal
 */
export interface ReadStEthHyperdriveMixin {
  /**
   * `true` if arguments and return values should be treated as shares, `false`
   * if they should be treated as stETH public balances.
   */
  isUsingSharesAccounting: boolean;

  /**
   * Set whether the model should use shares accounting.
   * @param shouldUseSharesAccounting - Whether to use shares accounting.
   * @returns void
   */
  setUseSharesAccounting(shouldUseSharesAccounting: boolean): void;

  /**
   * Get a model of ETH, the base token for this Hyperdrive instance.
   */
  getBaseToken(options?: ContractReadOptions): Promise<ReadEth>;

  /**
   * Get a model of the Lido stETH token for this Hyperdrive instance.
   */
  getSharesToken(options?: ContractReadOptions): Promise<ReadStEth>;
}

/**
 * @internal
 */
export function readStEthHyperdriveMixin<T extends Constructor<ReadHyperdrive>>(
  Base: T,
): Constructor<ReadStEthHyperdriveMixin> & T {
  return class extends Base implements ReadStEthHyperdriveMixin {
    private _useSharesAccounting: boolean;

    constructor(...[options]: any[]) {
      const {
        name = "stETH Hyperdrive",
        address,
        contractFactory,
        network,
        cache,
        namespace,
        useSharesAccounting = false,
      } = options as ReadStEthHyperdriveOptions;
      super({ address, contractFactory, network, cache, name, namespace });
      this._useSharesAccounting = useSharesAccounting;
    }

    get isUsingSharesAccounting(): boolean {
      return this._useSharesAccounting;
    }

    setUseSharesAccounting(shouldUseSharesAccounting = true): void {
      this._useSharesAccounting = shouldUseSharesAccounting;
      this.contract.clearCache();
    }

    async getBaseToken(): Promise<ReadEth> {
      return new ReadEth({
        contractFactory: this.contractFactory,
        network: this.network,
      });
    }

    async getSharesToken(): Promise<ReadStEth> {
      const { vaultSharesToken } = await this.getPoolConfig();
      return new ReadStEth({
        address: vaultSharesToken,
        contractFactory: this.contractFactory,
        namespace: this.contract.namespace,
        network: this.network,
      });
    }

    // Calculations

    async getMaxShort(
      options?: Parameters<ReadHyperdrive["getMaxShort"]>[0],
    ): ReturnType<ReadHyperdrive["getMaxShort"]> {
      const result = await super.getMaxShort(options);

      if (!this.isUsingSharesAccounting) {
        const decimals = await this.getDecimals();
        return {
          ...result,
          // TODO: MockLido updates its price based on the current timestamp, so
          // the accuracy of max calculations will slowly drift every second.
          // This pads the max shares to avoid errors trying to open the max,
          // but may not be needed for mainnet.
          maxSharesIn: dnum.multiply(
            [result.maxBaseIn, decimals],
            [BigInt(1e18) - BigInt(1e12), decimals],
          )[0],
          // maxSharesIn: result.maxBaseIn,
        };
      }

      return result;
    }

    async getMaxLong(
      options?: Parameters<ReadHyperdrive["getMaxLong"]>[0],
    ): ReturnType<ReadHyperdrive["getMaxLong"]> {
      const result = await super.getMaxLong(options);

      if (!this.isUsingSharesAccounting) {
        const decimals = await this.getDecimals();
        return {
          ...result,
          // TODO: MockLido updates its price based on the current timestamp, so
          // the accuracy of max calculations will slowly drift every second.
          // This pads the max shares to avoid errors trying to open the max,
          // but may not be needed for mainnet.
          maxSharesIn: dnum.multiply(
            [result.maxBaseIn, decimals],
            [BigInt(1e18) - BigInt(1e12), decimals],
          )[0],
          // maxSharesIn: result.maxBaseIn,
        };
      }

      return result;
    }

    // Previews

    async previewOpenLong({
      amountIn,
      asBase,
      options,
    }: Parameters<ReadHyperdrive["previewOpenLong"]>[0]): ReturnType<
      ReadHyperdrive["previewOpenLong"]
    > {
      if (!asBase && !this.isUsingSharesAccounting) {
        amountIn = await this.convertToShares({
          baseAmount: amountIn,
          options,
        });
      }

      return super.previewOpenLong({
        amountIn,
        asBase,
        options,
      });
    }

    async previewCloseLong({
      maturityTime,
      bondAmountIn,
      asBase,
      options,
    }: Parameters<ReadHyperdrive["previewCloseLong"]>[0]): ReturnType<
      ReadHyperdrive["previewCloseLong"]
    > {
      const { flatPlusCurveFee, amountOut } = await super.previewCloseLong({
        maturityTime,
        bondAmountIn,
        asBase,
        options,
      });

      if (!asBase && !this.isUsingSharesAccounting) {
        return {
          flatPlusCurveFee,
          amountOut: await this.convertToBase({
            sharesAmount: amountOut,
            options,
          }),
        };
      }

      return { flatPlusCurveFee, amountOut };
    }

    async previewOpenShort({
      amountOfBondsToShort,
      asBase,
      options,
    }: Parameters<ReadHyperdrive["previewOpenShort"]>[0]): ReturnType<
      ReadHyperdrive["previewOpenShort"]
    > {
      const result = await super.previewOpenShort({
        amountOfBondsToShort,
        asBase,
        options,
      });

      if (!asBase && !this.isUsingSharesAccounting) {
        return {
          ...result,
          traderDeposit: await this.convertToBase({
            sharesAmount: result.traderDeposit,
            options,
          }),
        };
      }

      return result;
    }

    async previewCloseShort({
      asBase,
      maturityTime,
      shortAmountIn,
      extraData,
      options,
    }: Parameters<ReadHyperdrive["previewCloseShort"]>[0]): ReturnType<
      ReadHyperdrive["previewCloseShort"]
    > {
      const { amountOut, flatPlusCurveFee } = await super.previewCloseShort({
        asBase,
        maturityTime,
        shortAmountIn,
        extraData,
        options,
      });

      if (!asBase && !this.isUsingSharesAccounting) {
        return {
          amountOut: await this.convertToBase({
            sharesAmount: amountOut,
            options,
          }),
          flatPlusCurveFee,
        };
      }

      return { amountOut, flatPlusCurveFee };
    }

    async previewAddLiquidity({
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
      asBase,
      options,
      // TODO: Remove unused fields
      destination,
      extraData,
    }: Parameters<ReadHyperdrive["previewAddLiquidity"]>[0]): ReturnType<
      ReadHyperdrive["previewAddLiquidity"]
    > {
      if (!asBase && !this.isUsingSharesAccounting) {
        contribution = await this.convertToShares({
          baseAmount: contribution,
          options,
        });
      }

      return super.previewAddLiquidity({
        contribution,
        minAPR,
        minLpSharePrice,
        maxAPR,
        asBase,
        options,
        destination,
        extraData,
      });
    }

    async previewRemoveLiquidity({
      lpSharesIn,
      minOutputPerShare,
      destination,
      asBase,
      extraData,
      options,
    }: Parameters<ReadHyperdrive["previewRemoveLiquidity"]>[0]): ReturnType<
      ReadHyperdrive["previewRemoveLiquidity"]
    > {
      const requiresConversion = !asBase && !this.isUsingSharesAccounting;

      if (requiresConversion) {
        // Using the latest block since the preview will simulate the transaction
        // using the latest state of the contract.
        minOutputPerShare = await this.convertToShares({
          baseAmount: minOutputPerShare,
          options: {
            blockTag: "latest",
          },
        });
      }

      const result = await super.previewRemoveLiquidity({
        lpSharesIn,
        minOutputPerShare,
        destination,
        asBase,
        extraData,
        options,
      });

      if (requiresConversion) {
        return {
          ...result,
          proceeds: await this.convertToBase({
            sharesAmount: result.proceeds,
            options: {
              blockTag: "latest",
            },
          }),
        };
      }

      return result;
    }

    async previewRedeemWithdrawalShares({
      withdrawalSharesIn,
      minOutputPerShare,
      destination,
      asBase,
      extraData,
      options,
    }: Parameters<
      ReadHyperdrive["previewRedeemWithdrawalShares"]
    >[0]): ReturnType<ReadHyperdrive["previewRedeemWithdrawalShares"]> {
      const requiresConversion = !asBase && !this.isUsingSharesAccounting;

      if (requiresConversion) {
        // Using the latest block since the preview will simulate the transaction
        // using the latest state of the contract.
        minOutputPerShare = await this.convertToShares({
          baseAmount: minOutputPerShare,
          options: {
            blockTag: "latest",
          },
        });
      }

      const result = await super.previewRedeemWithdrawalShares({
        withdrawalSharesIn,
        minOutputPerShare,
        destination,
        asBase,
        extraData,
        options,
      });

      if (requiresConversion) {
        return {
          ...result,
          sharesProceeds: await this.convertToBase({
            sharesAmount: result.sharesProceeds,
            options: {
              blockTag: "latest",
            },
          }),
        };
      }

      return result;
    }
  };
}
