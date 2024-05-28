import { CachedReadWriteContract } from "@delvtech/evm-client";
import { Overwrite } from "src/base/types";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";
import { HyperdriveAbi } from "src/hyperdrive/abi";
import {
  ReadStEthHyperdriveOptions,
  readStEthHyperdriveMixin,
} from "src/hyperdrive/steth/ReadStEthHyperdrive";
import { ReadWriteEth } from "src/token/eth/ReadWriteEth";
import { ReadWriteStEth } from "src/token/steth/ReadWriteStEth";

export interface ReadWriteStEthHyperdriveOptions
  extends Overwrite<ReadWriteHyperdriveOptions, ReadStEthHyperdriveOptions> {}

export class ReadWriteStEthHyperdrive extends readStEthHyperdriveMixin(
  ReadWriteHyperdrive,
) {
  declare stEthHyperdriveContract: CachedReadWriteContract<HyperdriveAbi>;

  async getSharesToken(): Promise<ReadWriteStEth> {
    const { vaultSharesToken } = await this.getPoolConfig();
    return new ReadWriteStEth({
      address: vaultSharesToken,
      contractFactory: this.contractFactory,
      namespace: this.contract.namespace,
      network: this.network,
    });
  }

  async getBaseToken(): Promise<ReadWriteEth> {
    return new ReadWriteEth({
      contractFactory: this.contractFactory,
      network: this.network,
    });
  }

  async initialize({
    args: { contribution, apr, destination, asBase, extraData },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["initialize"]>[0]): ReturnType<
    ReadWriteHyperdrive["initialize"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      contribution = await this.convertToShares({
        baseAmount: contribution,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.initialize({
      args: { contribution, apr, destination, asBase, extraData },
      options,
      onTransactionCompleted,
    });
  }

  async openLong({
    args: {
      destination,
      amount,
      minBondsOut,
      minVaultSharePrice,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["openLong"]>[0]): ReturnType<
    ReadWriteHyperdrive["openLong"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      amount = await this.convertToShares({
        baseAmount: amount,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.openLong({
      args: {
        destination,
        amount,
        minBondsOut,
        minVaultSharePrice,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }

  async closeLong({
    args: {
      maturityTime,
      bondAmountIn,
      minAmountOut,
      destination,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["closeLong"]>[0]): ReturnType<
    ReadWriteHyperdrive["closeLong"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      minAmountOut = await this.convertToShares({
        baseAmount: minAmountOut,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.closeLong({
      args: {
        maturityTime,
        bondAmountIn,
        minAmountOut,
        destination,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }

  async openShort({
    args: {
      destination,
      bondAmount,
      minVaultSharePrice,
      maxDeposit,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["openShort"]>[0]): ReturnType<
    ReadWriteHyperdrive["openShort"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      maxDeposit = await this.convertToShares({
        baseAmount: maxDeposit,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.openShort({
      args: {
        destination,
        bondAmount,
        minVaultSharePrice,
        maxDeposit,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }

  async closeShort({
    args: {
      maturityTime,
      bondAmountIn,
      minAmountOut,
      destination,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["closeShort"]>[0]): ReturnType<
    ReadWriteHyperdrive["closeShort"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      minAmountOut = await this.convertToShares({
        baseAmount: minAmountOut,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.closeLong({
      args: {
        maturityTime,
        bondAmountIn,
        minAmountOut,
        destination,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }

  async addLiquidity({
    args: {
      destination,
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["addLiquidity"]>[0]): ReturnType<
    ReadWriteHyperdrive["addLiquidity"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      contribution = await this.convertToShares({
        baseAmount: contribution,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.addLiquidity({
      args: {
        destination,
        contribution,
        minAPR,
        minLpSharePrice,
        maxAPR,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }

  async removeLiquidity({
    args: { destination, lpSharesIn, minOutputPerShare, asBase, extraData },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["removeLiquidity"]>[0]): ReturnType<
    ReadWriteHyperdrive["removeLiquidity"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      minOutputPerShare = await this.convertToShares({
        baseAmount: minOutputPerShare,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.removeLiquidity({
      args: { destination, lpSharesIn, minOutputPerShare, asBase, extraData },
      options,
      onTransactionCompleted,
    });
  }

  async redeemWithdrawalShares({
    args: {
      withdrawalSharesIn,
      minOutputPerShare,
      destination,
      asBase,
      extraData,
    },
    options,
    onTransactionCompleted,
  }: Parameters<ReadWriteHyperdrive["redeemWithdrawalShares"]>[0]): ReturnType<
    ReadWriteHyperdrive["redeemWithdrawalShares"]
  > {
    if (!asBase && !this.isUsingSharesAccounting) {
      minOutputPerShare = await this.convertToShares({
        baseAmount: minOutputPerShare,
        options: {
          blockTag: "latest",
        },
      });
    }

    return super.redeemWithdrawalShares({
      args: {
        withdrawalSharesIn,
        minOutputPerShare,
        destination,
        asBase,
        extraData,
      },
      options,
      onTransactionCompleted,
    });
  }
}
