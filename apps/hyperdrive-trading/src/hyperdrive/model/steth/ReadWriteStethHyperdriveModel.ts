import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { ContractReadOptions } from "@delvtech/hyperdrive-viem";
import { AppConfig } from "@hyperdrive/appconfig";
import { ExtractMethodParams } from "src/base/ExtractMethodParams";
import {
  IReadWriteHyperdriveModel,
  ReadWriteHyperdriveModel,
} from "src/hyperdrive/model/ReadWriteHyperdriveModel";
import { ReadStethHyperdriveModel } from "src/hyperdrive/model/steth/ReadStethHyperdriveModel";
import { Address, Hash, PublicClient, WalletClient } from "viem";

export class ReadWriteStethHyperdriveModel extends ReadWriteHyperdriveModel {
  lidoAddress: Address;
  readStethHyperdriveModel: ReadStethHyperdriveModel;
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
    super({ hyperdriveAddress, appConfig, publicClient, walletClient });

    this.readStethHyperdriveModel = new ReadStethHyperdriveModel({
      hyperdriveAddress,
      appConfig,
      publicClient,
    });

    this.lidoAddress = this.sharesToken.address;
  }

  /**
   * The `sharesAmount` input is denominated in steth tokens since that is what
   * is shown to the user.    */
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
    return this.readStethHyperdriveModel.previewOpenLongWithShares({
      sharesAmount,
      options,
    });
  }

  async openLongWithShares({
    args: { destination, minBondsOut, minVaultSharePrice, sharesAmount },
    options,
    onTransactionMined,
  }: Parameters<
    IReadWriteHyperdriveModel["openLongWithShares"]
  >[0]): Promise<Hash> {
    const convertedSharesAmount =
      await this.convertStethTokensToShares(sharesAmount);
    return super.openLongWithShares({
      args: {
        destination,
        minBondsOut,
        minVaultSharePrice,
        sharesAmount: convertedSharesAmount,
      },
      options,
      onTransactionMined,
    });
  }

  async previewCloseLongWithShares({
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
    destination: `0x${string}`;
  }): Promise<bigint> {
    return this.readStethHyperdriveModel.previewCloseLongWithShares({
      account,
      bondAmountIn,
      destination,
      maturityTime,
      minOutput,
    });
  }

  async closeLongWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeLongWithShares"
  >): Promise<Hash> {
    const convertedMinAmountOut =
      await this.convertStethTokensToShares(minAmountOut);
    return super.closeLongWithShares({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut: convertedMinAmountOut,
      },
      options,
      onTransactionMined,
    });
  }
  async previewOpenShortWithShares({
    bondAmount,
  }: {
    bondAmount: bigint;
  }): Promise<{
    traderDeposit: bigint;
    spotPriceAfterOpen: bigint;
    spotRateAfterOpen: bigint;
    curveFee: bigint;
  }> {
    return this.readStethHyperdriveModel.previewOpenShortWithShares({
      bondAmount,
    });
  }

  async openShortWithShares({
    args: { bondAmount, destination, maxDeposit, minVaultSharePrice },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "openShortWithShares"
  >): Promise<Hash> {
    const convertedMaxDeposit =
      await this.convertStethTokensToShares(maxDeposit);
    return super.openShortWithShares({
      args: {
        bondAmount,
        destination,
        maxDeposit: convertedMaxDeposit,
        minVaultSharePrice,
      },
      options,
      onTransactionMined,
    });
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
    return this.readStethHyperdriveModel.previewCloseShortWithShares({
      account,
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
    });
  }

  async closeShortWithShares({
    args: { bondAmountIn, destination, maturityTime, minAmountOut },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "closeShortWithShares"
  >): Promise<Hash> {
    const convertedMinAmountOut =
      await this.convertStethTokensToShares(minAmountOut);
    return super.closeShortWithShares({
      args: {
        bondAmountIn,
        destination,
        maturityTime,
        minAmountOut: convertedMinAmountOut,
      },
      options,
      onTransactionMined,
    });
  }

  /**
   * The `contribution` input is denominated in steth tokens since that is what
   * is shown to the user.
   */
  async addLiquidityWithShares({
    args: { destination, contribution, maxAPR, minAPR, minLpSharePrice },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "addLiquidityWithShares"
  >): Promise<Hash> {
    const convertedContribution =
      await this.convertStethTokensToShares(contribution);

    return super.addLiquidityWithShares({
      args: {
        destination,
        contribution: convertedContribution,
        maxAPR,
        minAPR,
        minLpSharePrice,
      },
      options,
      onTransactionMined,
    });
  }

  async previewRemoveLiquidityWithShares({
    destination,
    lpSharesIn,
    minOutputPerShare,
  }: {
    lpSharesIn: bigint;
    minOutputPerShare: bigint;
    destination: `0x${string}`;
  }): Promise<{ proceeds: bigint; withdrawalShares: bigint }> {
    return this.readStethHyperdriveModel.previewRemoveLiquidityWithShares({
      destination,
      lpSharesIn,
      minOutputPerShare,
    });
  }

  /**
   * The `contribution` input is denominated in steth tokens since that is what
   * is shown to the user.
   */
  async previewAddLiquidityWithShares({
    destination,
    contribution,
    maxAPR,
    minAPR,
    minLpSharePrice,
    ethValue,
  }: {
    destination: `0x${string}`;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
    ethValue?: bigint | undefined;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }> {
    return this.readStethHyperdriveModel.previewAddLiquidityWithShares({
      destination,
      contribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
      ethValue,
    });
  }
  async removeLiquidityWithShares({
    args: { destination, lpSharesIn, minOutputPerShare },
    options,
    onTransactionMined,
  }: ExtractMethodParams<
    IReadWriteHyperdriveModel,
    "removeLiquidityWithShares"
  >): Promise<Hash> {
    const convertedMinOutputPerShare =
      await this.convertStethTokensToShares(minOutputPerShare);
    return super.removeLiquidityWithShares({
      args: {
        destination,
        lpSharesIn,
        minOutputPerShare: convertedMinOutputPerShare,
      },
      options,
      onTransactionMined,
    });
  }
  /**
   * Convert steth tokens into steth shares so that hyperdrive methods can be
   * called with correct amounts.
   */
  private async convertStethTokensToShares(stethTokenAmount: bigint) {
    const sharesAmount = await this.publicClient.readContract({
      abi: MockLido.abi,
      address: this.lidoAddress,
      functionName: "getSharesByPooledEth",
      args: [stethTokenAmount],
    });
    // FIXME: Remove and find solution for mainnet
    // This is needed because the conversion done before submitting the
    // transaction to open a position and by the time the position TX is
    // submitted, the share price could have changed.
    return sharesAmount - (sharesAmount % BigInt(1e16));
  }

  /**
   * Convert steth tokens into steth shares so that hyperdrive methods can be
   * called with correct amounts.
   */
  private convertStethSharesToTokens(stethShareAmount: bigint) {
    return this.publicClient.readContract({
      abi: MockLido.abi,
      address: this.lidoAddress,
      functionName: "getPooledEthByShares",
      args: [stethShareAmount],
    });
  }
}
