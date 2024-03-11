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
