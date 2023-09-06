import {
  ContractReadOptions,
  BlockTag,
  ContractWriteOptions,
} from "src/contract/Contract";
import { IReadableHyperdrive } from "src/hyperdrive/ReadableHyperdrive";
import { IWritableHyperdrive } from "src/hyperdrive/WritableHyperdrive";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

export class HyperdriveSdk implements IReadableHyperdrive, IWritableHyperdrive {
  constructor() {}
  getPoolConfig(
    options?: ContractReadOptions | undefined,
  ): Promise<PoolConfig> {
    throw new Error("Method not implemented.");
  }
  getPoolInfo(options?: ContractReadOptions | undefined): Promise<PoolInfo> {
    throw new Error("Method not implemented.");
  }
  getFixedRate(options?: ContractReadOptions | undefined): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
  getLiquidity(options?: ContractReadOptions | undefined): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
  getTradingVolume(
    options?:
      | {
          fromBlock?: bigint | BlockTag | undefined;
          toBlock?: bigint | BlockTag | undefined;
        }
      | undefined,
  ): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
  getLongPrice(options?: ContractReadOptions | undefined): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
  checkpoint(
    time: number,
    options?: ContractWriteOptions | undefined,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  pause(
    paused: boolean,
    options?: ContractWriteOptions | undefined,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asUnderlying?: boolean | undefined;
    },
    options?: ContractWriteOptions | undefined,
  ): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
}
