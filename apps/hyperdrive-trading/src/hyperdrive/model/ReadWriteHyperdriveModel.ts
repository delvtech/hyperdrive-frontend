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
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;
  openLongWithShares(params: {
    args: {
      sharesAmount: bigint;
      destination: Address;
      minVaultSharePrice: bigint;
      minBondsOut: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;
  closeLongWithShares(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;

  openShortWithShares(params: {
    args: {
      bondAmount: bigint;
      destination: Address;
      minVaultSharePrice: bigint;
      maxDeposit: bigint;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;
  closeShortWithShares(params: {
    args: {
      maturityTime: bigint;
      bondAmountIn: bigint;
      minAmountOut: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;

  // Remove LP
  removeLiquidityWithBase(params: {
    args: {
      lpSharesIn: bigint;
      minOutputPerShare: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
  }): Promise<Hash>;
  removeLiquidityWithShares(params: {
    args: {
      lpSharesIn: bigint;
      minOutputPerShare: bigint;
      destination: Address;
    };
    options?: ContractWriteOptions;
    onTransactionMined?: (hash: Hash) => void;
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
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  openShortWithShares({
    args: { bondAmount, destination, minVaultSharePrice, maxDeposit },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  removeLiquidityWithBase({
    args: { destination, lpSharesIn, minOutputPerShare },
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  removeLiquidityWithShares({
    args: { destination, lpSharesIn, minOutputPerShare },
    options,
    onTransactionMined,
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
      onTransactionMined,
      options,
    });
  }
  closeShortWithBase({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  closeShortWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
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
      onTransactionMined,
      options,
    });
  }
  closeLongWithBase({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  closeLongWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
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
      onTransactionMined,
      options,
    });
  }

  addLiquidityWithBase({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  addLiquidityWithShares({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  openLongWithBase({
    args: { destination, minBondsOut, minVaultSharePrice, baseAmount },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
  openLongWithShares({
    args: { destination, minBondsOut, minVaultSharePrice, sharesAmount },
    options,
    onTransactionMined,
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
      onTransactionMined,
    });
  }
}
