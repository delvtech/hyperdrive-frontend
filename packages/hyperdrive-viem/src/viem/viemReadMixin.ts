import { Drift, Pretty } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import {
  Constructor,
  ReadClient,
  ReadClientOptions,
} from "@delvtech/hyperdrive-js";
import { PublicClient } from "viem";

// Replace the `drift` option with `publicClient`.
export type ViemReadClientOptions<T extends ReadClientOptions> = Pretty<
  Omit<T, "drift"> & {
    publicClient: PublicClient;
  }
>;

/**
 * A mixin that overrides a read client's `drift` option with a `publicClient`
 * option.
 */
export function viemReadMixin<T extends Constructor<ReadClient>>(
  Base: T,
): ViemReadClientConstructor<T> {
  return class extends (Base as Constructor) {
    constructor(...[options, ...restArgs]: any[]) {
      const { publicClient, ...restOptions } =
        options as ViemReadClientOptions<ReadClientOptions>;

      const clientOptions: ReadClientOptions = {
        // TODO: Fix type casting needed for conflicting viem versions
        drift: new Drift(viemAdapter({ publicClient: publicClient as any })),
        ...restOptions,
      };

      super(clientOptions, ...restArgs);
    }
  } as ViemReadClientConstructor<T>;
}

// A `ReadClient` class constructor that takes a `publicClient` instead of a
// `drift` option.
export type ViemReadClientConstructor<T extends Constructor<ReadClient>> =
  Constructor<
    InstanceType<T>,
    [options: ViemReadClientOptions<ConstructorParameters<T>[0]>]
  >;
