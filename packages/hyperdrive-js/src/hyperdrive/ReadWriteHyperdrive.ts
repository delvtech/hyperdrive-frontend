import { ContractReadOptions, ReadWriteAdapter } from "@delvtech/drift";
import { NULL_BYTES } from "src/base/constants";
import { SdkWriteParams } from "src/drift/SdkClient";
import { ReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

export class ReadWriteHyperdrive<
  A extends ReadWriteAdapter = ReadWriteAdapter,
> extends ReadHyperdrive<A> {
  async getBaseToken(
    options?: ContractReadOptions,
  ): Promise<ReadWriteErc20<A> | ReadWriteEth<A>> {
    const address = await this.contract.read("baseToken", {}, options);
    return address === ReadWriteEth.address
      ? new ReadWriteEth({
          drift: this.drift,
        })
      : new ReadWriteErc20({
          address,
          drift: this.drift,
        });
  }

  async getSharesToken(): Promise<ReadWriteErc20<A>> {
    const address = await this.contract.read("vaultSharesToken");
    return new ReadWriteErc20({
      address,
      drift: this.drift,
    });
  }

  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  async checkpoint({
    args: { time },
    options,
  }: SdkWriteParams<{ time: number }>): Promise<`0x${string}`> {
    this.contract.client;
    return this.contract.write(
      "checkpoint",
      { _checkpointTime: BigInt(time), _maxIterations: 4n },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  async pause({
    args: { paused },
    options,
  }: SdkWriteParams<{
    paused: boolean;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "pause",
      { _status: paused },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.invalidateReadsMatching("getMarketState");
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async initialize({
    args: {
      contribution,
      apr,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    contribution: bigint;
    apr: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
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
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async openLong({
    args: {
      destination,
      amount,
      minBondsOut,
      minVaultSharePrice,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    destination: `0x${string}`;
    amount: bigint;
    minVaultSharePrice: bigint;
    minBondsOut: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "openLong",
      {
        _amount: amount,
        _minOutput: minBondsOut,
        _minVaultSharePrice: minVaultSharePrice,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async openShort({
    args: {
      destination,
      bondAmount,
      minVaultSharePrice,
      maxDeposit,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    destination: `0x${string}`;
    minVaultSharePrice: bigint;
    bondAmount: bigint;
    maxDeposit: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "openShort",
      {
        _bondAmount: bondAmount,
        _maxDeposit: maxDeposit,
        _minVaultSharePrice: minVaultSharePrice,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async closeLong({
    args: {
      maturityTime,
      bondAmountIn,
      minAmountOut,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "closeLong",
      {
        _maturityTime: maturityTime,
        _bondAmount: bondAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async closeShort({
    args: {
      maturityTime,
      bondAmountIn,
      minAmountOut,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "closeShort",
      {
        _maturityTime: maturityTime,
        _bondAmount: bondAmountIn,
        _minOutput: minAmountOut,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

  /**
   * Adds liquidity to the pool.
   * @param destination - The account adding liquidity
   * @param contribution - The amount of base to supply
   * @param minApr - The minimum APR to accept
   * @param minLpSharePrice - The minimum LP share price to accept
   * @param maxApr - The maximum APR to accept
   * @param asUnderlying - A flag indicating whether the sender will pay in base or using another currency. Implementations choose which currencies they accept.
   * @param options - Contract Write Options
   * @return lpShares The number of LP tokens created
   */
  async addLiquidity({
    args: {
      destination,
      contribution,
      minApr,
      minLpSharePrice,
      maxApr,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    destination: `0x${string}`;
    contribution: bigint;
    minApr: bigint;
    minLpSharePrice: bigint;
    maxApr: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "addLiquidity",
      {
        _contribution: contribution,
        _minLpSharePrice: minLpSharePrice,
        _minApr: minApr,
        _maxApr: maxApr,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async removeLiquidity({
    args: {
      destination,
      lpSharesIn,
      minOutputPerShare,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    destination: `0x${string}`;
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "removeLiquidity",
      {
        _lpShares: lpSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }

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
  async redeemWithdrawalShares({
    args: {
      withdrawalSharesIn,
      minOutputPerShare,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: SdkWriteParams<{
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    return this.contract.write(
      "redeemWithdrawalShares",
      {
        _withdrawalShares: withdrawalSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      {
        ...options,
        onMined: (receipt) => {
          this.contract.cache.clear();
          options?.onMined?.(receipt);
        },
      },
    );
  }
}
