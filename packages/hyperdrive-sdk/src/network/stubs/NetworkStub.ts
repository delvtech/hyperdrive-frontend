import { GetBlockParameters, INetwork } from "src/network/Network";
import { stub } from "sinon";

/**
 * A mock implementation of a `Network` designed to facilitate unit
 * testing.
 */
export class NetworkStub implements INetwork {
  constructor() {}

  getBlock = stub().callsFake(
    (
      args?: GetBlockParameters | undefined,
    ): Promise<{ blockNumber: bigint; timestamp: bigint }> => {
      throw new Error("Method not implemented.");
    },
  );
}
