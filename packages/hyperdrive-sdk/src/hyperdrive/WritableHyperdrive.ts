import { Long, Short } from "@hyperdrive/core";
import { Address } from "abitype";
import { ContractWriteOptions } from "src/contract/Contract";
import { WritableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { ZERO_ADDRESS } from "src/utils/constants";
interface WritableHyperdriveOptions {
  contract: WritableHyperdriveContract;
}

export interface IWritableHyperdrive {
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
   * @param asUnderlying - TODO: come up with good comment for this
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
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Opens a new short position.
   * @param destination - The account opening the position
   * @param baseAmount - The amount of base supplied to the position
   * @param bondAmountOut - The amount of bonds to send to the destination
   * @param asUnderlying - TODO: come up with good comment for this
   * @param options - Contract Write Options
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
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Closes a long position.
   * @param long - The long position to close
   * @param bondAmountIn - The amount of of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - TODO: come up with good comment for this
   * @param options - Contract Write Options
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
    options: ContractWriteOptions;
  }): Promise<bigint>;

  /**
   * Closes a short position.
   * @param short - The short position to close
   * @param bondAmountIn - The amount of bonds to remove from the position
   * @param minBaseAmountOut - The minimum amount of base to send to the destination
   * @param destination - The account receiving the base
   * @param asUnderlying - TODO: come up with good comment for this
   * @param options - Contract Write Options
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
    options: ContractWriteOptions;
  }): Promise<bigint>;
}

export class WritableHyperdrive implements IWritableHyperdrive {
  private readonly contract: WritableHyperdriveContract;

  constructor({ contract }: WritableHyperdriveOptions) {
    this.contract = contract;
  }

  checkpoint(time: number, options?: ContractWriteOptions): Promise<void> {
    return this.contract.write("checkpoint", [BigInt(time)], options);
  }

  pause(paused: boolean, options?: ContractWriteOptions): Promise<void> {
    return this.contract.write("pause", [paused], options);
  }

  async initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asUnderlying?: boolean;
    },
    options?: ContractWriteOptions,
  ): Promise<bigint> {
    return this.contract.write(
      "initialize",
      [
        args.contribution,
        args.apr,
        args.destination,
        args?.asUnderlying ?? true,
      ],
      options,
    );
  }

  async openLong({
    destination,
    baseAmount,
    bondAmountOut,
    asUnderlying = true,
    options,
  }: {
    destination: Address;
    baseAmount: bigint;
    bondAmountOut: bigint;
    asUnderlying?: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    const { baseToken } = await this.contract.read("getPoolConfig", []);
    const requiresEth = asUnderlying && baseToken === ZERO_ADDRESS;
    return this.contract.write(
      "openLong",
      [baseAmount, bondAmountOut, destination, asUnderlying],
      {
        value: requiresEth && baseAmount ? baseAmount : 0n,
        ...options,
      },
    );
  }

  async openShort({
    destination,
    bondAmount,
    maxDeposit,
    asUnderlying = true,
    options,
  }: {
    destination: Address;
    bondAmount: bigint;
    maxDeposit: bigint;
    asUnderlying?: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this.contract.write(
      "openShort",
      [bondAmount, maxDeposit, destination, asUnderlying],
      // TODO: Do we need to pass value here?
      { value: 0n, ...options },
    );
  }

  async closeLong({
    long,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying = true,
    options,
  }: {
    long: Long;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this.contract.write(
      "closeLong",
      [
        long.maturity,
        bondAmountIn,
        minBaseAmountOut,
        destination,
        asUnderlying,
      ],
      options,
    );
  }

  async closeShort({
    short,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying = true,
    options,
  }: {
    short: Short;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying?: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this.contract.write(
      "closeShort",
      [
        short.maturity,
        bondAmountIn,
        minBaseAmountOut,
        destination,
        asUnderlying,
      ],
      options,
    );
  }
}
