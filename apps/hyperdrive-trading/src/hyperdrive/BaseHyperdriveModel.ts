import {
  ContractReadOptions,
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

  // Longs
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
    destination: Address;
    minSharePrice: bigint;
    minBondsOut: bigint;
    baseAmount: bigint;
    ethValue?: bigint;
  }): Promise<Hash>;
  openLongWithShares(args: {
    sharesAmount: bigint;
    destination: Address;
    minSharePrice: bigint;
    minBondsOut: bigint;
    ethValue?: bigint;
  }): Promise<Hash>;

  // LP
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
    destination,
    minBondsOut,
    minSharePrice,
    baseAmount,
    ethValue,
  }: {
    destination: `0x${string}`;
    minSharePrice: bigint;
    minBondsOut: bigint;
    baseAmount: bigint;
    ethValue?: bigint | undefined;
  }): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      amount: baseAmount,
      destination,
      minBondsOut,
      minSharePrice,
      asBase: true,
      options: { value: ethValue },
    });
  }
  openLongWithShares({
    destination,
    minBondsOut,
    minSharePrice,
    sharesAmount,
    ethValue,
  }: {
    sharesAmount: bigint;
    destination: `0x${string}`;
    minSharePrice: bigint;
    minBondsOut: bigint;
    ethValue?: bigint | undefined;
  }): Promise<Hash> {
    return this.readWriteHyperdrive.openLong({
      amount: sharesAmount,
      destination,
      minBondsOut,
      minSharePrice,
      asBase: false,
      options: { value: ethValue },
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
