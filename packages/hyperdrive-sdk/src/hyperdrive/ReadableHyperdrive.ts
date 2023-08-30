import { ReadCallOptions } from "src/base/abitype";
import { HyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

interface ReadableHyperdriveConstructorOptions {
  contract: HyperdriveContract;
}

export class ReadableHyperdrive {
  private readonly contract: HyperdriveContract;

  constructor({ contract }: ReadableHyperdriveConstructorOptions) {
    this.contract = contract;
  }

  /**
   * Gets the pool's configuration parameters
   * @param options
   * @returns PoolConfig
   */
  getPoolConfig(options?: ReadCallOptions): Promise<PoolConfig> {
    return this.contract.read("getPoolConfig", [], options);
  }

  /**
   * Gets info about the pool's reserves and other state that is important to
   * evaluate potential trades.
   * @param options
   * @returns PoolInfo
   */
  getPoolInfo(options?: ReadCallOptions): Promise<PoolInfo> {
    return this.contract.read("getPoolInfo", [], options);
  }
}
