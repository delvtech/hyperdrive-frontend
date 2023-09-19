import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
} from "src/hyperdrive/ReadHyperdrive";
import {
  ReadWriteHyperdrive,
  ReadWriteHyperdriveOptions,
} from "src/hyperdrive/ReadWriteHyperdrive";

export type HyperdriveClientOptions =
  | ReadHyperdriveOptions
  | ReadWriteHyperdriveOptions;

/**
 * Factory function to create a Hyperdrive client. The client will have either
 * read or read/write capabilities based on the provided contract.
 */
export function createHyperdriveClient<
  TOptions extends HyperdriveClientOptions,
>({ contract, mathContract }: TOptions): HyperdriveClient<TOptions> {
  if ("write" in contract) {
    return new ReadWriteHyperdrive({
      contract,
      mathContract,
    });
  }

  return new ReadHyperdrive({
    contract,
    mathContract,
  }) as HyperdriveClient<TOptions>;
}

export type HyperdriveClient<
  TOptions extends HyperdriveClientOptions = HyperdriveClientOptions,
> = TOptions extends ReadWriteHyperdriveOptions
  ? ReadWriteHyperdrive
  : ReadHyperdrive;
