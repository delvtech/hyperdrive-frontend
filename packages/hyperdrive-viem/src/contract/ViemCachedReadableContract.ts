import { CachedReadableContract, SimpleCache } from "@hyperdrive/sdk";
import {
  ViemReadableContract,
  ViemReadableContractOptions,
} from "src/contract/ViemReadableContract";
import { Abi } from "viem";

export interface ViemCachedReadableContractOptions<TAbi extends Abi = Abi>
  extends ViemReadableContractOptions<TAbi> {
  cache?: SimpleCache;
}

export class ViemCachedReadableContract<
  TAbi extends Abi = Abi,
> extends CachedReadableContract<TAbi> {
  constructor({
    abi,
    address,
    publicClient,
    cache,
  }: ViemCachedReadableContractOptions<TAbi>) {
    super({
      contract: new ViemReadableContract({
        abi,
        address,
        publicClient,
      }),
      cache,
    });
  }
}
