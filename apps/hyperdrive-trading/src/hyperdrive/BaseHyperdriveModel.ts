import {
  ContractReadOptions,
  ContractWriteOptions,
  ReadWriteHyperdrive,
  createReadWriteHyperdrive,
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
import { WalletClient } from "node_modules/viem/_types/clients/createWalletClient";
import { ReturnType } from "src/base/ReturnType";
import { sdkCache } from "src/sdk/sdkCache";
import { Address, Hash, PublicClient } from "viem";

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

  // Open Longs
  previewOpenLongWithBase(args: {
    baseAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
  previewOpenLongWithShares(args: {
    sharesAmount: bigint;
    options?: ContractReadOptions;
  }): Promise<{
    bondProceeds: bigint;
    maturityTime: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
  openLongWithBase(args: {
    args: {
      destination: Address;
      minSharePrice: bigint;
      minBondsOut: bigint;
      baseAmount: bigint;
    };
    options?: ContractWriteOptions;
  }): Promise<Hash>;
  openLongWithShares(args: {
    args: {
      sharesAmount: bigint;
      destination: Address;
      minSharePrice: bigint;
      minBondsOut: bigint;
    };
    options?: ContractWriteOptions;
  }): Promise<Hash>;

  // Close Longs
  previewCloseLongWithBase(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
  previewCloseLongWithShares(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
  closeLongWithBase(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash>;
  closeLongWithShares(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash>;

  // Open Shorts
  previewOpenShortWithBase(args: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;
  previewOpenShortWithShares(args: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }>;

  // Close Shorts
  previewCloseShortWithBase(args: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;
  previewCloseShortWithShares(args: {
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;

  closeShortWithBase(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash>;
  closeShortWithShares(args: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash>;

  // Add LP
  previewAddLiquidityWithBase(args: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<bigint>;
  previewAddLiquidityWithShares(args: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<bigint>;

  addLiquidityWithBase(args: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<Hash>;
  addLiquidityWithShares(args: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint;
  }): Promise<Hash>;

  // Remove LP
  previewRemoveLiquidityWithBase(args: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }>;
  previewRemoveLiquidityWithShares(args: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }>;

  removeLiquidityWithBase(args: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
  }): Promise<Hash>;
  removeLiquidityWithShares(args: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: Address;
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
    this.readWriteHyperdrive = createReadWriteHyperdrive({
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
  removeLiquidityWithBase({
    destination,
    lpSharesIn,
    minOutputPerShare,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
  }): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.removeLiquidity({
      destination,
      lpSharesIn,
      minOutputPerShare,
      asBase: true,
    });
  }
  removeLiquidityWithShares({
    destination,
    lpSharesIn,
    minOutputPerShare,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
  }): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.removeLiquidity({
      destination,
      lpSharesIn,
      minOutputPerShare,
      asBase: true,
    });
  }
  closeShortWithBase({
    bondAmountIn,
    destination,
    maturityTime,
    minAmountOut,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash> {
    return this.readWriteHyperdrive.closeShort({
      bondAmountIn,
      destination,
      maturityTime,
      minAmountOut,
      asBase: true,
    });
  }
  closeShortWithShares({
    bondAmountIn,
    destination,
    maturityTime,
    minAmountOut,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<Hash> {
    return this.readWriteHyperdrive.closeShort({
      bondAmountIn,
      destination,
      maturityTime,
      minAmountOut,
      asBase: false,
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
    bondAmountIn,
    destination,
    maturityTime,
    minAmountOut,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.closeLong({
      bondAmountIn,
      destination,
      maturityTime,
      minAmountOut,
      asBase: true,
    });
  }
  closeLongWithShares({
    bondAmountIn,
    destination,
    maturityTime,
    minAmountOut,
  }: {
    maturityTime: bigint;
    bondAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<`0x${string}`> {
    return this.readWriteHyperdrive.closeLong({
      bondAmountIn,
      destination,
      maturityTime,
      minAmountOut,
      asBase: false,
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
  }): Promise<Hash> {
    return this.readWriteHyperdrive.addLiquidity({
      destination,
      contribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
      asBase: true,
      options: { value: ethValue },
    });
  }
  addLiquidityWithShares({
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
  }): Promise<Hash> {
    return this.readWriteHyperdrive.addLiquidity({
      destination,
      contribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
      asBase: false,
      options: { value: ethValue },
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
    args: { destination, minBondsOut, minSharePrice, baseAmount },
    options,
  }: Parameters<IHyperdriveModel["openLongWithBase"]>[0]): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      amount: baseAmount,
      destination,
      minBondsOut,
      minSharePrice,
      asBase: true,
      options,
    });
  }
  openLongWithShares({
    args: { destination, minBondsOut, minSharePrice, sharesAmount },
    options,
  }: Parameters<IHyperdriveModel["openLongWithShares"]>[0]): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      amount: sharesAmount,
      destination,
      minBondsOut,
      minSharePrice,
      asBase: false,
      options,
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
