import { INetwork } from "@hyperdrive/sdk";
import { BlockTag, PublicClient } from "viem";

export class ViemNetwork implements INetwork {
  private readonly _publicClient: PublicClient;

  constructor(publicClient: PublicClient) {
    this._publicClient = publicClient;
  }

  async getBlockNumber(blockTag?: BlockTag): Promise<bigint> {
    if (!blockTag) {
      return this._publicClient.getBlockNumber();
    }

    const { number } = await this._publicClient.getBlock({ blockTag });

    if (!number) {
      throw new Error(`Block not found for block tag: ${blockTag}`);
    }

    return number;
  }
}
