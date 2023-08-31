import { HyperdriveABI } from "@hyperdrive/core";
import { multiplyBigInt } from "src/base/multiplyBigInt/multiplyBigInt";
import { sumBigInt } from "src/base/sumBigInt";
import {
  BlockTag,
  ContractGetEventsOptions,
  ContractReadOptions,
} from "src/contract/Contract";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { HyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

interface ReadableHyperdriveConstructorOptions {
  contract: ReadableHyperdriveContract;
  mathContract: HyperdriveMathContract;
}

export class ReadableHyperdrive {
  private readonly contract: ReadableHyperdriveContract;
  private readonly mathContract: HyperdriveMathContract;

  constructor({
    contract,
    mathContract,
  }: ReadableHyperdriveConstructorOptions) {
    this.contract = contract;
    this.mathContract = mathContract;
  }

  /**
   * Gets the pool's configuration parameters
   */
  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", [], options);
  }

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   */
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", [], options);
  }

  /**
   * Gets the pool's fixed APR, i.e. the fixed rate a user locks in when they
   * open a long.
   */
  async getFixedRate(options?: ContractReadOptions): Promise<bigint> {
    const { positionDuration, initialSharePrice, timeStretch } =
      await this.getPoolConfig(options);
    const { shareReserves, bondReserves } = await this.getPoolInfo(options);
    const apr = await this.mathContract.read(
      "calculateAPRFromReserves",
      [
        shareReserves,
        bondReserves,
        initialSharePrice,
        positionDuration,
        timeStretch,
      ],
      options,
    );

    return apr;
  }

  /**
   * This function retrieves the market liquidity by using the following formula:
   * marketLiquidity = lpSharePrice * shareReserves - longsOutstanding
   */
  async getLiquidity(options?: ContractReadOptions): Promise<bigint> {
    const { lpSharePrice, shareReserves, longsOutstanding } =
      await this.getPoolInfo(options);

    const liquidity =
      multiplyBigInt([lpSharePrice, shareReserves], 18) - longsOutstanding;

    return liquidity;
  }

  /**
   * Calculates the total trading volume in bonds given a block window.
   */
  async getTradingVolume({
    fromBlock = "earliest",
    toBlock = "latest",
  }: {
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }): Promise<bigint> {
    const openLongEvents = await this.getOpenLongEvents({
      fromBlock,
      toBlock,
    });
    const totalBondsFromOpeningLongs = sumBigInt(
      openLongEvents.map((event) => event.args.bondAmount),
    );

    const openShortEvents = await this.getOpenShortEvents({
      fromBlock,
      toBlock,
    });
    const totalBondsFromOpeningShorts = sumBigInt(
      openShortEvents.map((event) => event.args.bondAmount),
    );

    const totalVolume =
      totalBondsFromOpeningLongs + totalBondsFromOpeningShorts;

    return totalVolume;
  }

  /**
   * Gets the current price of a bond in the pool.
   */
  async getLongPrice(options?: ContractReadOptions): Promise<bigint> {
    const { initialSharePrice, timeStretch } = await this.getPoolConfig(
      options,
    );
    const { shareReserves, bondReserves } = await this.getPoolInfo(options);

    return this.mathContract.read(
      "calculateSpotPrice",
      [shareReserves, bondReserves, initialSharePrice, timeStretch],
      options,
    );
  }

  private async getOpenLongEvents({
    filter,
    fromBlock = "earliest",
    toBlock = "latest",
  }: {
    filter?: ContractGetEventsOptions<
      typeof HyperdriveABI,
      "OpenLong"
    >["filter"];
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }) {
    return this.contract.getEvents("OpenLong", {
      filter,
      fromBlock,
      toBlock,
    });
  }

  private async getOpenShortEvents({
    filter,
    fromBlock = "earliest",
    toBlock = "latest",
  }: {
    filter?: ContractGetEventsOptions<
      typeof HyperdriveABI,
      "OpenShort"
    >["filter"];
    fromBlock?: BlockTag | bigint;
    toBlock?: BlockTag | bigint;
  }) {
    return this.contract.getEvents("OpenShort", {
      filter,
      fromBlock,
      toBlock,
    });
  }
}
