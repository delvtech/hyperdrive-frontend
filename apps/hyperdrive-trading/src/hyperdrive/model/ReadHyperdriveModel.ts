import { ContractReadOptions, ReadHyperdrive } from "@delvtech/hyperdrive-viem";
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
import { ReturnType } from "src/base/ReturnType";
import { sdkCache } from "src/sdk/sdkCache";
import { Address, PublicClient } from "viem";

/**
 * The stateless model for the Hyperdrive UI so that it's easy to implement new
 * hyperdrives by adding them to appconfig and implementing the standard model.
 */
export interface IReadHyperdriveModel {
  baseToken: TokenConfig<EmptyExtensions>;
  sharesToken: TokenConfig<YieldSourceExtensions>;
  hyperdriveConfig: HyperdriveConfig;

  publicClient: PublicClient;

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

  // Close Longs
  previewCloseLongWithBase(params: {
    account: Address;
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;
  previewCloseLongWithShares(params: {
    account: Address;
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
    options?: ContractReadOptions;
  }): Promise<bigint>;

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

  // Close Shorts
  previewCloseShortWithBase(params: {
    account: Address;
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;
  previewCloseShortWithShares(params: {
    account: Address;
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: Address;
  }): Promise<{ amountOut: bigint }>;

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
}

export class ReadHyperdriveModel implements IReadHyperdriveModel {
  hyperdriveConfig: HyperdriveConfig;
  baseToken: TokenConfig<EmptyExtensions>;
  sharesToken: TokenConfig<YieldSourceExtensions>;
  readHyperdrive: ReadHyperdrive;
  publicClient: PublicClient;

  constructor({
    hyperdriveAddress,
    appConfig,
    publicClient,
  }: {
    publicClient: PublicClient;
    hyperdriveAddress: Address;
    appConfig: AppConfig;
  }) {
    this.hyperdriveConfig = findHyperdriveConfig({
      hyperdriveAddress,
      hyperdrives: appConfig.hyperdrives,
    });
    this.publicClient = publicClient;
    this.readHyperdrive = new ReadHyperdrive({
      address: hyperdriveAddress,
      publicClient: this.publicClient,
      cache: sdkCache,
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
  async previewCloseShortWithBase({
    account,
    maturityTime,
    destination,
    minAmountOut,
    shortAmountIn,
  }: {
    account: Address;
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<{ amountOut: bigint }> {
    const amountOut = await this.readHyperdrive.previewCloseShort({
      asBase: true,
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
      options: { from: account },
    });
    return { amountOut };
  }
  async previewCloseShortWithShares({
    account,
    destination,
    maturityTime,
    minAmountOut,
    shortAmountIn,
  }: {
    account: Address;
    maturityTime: bigint;
    shortAmountIn: bigint;
    minAmountOut: bigint;
    destination: `0x${string}`;
  }): Promise<{ amountOut: bigint }> {
    const amountOut = await this.readHyperdrive.previewCloseShort({
      asBase: false,
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
      options: { from: account },
    });
    return { amountOut };
  }
  previewOpenShortWithBase({ bondAmount }: { bondAmount: bigint }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readHyperdrive.previewOpenShort({
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
    return this.readHyperdrive.previewOpenShort({
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
    return this.readHyperdrive.previewRemoveLiquidity({
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
    return this.readHyperdrive.previewRemoveLiquidity({
      asBase: false,
      destination,
      lpSharesIn,
      minOutputPerShare,
    });
  }
  previewCloseLongWithBase({
    account,
    bondAmountIn,
    destination,
    maturityTime,
    minOutput,
  }: {
    account: Address;
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
  }): Promise<bigint> {
    return this.readHyperdrive.previewCloseLong({
      maturityTime,
      asBase: true,
      bondAmountIn,
      destination,
      minAmountOut: minOutput,
      options: {
        from: account,
      },
    });
  }

  previewCloseLongWithShares({
    account,
    bondAmountIn,
    destination,
    maturityTime,
    minOutput,
  }: {
    account: Address;
    maturityTime: bigint;
    bondAmountIn: bigint;
    minOutput: bigint;
    destination: Address;
  }): Promise<bigint> {
    return this.readHyperdrive.previewCloseLong({
      maturityTime,
      asBase: false,
      bondAmountIn,
      destination,
      minAmountOut: minOutput,
      options: { from: account },
    });
  }

  async previewAddLiquidityWithBase({
    destination,
    contribution,
    maxAPR,
    minAPR,
    minLpSharePrice,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
  }): ReturnType<IReadHyperdriveModel, "previewAddLiquidityWithShares"> {
    return this.readHyperdrive.previewAddLiquidity({
      destination,
      asBase: true,
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
    });
  }
  async previewAddLiquidityWithShares({
    destination,
    contribution,
    maxAPR,
    minAPR,
    minLpSharePrice,
  }: {
    destination: Address;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
  }): ReturnType<IReadHyperdriveModel, "previewAddLiquidityWithShares"> {
    return this.readHyperdrive.previewAddLiquidity({
      destination,
      asBase: false,
      contribution,
      minAPR,
      minLpSharePrice,
      maxAPR,
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
    return this.readHyperdrive.previewOpenLong({
      amountIn: baseAmount,
      asBase: true,
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
    return this.readHyperdrive.previewOpenLong({
      amountIn: sharesAmount,
      asBase: false,
      options,
    });
  }
}
