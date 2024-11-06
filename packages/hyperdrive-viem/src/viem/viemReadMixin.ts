import { Pretty } from "@delvtech/drift";
import {
  Constructor,
  ReadContractModelOptions,
  ReadModelOptions,
} from "@delvtech/hyperdrive-js-core";
import { PublicClient } from "viem";

export type ViemReadMixin<T extends ReadContractModelConstructor> = new (
  options: ViemReadModelOptions<ConstructorParameters<T>[0]>,
) => InstanceType<T>;

export function viemReadMixin<T extends ReadContractModelConstructor>(
  Base: T,
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
        ...restArgs,
      );
    }
  } as ViemReadMixin<T>;
}

export type ReadContractModelConstructor = new (
  ...args: [options: ReadContractModelOptions, ...any[]]
) => any;

// Replace the `drift` option with `publicClient`
export type ViemReadModelOptions<T extends ReadModelOptions> = Pretty<
  Omit<T, "drift"> & {
    publicClient: PublicClient;
  }
>;
