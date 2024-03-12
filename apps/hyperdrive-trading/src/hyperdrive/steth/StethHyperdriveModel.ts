import { MockLido } from "@delvtech/hyperdrive-artifacts/MockLido";
import { ContractReadOptions } from "@delvtech/hyperdrive-viem";
import { AppConfig } from "@hyperdrive/appconfig";
import { BaseHyperdriveModel } from "src/hyperdrive/BaseHyperdriveModel";
import { Address, Hash, PublicClient, WalletClient } from "viem";

export class StethHyperdriveModel extends BaseHyperdriveModel {
  lidoAddress: Address;
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
    const convertedSharesAmount = await this.convertStethTokensToShares(
      sharesAmount,
    );

    return super.previewOpenLongWithShares({
      sharesAmount: convertedSharesAmount,
      options,
    });
  }

  /**
   * The `contribution` input is denominated in steth tokens since that is what
   * is shown to the user.
   */
  async addLiquidityWithShares({
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
    const convertedContribution = await this.convertStethTokensToShares(
      contribution,
    );

    return super.addLiquidityWithShares({
      destination,
      contribution: convertedContribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
      ethValue,
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
  }): Promise<bigint> {
    const convertedContribution = await this.convertStethTokensToShares(
      contribution,
    );

    return super.previewAddLiquidityWithShares({
      destination,
      contribution: convertedContribution,
      maxAPR,
      minAPR,
      minLpSharePrice,
      ethValue,
    });
  }

  async openLongWithShares({
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
    const convertedSharesAmount = await this.convertStethTokensToShares(
      sharesAmount,
    );
    return super.openLongWithShares({
      destination,
      minBondsOut,
      minSharePrice,
      sharesAmount: convertedSharesAmount,
      ethValue,
    });
  }

  /**
   * Convert steth tokens into steth shares so that hyperdrive methods can be
   * called with correct amounts.
   */
  private convertStethTokensToShares(sharesAmount: bigint) {
    return this.publicClient.readContract({
      abi: MockLido.abi,
      address: this.lidoAddress,
      functionName: "getSharesByPooledEth",
      args: [sharesAmount],
    });
  }
}
