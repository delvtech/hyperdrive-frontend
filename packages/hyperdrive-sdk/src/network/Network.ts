/**
 * An interface representing data the SDK needs to get from the network.
 */
export interface INetwork {
  getBlockNumber(): Promise<bigint>;
}
