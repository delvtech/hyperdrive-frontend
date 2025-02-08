import { ContractReadOptions, ReadWriteAdapter } from "@delvtech/drift";
import { ReadFactory } from "src/factory/ReadFactory";
import { ReadWriteHyperdrive } from "src/hyperdrive/ReadWriteHyperdrive";

export class ReadWriteFactory<
  A extends ReadWriteAdapter = ReadWriteAdapter,
> extends ReadFactory<A> {
  /**
   * Get a {@linkcode ReadWriteHyperdrive} instance for each Hyperdrive instance
   * deployed by the deployer factory.
   */
  async getInstances(
    options?: ContractReadOptions,
  ): Promise<ReadWriteHyperdrive<A>[]> {
    const hyperdriveAddresses = await this.getInstanceAddresses(options);
    return hyperdriveAddresses.map(
      (address) =>
        new ReadWriteHyperdrive({
          address,
          drift: this.drift,
        }),
    );
  }
}
