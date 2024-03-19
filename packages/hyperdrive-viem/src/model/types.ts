import {
  ReadModelOptions as ReadModelOptionsBase,
  ReadWriteModelOptions as ReadWriteModelOptionsBase,
} from "@delvtech/hyperdrive-js-core";
import { PublicClient, WalletClient } from "viem";
import { Prettify } from "viem/chains";

export type ReadModelOptions<T extends ReadModelOptionsBase> = Prettify<
  // Replace the properties the model will create with the ones it will use to
  // create them.
  Omit<T, "contractFactory" | "network"> & {
    publicClient: PublicClient;
  }
>;

export type ReadWriteModelOptions<T extends ReadWriteModelOptionsBase> =
  Prettify<
    // Replace the properties the model will create with the ones it will use to
    // create them.
    Omit<T, "contractFactory" | "network"> & {
      publicClient: PublicClient;
      walletClient: WalletClient;
    }
  >;
