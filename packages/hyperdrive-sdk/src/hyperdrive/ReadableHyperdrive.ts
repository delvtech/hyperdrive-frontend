import { ContractReadOptions } from "src/contract/Contract";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

interface ReadableHyperdriveConstructorOptions {
  contract: ReadableHyperdriveContract;
}

export class ReadableHyperdrive {
  private readonly contract: ReadableHyperdriveContract;

  constructor({ contract }: ReadableHyperdriveConstructorOptions) {
    this.contract = contract;
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
}
