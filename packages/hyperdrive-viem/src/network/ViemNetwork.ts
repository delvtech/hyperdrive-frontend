import { INetwork, GetBlockParameters, SimpleCacheKey } from "@hyperdrive/sdk";
import stringify from "fast-json-stable-stringify";
import { PublicClient } from "viem";

export class ViemNetwork implements INetwork {
  private readonly _publicClient: PublicClient;
  private _pendingPromisesMap: Map<SimpleCacheKey, Promise<any>>;

  constructor({
    publicClient,
    pendingPromisesMap,
  }: {
    publicClient: PublicClient;
    pendingPromisesMap?: Map<SimpleCacheKey, Promise<any>>;
  }) {
    this._publicClient = publicClient;
    this._pendingPromisesMap = pendingPromisesMap || new Map();
  }

  async getBlock(args?: GetBlockParameters): Promise<{
    blockNumber: bigint;
    timestamp: bigint;
  }> {
    const serializableArgs: Record<any, any> = {};
    if (args?.blockHash) {
      serializableArgs.blockHash = args.blockHash;
    }
    if (args?.blockNumber !== undefined) {
      serializableArgs.blockNumber = args.blockNumber.toString();
    }
    if (args?.blockTag) {
      serializableArgs.blockTag = args.blockTag.toString();
    }
    const pendingPromiseKey = stringify(serializableArgs);

    // If we have a pending request for this block, await that same request
    const pendingPromise = this._pendingPromisesMap.get(pendingPromiseKey);
    if (pendingPromise) {
      const block = await pendingPromise;
      return { blockNumber: block.number, timestamp: block.timestamp };
    }

    // no pending request found, make the request
    console.log("no pending request found, requesting:", args);
    const blockPromise = this._publicClient.getBlock(args);
    this._pendingPromisesMap.set(pendingPromiseKey, blockPromise);

    const block = await blockPromise;
    if (!block.number || !block.timestamp) {
      throw new Error(`Block not found for args: ${args}`);
    }

    // this._pendingPromisesMap.delete(pendingPromiseKey);

    return { blockNumber: block.number, timestamp: block.timestamp };
  }
}
