import {
  Long,
  OpenShort,
  ClosedShort,
  ClosedLpShares,
  RedeemedWithdrawalShares,
  Short,
} from "@hyperdrive/core";
import { Address } from "abitype";
import {
  ContractReadOptions,
  BlockTag,
  ContractWriteOptions,
} from "src/contract/Contract";

import {
  ReadHyperdriveContract,
  ReadWriteHyperdriveContract,
} from "src/hyperdrive/HyperdriveContract";
import { ReadHyperdriveMathContract } from "src/hyperdrive/HyperdriveMathContract";

import { PoolConfig } from "src/pool/PoolConfig";
import { PoolInfo } from "src/pool/PoolInfo";
import {
  ReadWriteHyperdrive,
  IReadWriteHyperdrive,
} from "src/hyperdrive/ReadWriteHyperdrive";
import { ReadHyperdrive, IReadHyperdrive } from "src/hyperdrive/ReadHyperdrive";

interface HyperdriveSdkOptions {
  hyperdriveContract: ReadHyperdriveContract & ReadWriteHyperdriveContract;
  mathContract: ReadHyperdriveMathContract;
}

export class HyperdriveSdk implements IReadHyperdrive, IReadWriteHyperdrive {
  private _readable: ReadHyperdrive;
  private _writable: ReadWriteHyperdrive;
  constructor({ hyperdriveContract, mathContract }: HyperdriveSdkOptions) {
    this._readable = new ReadHyperdrive({
      contract: hyperdriveContract,
      mathContract,
    });
    this._writable = new ReadWriteHyperdrive({ contract: hyperdriveContract });
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
  getLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<bigint> {
    return this._readable.getLpShares({ account, options });
  }
  getClosedLpShares({
    account,
    options,
  }: {
    account: Address;
    options?: ContractReadOptions;
  }): Promise<ClosedLpShares[]> {
    return this._readable.getClosedLpShares({ account, options });
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
  previewCloseLong({
    maturityTime,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying = true,
    options,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._readable.previewCloseLong({
      maturityTime,
      bondAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
      options,
    });
  }
  previewCloseShort({
    maturityTime,
    shortAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying = true,
    options,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._readable.previewCloseShort({
      maturityTime,
      shortAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
      options,
    });
  }
  previewOpenLong({
    baseAmount,
    minBaseAmountOut,
    destination,
    asUnderlying = true,
    options,
  }: {
    baseAmount: bigint;
    minBaseAmountOut: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._readable.previewOpenLong({
      baseAmount,
      minBaseAmountOut,
      destination,
      asUnderlying,
      options,
    });
  }
  previewOpenShort({
    amountOfBondsToShort,
    maxBaseAmountIn,
    destination,
    asUnderlying = true,
    options,
  }: {
    amountOfBondsToShort: bigint;
    maxBaseAmountIn: bigint;
    destination: Address;
    asUnderlying: boolean;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._readable.previewOpenShort({
      amountOfBondsToShort,
      maxBaseAmountIn,
      destination,
      asUnderlying,
      options,
    });
  }

  openLong({
    destination,
    baseAmount,
    bondAmountOut,
    asUnderlying,
    options,
  }: {
    destination: `0x${string}`;
    baseAmount: bigint;
    bondAmountOut: bigint;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.openLong({
      destination,
      baseAmount,
      bondAmountOut,
      asUnderlying,
      options,
    });
  }
  openShort({
    destination,
    bondAmount,
    maxDeposit,
    asUnderlying,
    options,
  }: {
    destination: `0x${string}`;
    bondAmount: bigint;
    maxDeposit: bigint;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.openShort({
      destination,
      bondAmount,
      maxDeposit,
      asUnderlying,
      options,
    });
  }
  closeLong({
    long,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    long: Long;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: `0x${string}`;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.closeLong({
      long,
      bondAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
      options,
    });
  }
  closeShort({
    short,
    bondAmountIn,
    minBaseAmountOut,
    destination,
    asUnderlying,
    options,
  }: {
    short: Short;
    bondAmountIn: bigint;
    minBaseAmountOut: bigint;
    destination: `0x${string}`;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.closeShort({
      short,
      bondAmountIn,
      minBaseAmountOut,
      destination,
      asUnderlying,
      options,
    });
  }

  addLiquidity({
    destination,
    contribution,
    minAPR,
    maxAPR,
    asUnderlying,
    options,
  }: {
    destination: `0x${string}`;
    contribution: bigint;
    minAPR: bigint;
    maxAPR: bigint;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.addLiquidity({
      destination,
      contribution,
      minAPR,
      maxAPR,
      asUnderlying,
      options,
    });
  }
  removeLiquidity({
    destination,
    lpSharesIn,
    minBaseAmountOut,
    asUnderlying,
    options,
  }: {
    destination: `0x${string}`;
    lpSharesIn: bigint;
    minBaseAmountOut: bigint;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.removeLiquidity({
      destination,
      lpSharesIn,
      minBaseAmountOut,
      asUnderlying,
      options,
    });
  }
  redeemWithdrawalShares({
    withdrawalSharesIn,
    minBaseAmountOutPerShare,
    destination,
    asUnderlying,
    options,
  }: {
    withdrawalSharesIn: bigint;
    minBaseAmountOutPerShare: bigint;
    destination: `0x${string}`;
    asUnderlying?: boolean | undefined;
    options: ContractWriteOptions;
  }): Promise<bigint> {
    return this._writable.redeemWithdrawalShares({
      withdrawalSharesIn,
      minBaseAmountOutPerShare,
      destination,
      asUnderlying,
      options,
    });
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
