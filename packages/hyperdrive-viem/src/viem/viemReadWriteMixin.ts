import {
  createCachedReadWriteContract,
  createNetwork,
} from "@delvtech/evm-client-viem";
import {
  Constructor,
  ContractFactoryOptions,
  ReadWriteContractModelOptions,
  ReadWriteModelOptions,
} from "@delvtech/hyperdrive-js-core";
import { PublicClient, WalletClient } from "viem";
import { Prettify } from "viem/chains";

export type ViemReadWriteMixin<T extends ReadContractModelConstructor> = new (
  options: ViemReadWriteModelOptions<ConstructorParameters<T>[0]>
) => InstanceType<T>;

export function viemReadWriteMixin<T extends ReadContractModelConstructor>(
  Base: T
): ViemReadWriteMixin<T> {
  return class extends (Base as Constructor) {
    constructor(...[options, ...restArgs]: any[]) {
      const { publicClient, walletClient, cache, namespace, ...restOptions } =
        options as ViemReadWriteModelOptions<ReadWriteContractModelOptions>;
      super(
        {
          contractFactory: (options: ContractFactoryOptions) => {
            return createCachedReadWriteContract({
              publicClient,
              walletClient,
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
  } as ViemReadWriteMixin<T>;
}

export type ReadContractModelConstructor = new (
  ...args: [options: ReadWriteContractModelOptions, ...any[]]
) => any;

export type ViemReadWriteModelOptions<T extends ReadWriteModelOptions> =
  Prettify<
    // Replace the properties the wrapper will create with the ones it will use
    // to create them.
    Omit<T, "contractFactory" | "network"> & {
      publicClient: PublicClient;
      walletClient: WalletClient;
    }
  >;
