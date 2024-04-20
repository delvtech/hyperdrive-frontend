import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { ContractReadOptions } from "@delvtech/hyperdrive-viem";
import { AppConfig } from "@hyperdrive/appconfig";
import { ReadHyperdriveModel } from "src/hyperdrive/model/ReadHyperdriveModel";
import { Address, PublicClient } from "viem";

export class ReadStethHyperdriveModel extends ReadHyperdriveModel {
  lidoAddress: Address;
  constructor({
    hyperdriveAddress,
    appConfig,
    publicClient,
  }: {
    publicClient: PublicClient;
    hyperdriveAddress: Address;
    appConfig: AppConfig;
  }) {
    super({ hyperdriveAddress, appConfig, publicClient });

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
    const convertedSharesAmount =
      await this.convertStethTokensToShares(sharesAmount);

    return super.previewOpenLongWithShares({
      sharesAmount: convertedSharesAmount,
      options,
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
    const stethShares = await super.previewCloseLongWithShares({
      account,
      maturityTime,
      bondAmountIn,
      destination,
      minOutput,
    });
    const convertedToStethTokens =
      await this.convertStethSharesToTokens(stethShares);
    return convertedToStethTokens;
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
    const result = await super.previewOpenShortWithShares({ bondAmount });
    const convertedTraderDeposit = await this.convertStethSharesToTokens(
      result.traderDeposit,
    );

    return {
      ...result,
      traderDeposit: convertedTraderDeposit,
    };
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
    const result = await super.previewCloseShortWithShares({
      destination,
      maturityTime,
      minAmountOut,
      shortAmountIn,
      account,
    });
    const convertedAmountOut = await this.convertStethSharesToTokens(
      result.amountOut,
    );

    return {
      ...result,
      amountOut: convertedAmountOut,
    };
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
    const { proceeds, withdrawalShares } =
      await super.previewRemoveLiquidityWithShares({
        destination,
        lpSharesIn,
        minOutputPerShare,
      });

    const convertedProceeds = await this.convertStethSharesToTokens(proceeds);

    return { proceeds: convertedProceeds, withdrawalShares };
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
  }: {
    destination: `0x${string}`;
    contribution: bigint;
    minAPR: bigint;
    minLpSharePrice: bigint;
    maxAPR: bigint;
  }): Promise<{ lpSharesOut: bigint; slippagePaid: bigint }> {
    const convertedContribution =
      await this.convertStethTokensToShares(contribution);

    return super.previewAddLiquidityWithShares({
      destination,
      contribution: convertedContribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
    });
  }

  /**
   * Convert steth tokens into steth shares so that hyperdrive methods can be
   * called with correct amounts.
   */
  private convertStethTokensToShares(stethTokenAmount: bigint) {
    return this.publicClient.readContract({
      abi: MockLido.abi,
      address: this.lidoAddress,
      functionName: "getSharesByPooledEth",
      args: [stethTokenAmount],
    });
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
