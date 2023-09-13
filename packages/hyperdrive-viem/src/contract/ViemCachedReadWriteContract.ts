import { CachedReadWriteContract, SimpleCache } from "@hyperdrive/sdk";
import {
  ViemReadWriteContract,
  ViemReadWriteContractOptions,
} from "src/contract/ViemReadWriteContract";
import { Abi } from "viem";

export interface ViemCachedReadWriteContractOptions<TAbi extends Abi = Abi>
  extends ViemReadWriteContractOptions<TAbi> {
  cache?: SimpleCache;
}

export class ViemCachedReadWriteContract<
  TAbi extends Abi = Abi,
> extends CachedReadWriteContract<TAbi> {
  constructor({
    abi,
    address,
    publicClient,
    walletClient,
    cache,
  }: ViemCachedReadWriteContractOptions<TAbi>) {
    super({
      contract: new ViemReadWriteContract({
        abi,
        address,
        publicClient,
        walletClient,
      }),
      cache,
    });
  }
}
