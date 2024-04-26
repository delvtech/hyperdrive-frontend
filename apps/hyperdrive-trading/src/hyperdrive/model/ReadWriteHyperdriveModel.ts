import {
  ContractWriteOptions,
  ReadWriteHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { AppConfig } from "@hyperdrive/appconfig";
import { ExtractMethodParams } from "src/base/ExtractMethodParams";
import {
  IReadHyperdriveModel,
  ReadHyperdriveModel,
} from "src/hyperdrive/model/ReadHyperdriveModel";
import { sdkCache } from "src/sdk/sdkCache";
import { Address, Hash, PublicClient, WalletClient } from "viem";

/**
 * The stateless model for the Hyperdrive UI so that it's easy to implement new
 * hyperdrives by adding them to appconfig and implementing the standard model.
 */
export interface IReadWriteHyperdriveModel extends IReadHyperdriveModel {
  walletClient: WalletClient;

  // Open Longs
  openLongWithBase(params: {
    args: {
      destination: Address;
      minVaultSharePrice: bigint;
      minBondsOut: bigint;
      baseAmount: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
  openLongWithShares(params: {
    args: {
      sharesAmount: bigint;
      destination: Address;
      minVaultSharePrice: bigint;
      minBondsOut: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Close Longs
  closeLongWithBase(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
  closeLongWithShares(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Open Shorts

  openShortWithBase(params: {
    args: {
      bondAmount: bigint;
      destination: Address;
      minVaultSharePrice: bigint;
      maxDeposit: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  openShortWithShares(params: {
    args: {
      bondAmount: bigint;
      destination: Address;
      minVaultSharePrice: bigint;
      maxDeposit: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Close Shorts

  closeShortWithBase(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
  closeShortWithShares(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Add LP

  addLiquidityWithBase(params: {
    args: {
      destination: Address;
      contribution: bigint;
      minAPR: bigint;
      minLpSharePrice: bigint;
      maxAPR: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
  addLiquidityWithShares(params: {
    args: {
      destination: Address;
      contribution: bigint;
      minAPR: bigint;
      minLpSharePrice: bigint;
      maxAPR: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Remove LP
  removeLiquidityWithBase(params: {
    args: {
      lpSharesIn: bigint;
      minOutputPerShare: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
  removeLiquidityWithShares(params: {
    args: {
      lpSharesIn: bigint;
      minOutputPerShare: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionCompleted?: (hash: Hash) => void;
  }): Promise<Hash>;
}

export class ReadWriteHyperdriveModel
  extends ReadHyperdriveModel
  implements IReadWriteHyperdriveModel
{
  readWriteHyperdrive: ReadWriteHyperdrive;
  walletClient: WalletClient;

  constructor({
    hyperdriveAddress,
    appConfig,
    publicClient,
    walletClient,
  }: {
    publicClient: PublicClient;
    walletClient: WalletClient;
    hyperdriveAddress: Address;
    appConfig: AppConfig;
  }) {
    super({ appConfig, hyperdriveAddress, publicClient });

    this.walletClient = walletClient;
    this.readWriteHyperdrive = new ReadWriteHyperdrive({
      address: hyperdriveAddress,
      publicClient: this.publicClient,
      walletClient: this.walletClient,
      cache: sdkCache,
      namespace: appConfig.chainId.toString(),
    });
  }
  openShortWithBase({
    args: { bondAmount, destination, minVaultSharePrice, maxDeposit },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "openShortWithBase"
  >): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.openShort({
      args: {
        bondAmount,
        destination,
        maxDeposit,
        minVaultSharePrice,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  openShortWithShares({
    args: { bondAmount, destination, minVaultSharePrice, maxDeposit },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "openShortWithShares"
  >): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.openShort({
      args: {
        bondAmount,
        destination,
        maxDeposit,
        minVaultSharePrice,
        asBase: false,
      },
      options,
      onTransactionCompleted,
    });
  }
  removeLiquidityWithBase({
    args: { destination, lpSharesIn, minOutputPerShare },
    onTransactionCompleted,
    options,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "removeLiquidityWithBase"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.removeLiquidity({
      args: {
        destination,
        lpSharesIn,
        minOutputPerShare,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  removeLiquidityWithShares({
    args: { destination, lpSharesIn, minOutputPerShare },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "removeLiquidityWithShares"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.removeLiquidity({
      args: {
        destination,
        lpSharesIn,
        minOutputPerShare,
        asBase: false,
      },
      onTransactionCompleted,
      options,
    });
  }
  closeShortWithBase({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeShortWithBase"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.closeShort({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  closeShortWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeShortWithShares"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.closeShort({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut,
        asBase: false,
      },
      onTransactionCompleted,
      options,
    });
  }
  closeLongWithBase({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeLongWithBase"
  >): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.closeLong({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  closeLongWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeLongWithShares"
  >): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.closeLong({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut,
        asBase: false,
      },
      onTransactionCompleted,
      options,
    });
  }

  addLiquidityWithBase({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "addLiquidityWithBase"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.addLiquidity({
      args: {
        destination,
        contribution,
        maxAPR,
        minAPR,
        minLpSharePrice,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  addLiquidityWithShares({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "addLiquidityWithShares"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.addLiquidity({
      args: {
        destination,
        contribution,
        maxAPR,
        minAPR,
        minLpSharePrice,
        asBase: false,
      },
      options,
      onTransactionCompleted,
    });
  }
  openLongWithBase({
    args: { destination, minBondsOut, minVaultSharePrice, baseAmount },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "openLongWithBase"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      args: {
        amount: baseAmount,
        destination,
        minBondsOut,
        minVaultSharePrice,
        asBase: true,
      },
      options,
      onTransactionCompleted,
    });
  }
  openLongWithShares({
    args: { destination, minBondsOut, minVaultSharePrice, sharesAmount },
    options,
    onTransactionCompleted,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "openLongWithShares"
  >): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      args: {
        amount: sharesAmount,
        destination,
        minBondsOut,
        minVaultSharePrice,
        asBase: false,
      },
      options,
      onTransactionCompleted,
    });
  }
}
