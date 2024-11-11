import { Drift } from "@delvtech/drift";
import { viemAdapter } from "@delvtech/drift-viem";
import { getHyperdrive as baseGetHyperdrive } from "@delvtech/hyperdrive-js";
import {
  ReadHyperdrive,
  ReadHyperdriveOptions,
  ReadWriteHyperdrive,
} from "src/hyperdrive/base";
import { WalletClient } from "viem";

export interface HyperdriveOptions<
  T extends WalletClient | undefined = undefined,
> extends ReadHyperdriveOptions {
  walletClient?: T;
}

export type Hyperdrive<T extends WalletClient | undefined = undefined> =
  T extends void ? ReadHyperdrive : ReadWriteHyperdrive;

export async function getHyperdrive<
  T extends WalletClient | undefined = undefined,
>({
  address,
  publicClient,
  walletClient,
  cache,
  cacheNamespace = publicClient.chain?.id,
  debugName,
  earliestBlock,
}: HyperdriveOptions<T>): Promise<Hyperdrive<T>> {
  const drift = new Drift(
    viemAdapter({
      publicClient,
      walletClient,
    }),
  );
  return baseGetHyperdrive({
    address,
    drift,
    cache,
    cacheNamespace,
    debugName,
    earliestBlock,
  }) as Promise<Hyperdrive<T>>;
}
