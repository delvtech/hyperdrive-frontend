import { Drift, Pretty, ReadWriteAdapter } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import {
  Constructor,
  ReadWriteClient,
  ReadWriteClientOptions,
} from "@delvtech/hyperdrive-js-core";
import { PublicClient, WalletClient } from "viem";

// Replace the `drift` option with `publicClient` and `walletClient`.
export type ViemReadWriteClientOptions<T extends ReadWriteClientOptions> =
  Pretty<
    Omit<T, "drift"> & {
      publicClient: PublicClient;
      walletClient: WalletClient;
    }
  >;

export function viemReadWriteMixin<T extends Constructor<ReadWriteClient>>(
  Base: T,
): ViemReadWriteClientConstructor<T> {
  return class extends (Base as Constructor) {
    constructor(...[options, ...restArgs]: any[]) {
      const { publicClient, walletClient, ...restOptions } =
        options as ViemReadWriteClientOptions<ReadWriteClientOptions>;

      const clientOptions: ReadWriteClientOptions = {
        // TODO: Fix type casting needed for conflicting viem versions
        drift: new Drift(
          viemAdapter({
            publicClient: publicClient as any,
            walletClient: walletClient as any,
          }) as ReadWriteAdapter,
        ),
        ...restOptions,
      };

      super(clientOptions, ...restArgs);
    }
  } as ViemReadWriteClientConstructor<T>;
}

// A `ReadWriteClient` class constructor that takes a `publicClient` instead of
// a `drift` option.
export type ViemReadWriteClientConstructor<
  T extends Constructor<ReadWriteClient>,
> = Constructor<
  InstanceType<T>,
  [options: ViemReadWriteClientOptions<ConstructorParameters<T>[0]>]
>;
