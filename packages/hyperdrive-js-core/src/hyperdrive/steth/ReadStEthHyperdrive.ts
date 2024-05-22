import { ContractReadOptions } from "@delvtech/evm-client";
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

    async previewOpenLong({
      amountIn: _amountIn,
      asBase,
      options,
    }: Parameters<ReadHyperdrive["previewOpenLong"]>[0]): ReturnType<
      ReadHyperdrive["previewOpenLong"]
    > {
      let amountIn = _amountIn;

      if (!asBase && !this.isUsingSharesAccounting) {
        amountIn = await this.convertToShares(amountIn, options);
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
      const requiresConversion = !asBase && !this.isUsingSharesAccounting;

      const { flatPlusCurveFee, maxAmountOut } = await super.previewCloseLong({
        maturityTime,
        bondAmountIn,
        asBase,
        options,
      });

      if (requiresConversion) {
        const convertedStEthAmount = await this.convertToStEth(maxAmountOut, {
          blockTag: "latest",
        });
        return { maxAmountOut: convertedStEthAmount, flatPlusCurveFee };
      }

      return { maxAmountOut, flatPlusCurveFee };
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
          traderDeposit: await this.convertToStEth(
            result.traderDeposit,
            options,
          ),
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
      const requiresConversion = !asBase && !this.isUsingSharesAccounting;

      const { amountOut, flatPlusCurveFee } = await super.previewCloseShort({
        asBase,
        maturityTime,
        shortAmountIn,
        extraData,
        options,
      });

      if (requiresConversion) {
        const convertedStEthAmount = await this.convertToStEth(amountOut, {
          blockTag: "latest",
        });
        return { amountOut: convertedStEthAmount, flatPlusCurveFee };
      }

      return { amountOut, flatPlusCurveFee };
    }

    async previewAddLiquidity({
      contribution: _contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
      destination,
      asBase,
      extraData,
      options,
    }: Parameters<ReadHyperdrive["previewAddLiquidity"]>[0]): ReturnType<
      ReadHyperdrive["previewAddLiquidity"]
    > {
      let contribution = _contribution;

      if (!asBase && !this.isUsingSharesAccounting) {
        // Using the latest block since the preview will simulate the transaction
        // using the latest state of the contract.
        contribution = await this.convertToShares(contribution, {
          blockTag: "latest",
        });
      }

      return super.previewAddLiquidity({
        contribution,
        minAPR,
        minLpSharePrice,
        maxAPR,
        destination,
        asBase,
        extraData,
        options,
      });
    }

    async previewRemoveLiquidity({
      lpSharesIn,
      minOutputPerShare: _minOutputPerShare,
      destination,
      asBase,
      extraData,
      options,
    }: Parameters<ReadHyperdrive["previewRemoveLiquidity"]>[0]): ReturnType<
      ReadHyperdrive["previewRemoveLiquidity"]
    > {
      const requiresConversion = !asBase && !this.isUsingSharesAccounting;
      let minOutputPerShare = _minOutputPerShare;

      if (requiresConversion) {
        // Using the latest block since the preview will simulate the transaction
        // using the latest state of the contract.
        minOutputPerShare = await this.convertToShares(minOutputPerShare, {
          blockTag: "latest",
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
          proceeds: await this.convertToStEth(result.proceeds),
        };
      }

      return result;
    }

    /**
     * Convert a stETH amount to shares.
     */
    private async convertToShares(
      stEthAmount: bigint,
      options?: ContractReadOptions,
    ): Promise<bigint> {
      const stEth = await this.getSharesToken();
      const sharesAmount = await stEth.getSharesByPooledEth({
        ethAmount: stEthAmount,
        options,
      });
      // FIXME: Remove and find solution for mainnet
      // This is needed because the conversion done before submitting the
      // transaction to open a position and by the time the position TX is
      // submitted, the share price could have changed.
      return sharesAmount - (sharesAmount % BigInt(1e16));
    }

    /**
     * Convert a share amount to stETH.
     */
    private async convertToStEth(
      sharesAmount: bigint,
      options?: ContractReadOptions,
    ): Promise<bigint> {
      const stEth = await this.getSharesToken();
      return stEth.getPooledEthByShares({ sharesAmount, options });
    }
  };
}
