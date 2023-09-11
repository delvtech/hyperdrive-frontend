import { CachedWritableContract, SimpleCache } from "@hyperdrive/sdk";
import {
  ViemWritableContract,
  ViemWritableContractOptions,
} from "src/contract/ViemWritableContract";
import { Abi } from "viem";

export interface ViemCachedWritableContractOptions<TAbi extends Abi = Abi>
  extends ViemWritableContractOptions<TAbi> {
  cache?: SimpleCache;
}

export class ViemCachedWritableContract<
  TAbi extends Abi = Abi,
> extends CachedWritableContract<TAbi> {
  constructor({
    abi,
    address,
    publicClient,
    walletClient,
    cache,
  }: ViemCachedWritableContractOptions<TAbi>) {
    super({
      contract: new ViemWritableContract({
        abi,
        address,
        publicClient,
        walletClient,
      }),
      cache,
    });
  }
}
