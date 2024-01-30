import { IReadWriteHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { Address } from "abitype";
import {
  IReadHyperdrive,
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive/ReadHyperdrive";
import { Long } from "src/longs/types";
import { Short } from "src/shorts/types";
import { ZERO_ADDRESS } from "src/base/numbers";
import {
  ContractWriteOptions,
  ContractWriteOptionsWithCallback,
} from "@hyperdrive/evm-client";
import { DEFAULT_EXTRA_DATA } from "src/hyperdrive/constants";
import { ReturnType } from "src/base/ReturnType";

export interface IReadWriteHyperdrive extends IReadHyperdrive {
  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  checkpoint(time: number, options?: ContractWriteOptions): Promise<void>;

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  pause(paused: boolean, options?: ContractWriteOptions): Promise<void>;

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
  ): Promise<bigint>;

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
  openLong({
    destination,
    baseAmount,
    bondAmountOut,
    asUnderlying,
    options,
  }: {
    destination: Address;
    baseAmount: bigint;
    bondAmountOut: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<{ maturityTime: bigint; bondProceeds: bigint }>;

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
  openShort({
    destination,
    bondAmount,
    maxDeposit,
    asUnderlying,
    options,
  }: {
    destination: Address;
    bondAmount: bigint;
    maxDeposit: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<{ maturityTime: bigint; traderDeposit: bigint }>;

  /**
   * Closes a long position.
   * @param long - The long position to close
   * @param bondAmountIn - The amount of of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return The amount of underlying asset the user receives.
   */
  closeLong({
    long,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    long: Long;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<bigint>;

  /**
   * Closes a short position.
   * @param short - The short position to close
   * @param bondAmountIn - The amount of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return The amount of base tokens produced by closing this short
   */
  closeShort({
    short,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    short: Short;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<bigint>;

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
  addLiquidity({
    destination,
    contribution,
    minAPR,
    minLpSharePrice,
    maxAPR,
    asUnderlying,
    options,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<bigint>;

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
  removeLiquidity({
    destination,
    lpSharesIn,
    minBaseAmountOut,
    asUnderlying,
    options,
  }: {
    destination: Address;
    lpSharesIn: bigint;
    minBaseAmountOut: bigint;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<{ baseProceeds: bigint; withdrawShares: bigint }>;

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
  redeemWithdrawalShares({
    withdrawalSharesIn,
    minBaseAmountOutPerShare,
    destination,
    asUnderlying,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minBaseAmountOutPerShare: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options?: ContractWriteOptionsWithCallback;
  }): Promise<{ baseProceeds: bigint; sharesRedeemed: bigint }>;
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

  async checkpoint(
    time: number,
    options?: ContractWriteOptions,
  ): Promise<void> {
    this.contract.write("checkpoint", [BigInt(time)], options);
  }

  async pause(paused: boolean, options?: ContractWriteOptions): Promise<void> {
    this.contract.write("pause", [paused], options);
  }

  async initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asBase: boolean;
      extraData: `0x${string}`;
    },
    options?: ContractWriteOptions,
  ): Promise<bigint> {
    const [result] = await this.contract.write(
      "initialize",
      [
        args.contribution,
        args.apr,
        {
          destination: args.destination,
          asBase: args.asBase,
          extraData: args.extraData,
        },
      ],
      options,
    );
    return result;
  }

  async openLong({
    destination,
    baseAmount,
    bondAmountOut,
    minSharePrice,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    baseAmount: bigint;
    bondAmountOut: bigint;
    minSharePrice: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "openLong"> {
    const { baseToken } = await this.getPoolConfig();
    const requiresEth = asBase && baseToken === ZERO_ADDRESS;
    const [maturityTime, bondProceeds] = await this.contract.write(
      "openLong",
      [
        baseAmount,
        bondAmountOut,
        minSharePrice,
        { destination, asBase, extraData },
      ],
      { value: requiresEth && baseAmount ? baseAmount : 0n, ...options },
    );
    return { maturityTime, bondProceeds };
  }

  async openShort({
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
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "openShort"> {
    const [maturityTime, traderDeposit] = await this.contract.write(
      "openShort",
      [
        bondAmount,
        maxDeposit,
        minSharePrice,
        { destination, asBase, extraData },
      ],
      // TODO: Do we need to pass value here?
      { value: 0n, ...options },
    );
    return { maturityTime, traderDeposit };
  }

  async closeLong({
    long,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    long: Long;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "closeLong"> {
    const [result] = await this.contract.write(
      "closeLong",
      [
        long.maturity,
        bondAmountIn,
        minBaseAmountOut,
        { destination, asBase, extraData },
      ],
      options,
    );
    return result;
  }

  async closeShort({
    short,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    short: Short;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "closeShort"> {
    const [result] = await this.contract.write(
      "closeShort",
      [
        short.maturity,
        bondAmountIn,
        minBaseAmountOut,
        { destination, asBase, extraData },
      ],
      options,
    );
    return result;
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
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "addLiquidity"> {
    const { baseToken } = await this.getPoolConfig();
    const requiresEth = asBase && baseToken === ZERO_ADDRESS;
    const [lpShares] = await this.contract.write(
      "addLiquidity",
      [
        contribution,
        minLpSharePrice,
        minAPR,
        maxAPR,
        { destination, asBase, extraData },
      ],
      {
        value: requiresEth && contribution ? contribution : 0n,
        ...options,
      },
    );
    return lpShares;
  }

  async removeLiquidity({
    destination,
    lpSharesIn,
    minBaseAmountOut,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    destination: Address;
    lpSharesIn: bigint;
    minBaseAmountOut: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "removeLiquidity"> {
    const [baseProceeds, withdrawShares] = await this.contract.write(
      "removeLiquidity",
      [lpSharesIn, minBaseAmountOut, { destination, asBase, extraData }],
      options,
    );
    return { baseProceeds, withdrawShares };
  }

  async redeemWithdrawalShares({
    withdrawalSharesIn,
    minBaseAmountOutPerShare,
    destination,
    asBase = true,
    extraData = DEFAULT_EXTRA_DATA,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minBaseAmountOutPerShare: bigint;
    destination: Address;
    asBase?: boolean;
    extraData?: `0x${string}`;
    options?: ContractWriteOptionsWithCallback;
  }): ReturnType<IReadWriteHyperdrive, "redeemWithdrawalShares"> {
    const [baseProceeds, sharesRedeemed] = await this.contract.write(
      "redeemWithdrawalShares",
      [
        withdrawalSharesIn,
        minBaseAmountOutPerShare,
        { destination, asBase, extraData },
      ],
      options,
    );
    return { baseProceeds, sharesRedeemed };
  }
}
