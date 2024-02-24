import { IReadWriteHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { Address } from "abitype";
import {
  IReadHyperdrive,
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { Long } from "src/longs/types";
import { Short } from "src/shorts/types";
import { ContractWriteOptions } from "@delvtech/evm-client";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { ReturnType } from "src/base/ReturnType";

export interface IReadWriteHyperdrive extends IReadHyperdrive {
  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  checkpoint(
    time: number,
    options?: ContractWriteOptions,
  ): Promise<`0x${string}`>;

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  pause(
    paused: boolean,
    options?: ContractWriteOptions,
  ): Promise<`0x${string}`>;

  /**
   * Allows the first LP to initialize the market with a target APR.
   * @param args.contribution - The amount of base to supply.
   * @param args.apr - The target APR.
   * @param args.destination - The destination of the LP shares.
   * @param args.asUnderlying - If true the user is charged in underlying if false
   *                      the contract transfers in yield source directly. Note
   *                      - for some paths one choice may be disabled or
   *                      blocked.
   * @returns The initial number of LP shares created.
   */
  initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asUnderlying?: boolean;
    },
    options?: ContractWriteOptions,
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
  openLong(args: {
    destination: Address;
    amount: bigint;
    minBondsOut: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  openShort(args: {
    destination: Address;
    bondAmount: bigint;
    maxDeposit: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  closeLong(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  closeShort(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  addLiquidity(args: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  removeLiquidity(args: {
    destination: Address;
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;

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
  redeemWithdrawalShares(args: {
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptions;
  }): Promise<`0x${string}`>;
}

export interface ReadWriteHyperdriveOptions extends ReadHyperdriveOptions {
  contract: IReadWriteHyperdriveContract;
}

export class ReadWriteHyperdrive
  extends ReadHyperdrive
  implements IReadWriteHyperdrive
{
  protected readonly contract: IReadWriteHyperdriveContract;

  constructor({ contract, network }: ReadWriteHyperdriveOptions) {
    super({ contract, network });
    this.contract = contract;
  }

  checkpoint(
    time: number,
    options?: ContractWriteOptions,
  ): Promise<`0x${string}`> {
    return this.contract.write(
      "checkpoint",
      { _checkpointTime: BigInt(time) },
      options,
    );
  }

  pause(
    paused: boolean,
    options?: ContractWriteOptions,
  ): Promise<`0x${string}`> {
    return this.contract.write("pause", { _status: paused }, options);
  }

  initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asBase: boolean;
      extraData: `0x${string}`;
    },
    options?: ContractWriteOptions,
  ): Promise<`0x${string}`> {
    return this.contract.write(
      "initialize",
      {
        _apr: args.apr,
        _contribution: args.contribution,
        _options: {
          destination: args.destination,
          asBase: args.asBase,
          extraData: args.extraData,
        },
      },
      options,
    );
  }

  async openLong({
    destination,
    amount,
    minBondsOut,
    minSharePrice,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    amount: bigint;
    minBondsOut: bigint;
    minSharePrice: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "openLong"> {
    return this.contract.write(
      "openLong",
      {
        _amount: amount,
        _minOutput: minBondsOut,
        _minVaultSharePrice: minSharePrice,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  openShort({
    destination,
    bondAmount,
    minSharePrice,
    maxDeposit,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    bondAmount: bigint;
    minSharePrice: bigint;
    maxDeposit: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "openShort"> {
    return this.contract.write(
      "openShort",
      {
        _bondAmount: bondAmount,
        _maxDeposit: maxDeposit,
        _minVaultSharePrice: minSharePrice,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  closeLong({
    maturityTime,
    bondAmountIn,
    minAmountOut,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "closeLong"> {
    return this.contract.write(
      "closeLong",
      {
        _maturityTime: maturityTime,
        _bondAmount: bondAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  closeShort({
    maturityTime,
    bondAmountIn,
    minAmountOut,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "closeShort"> {
    return this.contract.write(
      "closeShort",
      {
        _maturityTime: maturityTime,
        _bondAmount: bondAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  async addLiquidity({
    destination,
    contribution,
    minAPR,
    minLpSharePrice,
    maxAPR,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "addLiquidity"> {
    return this.contract.write(
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
  }

  removeLiquidity({
    destination,
    lpSharesIn,
    minOutputPerShare,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "removeLiquidity"> {
    return this.contract.write(
      "removeLiquidity",
      {
        _lpShares: lpSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }

  redeemWithdrawalShares({
    withdrawalSharesIn,
    minOutputPerShare,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptions;
  }): ReturnType<IReadWriteHyperdrive, "redeemWithdrawalShares"> {
    return this.contract.write(
      "redeemWithdrawalShares",
      {
        _withdrawalShares: withdrawalSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      options,
    );
  }
}
