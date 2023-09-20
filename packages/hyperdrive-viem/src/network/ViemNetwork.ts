import { INetwork } from "@hyperdrive/sdk";
import { PublicClient } from "viem";

export class ViemNetwork implements INetwork {
  private readonly _publicClient: PublicClient;

  constructor(publicClient: PublicClient) {
    this._publicClient = publicClient;
  }

  getBlockNumber(): Promise<bigint> {
    return this._publicClient.getBlockNumber();
  }
}
