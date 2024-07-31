import {
  createCachedReadContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  Constructor,
  ContractFactoryOptions,
  ReadContractModelOptions,
  ReadModelOptions,
} from "@delvtech/hyperdrive-js-core";
import { PublicClient } from "viem";
import { Prettify } from "viem/chains";

export type ViemReadMixin<T extends ReadContractModelConstructor> = new (
  options: ViemReadModelOptions<ConstructorParameters<T>[0]>
) => InstanceType<T>;

export function viemReadMixin<T extends ReadContractModelConstructor>(
  Base: T
): ViemReadMixin<T> {
  return class extends (Base as Constructor) {
    constructor(...[options, ...restArgs]: any[]) {
      const { publicClient, cache, namespace, ...restOptions } =
        options as ViemReadModelOptions<ReadContractModelOptions>;
      super(
        {
          contractFactory: (options: ContractFactoryOptions) => {
            return createCachedReadContract({
              publicClient,
              cache,
              namespace,
              ...options,
            });
          },
          network: createNetwork(publicClient),
          ...restOptions,
        },
        ...restArgs
      );
    }
  } as ViemReadMixin<T>;
}

export type ReadContractModelConstructor = new (
  ...args: [options: ReadContractModelOptions, ...any[]]
) => any;

export type ViemReadModelOptions<T extends ReadModelOptions> = Prettify<
  // Replace the properties the mixin will create with the ones it will use to
  // create them.
  Omit<T, "contractFactory" | "network"> & {
    publicClient: PublicClient;
  }
>;
