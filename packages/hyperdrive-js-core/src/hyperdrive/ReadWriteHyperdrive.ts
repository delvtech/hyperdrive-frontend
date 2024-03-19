import {
  IReadHyperdrive,
  ReadHyperdrive,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import {
  CachedReadWriteContract,
  ContractReadOptions,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { ReturnType } from "src/base/ReturnType";
import {
  ReadWriteContractModelOptions,
  ReadWriteModel,
} from "src/model/ReadWriteModel";
import { Constructor } from "src/base/types";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { HyperdriveAbi } from "src/hyperdrive/abi";
import { isReadWriteContract } from "src/evm-client/utils/isReadWriteContract";
import { ExpectedWriteContractError } from "src/evm-client/errors/ExpectedReadWriteContractError";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export interface IReadWriteHyperdrive extends IReadHyperdrive, ReadWriteModel {
  contractFactory: ReadWriteContractFactory;

  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  checkpoint(params: ReadWriteParams<{ time: number }>): Promise<`0x${string}`>;

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  pause(
    params: ReadWriteParams<{
      paused: boolean;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Allows the first LP to initialize the market with a target APR.
   * @param args.contribution - The amount of base to supply.
   * @param args.apr - The target APR.
   * @param args.destination - The destination of the LP shares.
   * @param args.asBase - If true the user is charged in underlying if false
   *                      the contract transfers in yield source directly. Note
   *                      - for some paths one choice may be disabled or
   *                      blocked.
   * @returns The initial number of LP shares created.
   */
  initialize(
    params: ReadWriteParams<{
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Opens a new long position.
   * @param destination - The account opening the position
   * @param baseAmount - The amount of base supplied to the position
   * @param bondAmountOut - The amount of bonds to send to the destination
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return bondProceeds - The amount of bonds the user received
   *
   */
  openLong(
    params: ReadWriteParams<{
      destination: `0x${string}`;
      amount: bigint;
      minVaultSharePrice: bigint;
      minBondsOut: bigint;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Opens a new short position.
   * @param destination - The account opening the position
   * @param baseAmount - The amount of base supplied to the position
   * @param bondAmountOut - The amount of bonds to send to the destination
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return maturityTime - The maturity time of the short.
   * @return traderDeposit - The amount the user deposited for this trade.
   */
  openShort(
    params: ReadWriteParams<{
      destination: `0x${string}`;
      minVaultSharePrice: bigint;
      bondAmount: bigint;
      maxDeposit: bigint;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Closes a long position.
   * @param maturityTime - The maturity time of the long
   * @param bondAmountIn - The amount of of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return The amount of underlying asset the user receives.
   */
  closeLong(
    params: ReadWriteParams<{
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: `0x${string}`;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Closes a short position.
   * @param maturityTime - The maturity time of the short
   * @param bondAmountIn - The amount of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return The amount of base tokens produced by closing this short
   */
  closeShort(
    params: ReadWriteParams<{
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: `0x${string}`;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Adds liquidity to the pool.
   * @param destination - The account adding liquidity
   * @param contribution - The amount of base to supply
   * @param minAPR - The minimum APR to accept
   * @param minLpSharePrice - The minimum LP share price to accept
   * @param maxAPR - The maximum APR to accept
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return lpShares The number of LP tokens created
   */
  addLiquidity(
    params: ReadWriteParams<{
      destination: `0x${string}`;
      contribution: bigint;
      minAPR: bigint;
      minLpSharePrice: bigint;
      maxAPR: bigint;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Removes liquidity from the pool.
   * @param destination - The account removing liquidity
   * @param lpSharesIn - The amount of LP shares to remove
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @returns baseProceeds - The base the LP removing liquidity receives. The LP
   receives a proportional amount of the pool's idle capital
   * @returns withdrawShares - The base that the LP receives buys out some of their LP  shares, but it may not be sufficient to fully buy the LP out. In this case, the LP receives withdrawal shares equal in value to the present value they are owed. As idle capital becomes available, the pool will buy back these shares.
   */
  removeLiquidity(
    params: ReadWriteParams<{
      destination: `0x${string}`;
      lpSharesIn: bigint;
      minOutputPerShare: bigint;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;

  /**
   * Redeems withdrawal shares.
   * @param withdrawalSharesIn - The amount of withdrawal shares to redeem
   * @param minBaseAmountOutPerShare - The minimum amount of base to send to the destination per share
   * @param destination - The account receiving the base
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return baseProceeds The amount of base the LP received.
   * @return sharesRedeemed The amount of withdrawal shares that were redeemed.
   */
  redeemWithdrawalShares(
    params: ReadWriteParams<{
      withdrawalSharesIn: bigint;
      minOutputPerShare: bigint;
      destination: `0x${string}`;
      asBase?: boolean;
      extraData?: `0x${string}`;
    }>,
  ): Promise<`0x${string}`>;
}

export interface ReadWriteHyperdriveOptions
  extends ReadWriteContractModelOptions {}

/**
 * A mixin that adds write methods to a {@linkcode ReadHyperdrive} class.
 *
 * The write methods depend on `this.contract` being a
 * {@linkcode CachedReadWriteContract} after the constructor is called. If it's
 * not, an error will be thrown.
 *
 * @param ReadHyperdrive - The class with read methods to extend.
 * @returns - A new class that extends the original class and adds write
 * methods.
 * @throws An {@linkcode ExpectedWriteContractError} If `this.contract` is not a
 * {@linkcode CachedReadWriteContract}.
 */
export function readWriteHyperdriveMixin<
  TReadHyperdrive extends Constructor<ReadHyperdrive>,
>(
  ReadHyperdrive: TReadHyperdrive,
): Constructor<IReadWriteHyperdrive> & TReadHyperdrive {
  return class extends ReadHyperdrive {
    declare contract: CachedReadWriteContract<HyperdriveAbi>;
    declare contractFactory: ReadWriteContractFactory;

    constructor(...args: any[]) {
      const [options] = args as [ReadWriteHyperdriveOptions];
      super(options);
      if (!isReadWriteContract(this.contract)) {
        throw new ExpectedWriteContractError(options.address);
      }
    }

    async getBaseToken(
      options?: ContractReadOptions,
    ): Promise<ReadWriteErc20 | ReadWriteEth> {
      const address = await this.contract.read("baseToken", {}, options);
      return address === ReadWriteEth.address
        ? new ReadWriteEth({
            contractFactory: this.contractFactory,
            network: this.network,
          })
        : new ReadWriteErc20({
            address,
            contractFactory: this.contractFactory,
            namespace: this.contract.namespace,
            network: this.network,
          });
    }

    async checkpoint({
      args: { time },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"checkpoint">): Promise<`0x${string}`> {
      const hash = await this.contract.write(
        "checkpoint",
        { _checkpointTime: BigInt(time) },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async pause({
      args: { paused },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"pause">): Promise<`0x${string}`> {
      const hash = await this.contract.write(
        "pause",
        { _status: paused },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.deleteRead("getMarketState");
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async initialize({
      args: {
        contribution,
        apr,
        destination,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"initialize">): Promise<`0x${string}`> {
      const hash = await this.contract.write(
        "initialize",
        {
          _apr: apr,
          _contribution: contribution,
          _options: {
            destination: destination,
            asBase: asBase,
            extraData: extraData,
          },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async openLong({
      args: {
        destination,
        amount,
        minBondsOut,
        minVaultSharePrice,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"openLong">): ReturnType<
      IReadWriteHyperdrive,
      "openLong"
    > {
      const hash = await this.contract.write(
        "openLong",
        {
          _amount: amount,
          _minOutput: minBondsOut,
          _minVaultSharePrice: minVaultSharePrice,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async openShort({
      args: {
        destination,
        bondAmount,
        minVaultSharePrice,
        maxDeposit,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"openShort">): ReturnType<
      IReadWriteHyperdrive,
      "openShort"
    > {
      const hash = await this.contract.write(
        "openShort",
        {
          _bondAmount: bondAmount,
          _maxDeposit: maxDeposit,
          _minVaultSharePrice: minVaultSharePrice,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async closeLong({
      args: {
        maturityTime,
        bondAmountIn,
        minAmountOut,
        destination,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"closeLong">): ReturnType<
      IReadWriteHyperdrive,
      "closeLong"
    > {
      const hash = await this.contract.write(
        "closeLong",
        {
          _maturityTime: maturityTime,
          _bondAmount: bondAmountIn,
          _minOutput: minAmountOut,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async closeShort({
      args: {
        maturityTime,
        bondAmountIn,
        minAmountOut,
        destination,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"closeShort">): ReturnType<
      IReadWriteHyperdrive,
      "closeShort"
    > {
      const hash = await this.contract.write(
        "closeShort",
        {
          _maturityTime: maturityTime,
          _bondAmount: bondAmountIn,
          _minOutput: minAmountOut,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async addLiquidity({
      args: {
        destination,
        contribution,
        minAPR,
        minLpSharePrice,
        maxAPR,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"addLiquidity">): ReturnType<
      IReadWriteHyperdrive,
      "addLiquidity"
    > {
      const hash = await this.contract.write(
        "addLiquidity",
        {
          _contribution: contribution,
          _minLpSharePrice: minLpSharePrice,
          _minApr: minAPR,
          _maxApr: maxAPR,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async removeLiquidity({
      args: {
        destination,
        lpSharesIn,
        minOutputPerShare,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"removeLiquidity">): ReturnType<
      IReadWriteHyperdrive,
      "removeLiquidity"
    > {
      const hash = await this.contract.write(
        "removeLiquidity",
        {
          _lpShares: lpSharesIn,
          _minOutputPerShare: minOutputPerShare,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }

    async redeemWithdrawalShares({
      args: {
        withdrawalSharesIn,
        minOutputPerShare,
        destination,
        asBase = true,
        extraData = DEFAULT_EXTRA_DATA,
      },
      options,
      onTransactionMined,
    }: ExtractMethodParams<"redeemWithdrawalShares">): ReturnType<
      IReadWriteHyperdrive,
      "redeemWithdrawalShares"
    > {
      const hash = await this.contract.write(
        "redeemWithdrawalShares",
        {
          _withdrawalShares: withdrawalSharesIn,
          _minOutputPerShare: minOutputPerShare,
          _options: { destination, asBase, extraData },
        },
        options,
      );
      this.network.waitForTransaction(hash).then(() => {
        this.contract.clearCache();
        onTransactionMined?.(hash);
      });
      return hash;
    }
  };
}

export class ReadWriteHyperdrive extends readWriteHyperdriveMixin(
  ReadHyperdrive,
) {
  declare contract: CachedReadWriteContract<HyperdriveAbi>;

  constructor(options: ReadWriteHyperdriveOptions) {
    super(options);
  }
}

type ReadWriteParams<Args> = {
  args: Args;
  options?: ContractWriteOptions;
  onTransactionMined?: (hash: `0x${string}`) => void;
};

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type ExtractMethodParams<
  MethodName extends FunctionKeys<IReadWriteHyperdrive>,
> = Parameters<IReadWriteHyperdrive[MethodName]>[0];
