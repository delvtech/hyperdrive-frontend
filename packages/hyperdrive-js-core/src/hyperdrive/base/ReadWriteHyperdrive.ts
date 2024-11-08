import {
  CachedReadWriteContract,
  ContractReadOptions,
  ContractWriteOptions,
} from "@delvtech/evm-client";
import { ReadWriteContractFactory } from "src/evm-client/contractFactory";
import { syncCacheWithTransaction } from "src/evm-client/syncCacheWithTransaction";
import { HyperdriveAbi } from "src/hyperdrive/base/abi";
import { ReadHyperdrive } from "src/hyperdrive/base/ReadHyperdrive";
import { NULL_BYTES } from "src/hyperdrive/constants";
import { ReadWriteContractModelOptions } from "src/model/ReadWriteModel";
import { ReadWriteErc20 } from "src/token/erc20/ReadWriteErc20";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";

type ReadWriteParams<Args> = {
  args: Args;
  options?: ContractWriteOptions;
  onTransactionCompleted?: (hash: `0x${string}`) => void;
};

export interface ReadWriteHyperdriveOptions
  extends ReadWriteContractModelOptions {}

export class ReadWriteHyperdrive extends ReadHyperdrive {
  declare contract: CachedReadWriteContract<HyperdriveAbi>;
  declare contractFactory: ReadWriteContractFactory;

  constructor(options: ReadWriteHyperdriveOptions) {
    super(options);
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

  async getSharesToken(): Promise<ReadWriteErc20> {
    const address = await this.contract.read("vaultSharesToken");
    return new ReadWriteErc20({
      address,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  /**
   * Allows anyone to mint a new checkpoint.
   * @param time - The time (in seconds) of the checkpoint to create.
   */
  @syncCacheWithTransaction()
  async checkpoint({
    args: { time },
    options,
  }: ReadWriteParams<{ time: number }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "checkpoint",
      { _checkpointTime: BigInt(time), _maxIterations: 4n },
      options,
    );
    return hash;
  }

  /**
   * Allows an authorized address to pause this contract
   * @param paused - True to pause all deposits and false to unpause them
   */
  @syncCacheWithTransaction<HyperdriveAbi>({
    cacheEntries: [{ functionName: "getMarketState" }],
  })
  async pause({
    args: { paused },
    options,
  }: ReadWriteParams<{
    paused: boolean;
  }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "pause",
      { _status: paused },
      options,
    );
    return hash;
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
  @syncCacheWithTransaction()
  async initialize({
    args: {
      contribution,
      apr,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: ReadWriteParams<{
    contribution: bigint;
    apr: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
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
    return hash;
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
  @syncCacheWithTransaction()
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
  }: ReadWriteParams<{
    destination: `0x${string}`;
    amount: bigint;
    minVaultSharePrice: bigint;
    minBondsOut: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
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
    return hash;
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
  @syncCacheWithTransaction()
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
  }: ReadWriteParams<{
    destination: `0x${string}`;
    minVaultSharePrice: bigint;
    bondAmount: bigint;
    maxDeposit: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
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
    return hash;
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
  @syncCacheWithTransaction()
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
  }: ReadWriteParams<{
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
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
    return hash;
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
  @syncCacheWithTransaction()
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
  }: ReadWriteParams<{
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
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
    return hash;
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
  @syncCacheWithTransaction()
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
  }: ReadWriteParams<{
    destination: `0x${string}`;
    contribution: bigint;
    minApr: bigint;
    minLpSharePrice: bigint;
    maxApr: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "addLiquidity",
      {
        _contribution: contribution,
        _minLpSharePrice: minLpSharePrice,
        _minApr: minApr,
        _maxApr: maxApr,
        _options: { destination, asBase, extraData },
      },
      options,
    );
    return hash;
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
  @syncCacheWithTransaction()
  async removeLiquidity({
    args: {
      destination,
      lpSharesIn,
      minOutputPerShare,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: ReadWriteParams<{
    destination: `0x${string}`;
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "removeLiquidity",
      {
        _lpShares: lpSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      options,
    );

    return hash;
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
  @syncCacheWithTransaction()
  async redeemWithdrawalShares({
    args: {
      withdrawalSharesIn,
      minOutputPerShare,
      destination,
      asBase = true,
      extraData = NULL_BYTES,
    },
    options,
  }: ReadWriteParams<{
    withdrawalSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
    asBase?: boolean;
    extraData?: `0x${string}`;
  }>): Promise<`0x${string}`> {
    const hash = await this.contract.write(
      "redeemWithdrawalShares",
      {
        _withdrawalShares: withdrawalSharesIn,
        _minOutputPerShare: minOutputPerShare,
        _options: { destination, asBase, extraData },
      },
      options,
    );
    return hash;
  }
}
