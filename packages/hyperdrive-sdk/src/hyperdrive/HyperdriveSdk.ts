import {
  ContractReadOptions,
  BlockTag,
  ContractWriteOptions,
} from "src/contract/Contract";
import { HyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import {
  ReadableHyperdrive,
  IReadableHyperdrive,
} from "src/hyperdrive/ReadableHyperdrive";
import {
  IWritableHyperdrive,
  WritableHyperdrive,
} from "src/hyperdrive/WritableHyperdrive";
import { HyperdriveContract } from "src/hyperdrive/contracts";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

interface HyperdriveSdkConstructorOptions {
  hyperdriveContract: HyperdriveContract;
  mathContract: HyperdriveMathContract;
}

export class HyperdriveSdk implements IReadableHyperdrive, IWritableHyperdrive {
  private readonly _readable: ReadableHyperdrive;
  private readonly _writable: WritableHyperdrive;

  constructor({
    hyperdriveContract,
    mathContract,
  }: HyperdriveSdkConstructorOptions) {
    this._readable = new ReadableHyperdrive({
      contract: hyperdriveContract,
      mathContract,
    });

    this._writable = new WritableHyperdrive({
      contract: hyperdriveContract,
    });
  }
  checkpoint(time: number, options?: ContractWriteOptions): Promise<void> {
    return this._writable.checkpoint(time, options);
  }
  pause(paused: boolean, options?: ContractWriteOptions): Promise<void> {
    return this._writable.pause(paused, options);
  }
  initialize(
    args: {
      contribution: bigint;
      apr: bigint;
      destination: `0x${string}`;
      asUnderlying?: boolean;
    },
    options?: ContractWriteOptions,
  ): Promise<bigint> {
    return this._writable.initialize(args, options);
  }

  getPoolConfig(options?: ContractReadOptions): Promise<PoolConfig> {
    return this._readable.getPoolConfig(options);
  }
  getPoolInfo(options?: ContractReadOptions): Promise<PoolInfo> {
    return this._readable.getPoolInfo(options);
  }
  getFixedRate(options?: ContractReadOptions): Promise<bigint> {
    return this._readable.getFixedRate(options);
  }
  getLiquidity(options?: ContractReadOptions): Promise<bigint> {
    return this._readable.getLiquidity(options);
  }
  getTradingVolume(options?: {
    fromBlock?: bigint | BlockTag;
    toBlock?: bigint | BlockTag;
  }): Promise<bigint> {
    return this._readable.getTradingVolume(options);
  }
  getLongPrice(options?: ContractReadOptions): Promise<bigint> {
    return this._readable.getLongPrice(options);
  }
}
