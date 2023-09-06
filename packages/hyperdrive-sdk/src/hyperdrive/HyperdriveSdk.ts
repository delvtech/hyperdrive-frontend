import {
  ContractReadOptions,
  BlockTag,
  ContractWriteOptions,
} from "src/contract/Contract";
import { ReadableHyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { ReadableHyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";
import {
  IReadableHyperdrive,
  ReadableHyperdrive,
} from "src/hyperdrive/ReadableHyperdrive";
import { IWritableHyperdrive } from "src/hyperdrive/WritableHyperdrive";
import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";

interface HyperdriveSdkOptions {
  hyperdriveContract: ReadableHyperdriveContract;
  mathContract: ReadableHyperdriveMathContract;
}

export class HyperdriveSdk implements IReadableHyperdrive, IWritableHyperdrive {
  private _readable: ReadableHyperdrive;
  constructor({ hyperdriveContract, mathContract }: HyperdriveSdkOptions) {
    this._readable = new ReadableHyperdrive({
      contract: hyperdriveContract,
      mathContract,
    });
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
  checkpoint(time: number, options?: ContractWriteOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }
  pause(paused: boolean, options?: ContractWriteOptions): Promise<void> {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
}
