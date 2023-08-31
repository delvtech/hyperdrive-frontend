import { formatRate } from "src/base/formatRate";
import { ContractReadOptions } from "src/contract/Contract";
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
   * @param options
   * @returns PoolConfig
   */
  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", [], options);
  }

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   * @param options
   * @returns PoolInfo
   */
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", [], options);
  }

  /**
   * Gets the pool's fixed APR on bonds.
   * @param options
   * @returns
   */
  async getFixedApr(
    options?: ContractReadOptions,
  ): Promise<{ apr: bigint; formatted: string }> {
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

    const formatted = formatRate(apr);

    return {
      apr,
      formatted,
    };
  }
}
