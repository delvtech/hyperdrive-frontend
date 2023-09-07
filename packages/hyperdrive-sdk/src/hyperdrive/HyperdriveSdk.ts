import {
  Long,
  OpenShort,
  ClosedShort,
  ClosedLpShares,
  RedeemedWithdrawalShares,
} from "@hyperdrive/core";
import { Address } from "abitype";
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
  getOpenLongs({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<Long[]> {
    return this._readable.getOpenLongs({ account, options });
  }
  getOpenShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<OpenShort[]> {
    return this._readable.getOpenShorts({ account, options });
  }
  getClosedLongs({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<Long[]> {
    return this._readable.getClosedLongs({ account, options });
  }
  getClosedShorts({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedShort[]> {
    return this._readable.getClosedShorts({ account, options });
  }
  getMaxShort(
    options?: ContractReadOptions,
  ): Promise<{ maxBondsOut: bigint; formatted: string }> {
    return this._readable.getMaxShort(options);
  }
  getMaxLong(
    options?: ContractReadOptions,
  ): Promise<{ maxBondsOut: bigint; formatted: string }> {
    return this._readable.getMaxLong(options);
  }
  getLpShares(
    account: Address,
    options?: ContractReadOptions,
  ): Promise<bigint> {
    return this._readable.getLpShares(account, options);
  }
  getClosedLpShares(
    account: Address,
    options?: ContractReadOptions,
  ): Promise<ClosedLpShares[]> {
    return this._readable.getClosedLpShares(account, options);
  }
  getWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this._readable.getWithdrawalShares({ account, options });
  }
  getRedeemedWithdrawalShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<RedeemedWithdrawalShares[]> {
    return this._readable.getRedeemedWithdrawalShares({ account, options });
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
      destination: Address;
      asUnderlying?: boolean;
    },
    options?: ContractWriteOptions,
  ): Promise<bigint> {
    throw new Error("Method not implemented.");
  }
}
