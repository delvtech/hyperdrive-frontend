import { ReadCallOptions } from "src/base/abitype";
import { HyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { PoolConfig } from "src/pool/PoolConfig";

interface ReadableHyperdriveConstructorOptions {
  contract: HyperdriveContract;
}

export class ReadableHyperdrive {
  private contract: HyperdriveContract;

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
}
