import { MockERC4626 } from "@delvtech/hyperdrive-artifacts/MockERC4626";
import {
  ContractReadOptions,
  ContractWriteOptions,
  ReadWriteHyperdrive,
} from "@delvtech/hyperdrive-viem";
import {
  AppConfig,
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
  findBaseToken,
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { ExtractMethodParams } from "src/base/ExtractMethodParams";
import { ReturnType } from "src/base/ReturnType";
import { sdkCache } from "src/sdk/sdkCache";
import { Address, Hash, PublicClient, WalletClient } from "viem";

/**
 * The stateless model for the Hyperdrive UI so that it's easy to implement new
 * hyperdrives by adding them to appconfig and implementing the standard model.
 */
export interface IHyperdriveModel {
  baseToken: TokenConfig<EmptyExtensions>;
  sharesToken: TokenConfig<YieldSourceExtensions>;
  hyperdriveConfig: HyperdriveConfig;

  publicClient: PublicClient;
  walletClient: WalletClient;

  getYieldSourceRate(): Promise<bigint>;

  // Open Longs
  previewOpenLongWithBase(params: {
    baseAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
  previewOpenLongWithShares(params: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
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
  previewCloseLongWithBase(params: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
  previewCloseLongWithShares(params: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
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
  previewOpenShortWithBase(params: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
  previewOpenShortWithShares(params: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;

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
  previewCloseShortWithBase(params: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;
  previewCloseShortWithShares(params: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;

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
  previewAddLiquidityWithBase(params: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }>;
  previewAddLiquidityWithShares(params: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }>;

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
  previewRemoveLiquidityWithBase(params: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }>;
  previewRemoveLiquidityWithShares(params: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }>;

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

export class BaseHyperdriveModel implements IHyperdriveModel {
  hyperdriveConfig: HyperdriveConfig;
  baseToken: TokenConfig<EmptyExtensions>;
  sharesToken: TokenConfig<YieldSourceExtensions>;
  readWriteHyperdrive: ReadWriteHyperdrive;
  publicClient: PublicClient;
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
    this.hyperdriveConfig = findHyperdriveConfig({
      hyperdriveAddress,
      hyperdrives: appConfig.hyperdrives,
    });
    this.publicClient = publicClient;
    this.walletClient = walletClient;
    this.readWriteHyperdrive = new ReadWriteHyperdrive({
      address: hyperdriveAddress,
      publicClient: this.publicClient,
      walletClient: this.walletClient,
      cache: sdkCache,
      namespace: appConfig.chainId.toString(),
    });
    this.baseToken = findBaseToken({
      baseTokenAddress: this.hyperdriveConfig.baseToken,
      tokens: appConfig.tokens,
    });
    this.sharesToken = findYieldSourceToken({
      yieldSourceTokenAddress: this.hyperdriveConfig.sharesToken,
      tokens: appConfig.tokens,
    });
  }
  async getYieldSourceRate(): Promise<bigint> {
    const chainId = await this.publicClient.getChainId();
    switch (chainId) {
      case 31337:
      case 42069:
      default:
        const rate = await this.publicClient.readContract({
          address: this.sharesToken.address,
          // Both MockLido and MockERC4626 contain the getRate method, so this
          // abi can be used for both
          abi: MockERC4626.abi,
          functionName: "getRate",
        });
        return rate;
    }
  }
  openShortWithBase({
    args: { bondAmount, destination, minVaultSharePrice, maxDeposit },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IHyperdriveModel,
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
    IHyperdriveModel,
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
    IHyperdriveModel,
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
    IHyperdriveModel,
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
    IHyperdriveModel,
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
    IHyperdriveModel,
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
  async previewCloseShortWithBase({
    maturityTime,
    destination,
    minAmountOut,
    shortAmountIn,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<{ amountOut: bigint }> {
    const amountOut = await this.readWriteHyperdrive.previewCloseShort({
      asBase: true,
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
    });
    return { amountOut };
  }
  async previewCloseShortWithShares({
    destination,
    maturityTime,
    minAmountOut,
    shortAmountIn,
  }: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<{ amountOut: bigint }> {
    const amountOut = await this.readWriteHyperdrive.previewCloseShort({
      asBase: false,
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
    });
    return { amountOut };
  }
  previewOpenShortWithBase({ bondAmount }: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readWriteHyperdrive.previewOpenShort({
      amountOfBondsToShort: bondAmount,
      asBase: true,
    });
  }
  previewOpenShortWithShares({ bondAmount }: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readWriteHyperdrive.previewOpenShort({
      amountOfBondsToShort: bondAmount,
      asBase: false,
    });
  }
  previewRemoveLiquidityWithBase({
    destination,
    lpSharesIn,
    minOutputPerShare,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }> {
    return this.readWriteHyperdrive.previewRemoveLiquidity({
      asBase: true,
      destination,
      lpSharesIn,
      minOutputPerShare,
    });
  }
  previewRemoveLiquidityWithShares({
    destination,
    lpSharesIn,
    minOutputPerShare,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }> {
    return this.readWriteHyperdrive.previewRemoveLiquidity({
      asBase: false,
      destination,
      lpSharesIn,
      minOutputPerShare,
    });
  }
  closeLongWithBase({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IHyperdriveModel,
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
    IHyperdriveModel,
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
  previewCloseLongWithBase({
    bondAmountIn,
    destination,
    maturityTime,
    minOutput,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
  }): Promise<bigint> {
    return this.readWriteHyperdrive.previewCloseLong({
      maturityTime,
      asBase: true,
      bondAmountIn,
      destination,
      minAmountOut: minOutput,
    });
  }

  previewCloseLongWithShares({
    bondAmountIn,
    destination,
    maturityTime,
    minOutput,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
  }): Promise<bigint> {
    return this.readWriteHyperdrive.previewCloseLong({
      maturityTime,
      asBase: false,
      bondAmountIn,
      destination,
      minAmountOut: minOutput,
    });
  }

  addLiquidityWithBase({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IHyperdriveModel,
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
    IHyperdriveModel,
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
  async previewAddLiquidityWithBase({
    destination,
    contribution,
    maxAPR,
    minAPR,
    minLpSharePrice,
    ethValue,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): ReturnType<IHyperdriveModel, "previewAddLiquidityWithShares"> {
    return this.readWriteHyperdrive.previewAddLiquidity({
      destination,
      asBase: true,
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
      options: { value: ethValue },
    });
  }
  async previewAddLiquidityWithShares({
    destination,
    contribution,
    maxAPR,
    minAPR,
    minLpSharePrice,
    ethValue,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): ReturnType<IHyperdriveModel, "previewAddLiquidityWithShares"> {
    return this.readWriteHyperdrive.previewAddLiquidity({
      destination,
      asBase: false,
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
      options: { value: ethValue },
    });
  }
  openLongWithBase({
    args: { destination, minBondsOut, minVaultSharePrice, baseAmount },
    options,
    onTransactionMined,
  }: ExtractMethodParams<IHyperdriveModel, "openLongWithBase">): Promise<Hash> {
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
    IHyperdriveModel,
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
  async previewOpenLongWithBase({
    baseAmount,
    options,
  }: {
    baseAmount: bigint;
    options: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readWriteHyperdrive.previewOpenLong({
      amountIn: baseAmount,
      asBase: true,
      decimals: this.hyperdriveConfig.decimals,
      options,
    });
  }
  async previewOpenLongWithShares({
    sharesAmount,
    options,
  }: {
    sharesAmount: bigint;
    options: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readWriteHyperdrive.previewOpenLong({
      amountIn: sharesAmount,
      asBase: true,
      decimals: this.hyperdriveConfig.decimals,
      options,
    });
  }
}
