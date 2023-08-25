import { HyperdriveABI } from "src/abis/Hyperdrive";
import { ViemContract } from "src/contract/viem/ViemContract";
import { Address } from "abitype";
import { PublicClient } from "viem";

interface ViemHyperdriveOptions {
  address: Address;
  publicClient: PublicClient;
}

export class ViemHyperdrive extends ViemContract<typeof HyperdriveABI> {
  constructor({ address, publicClient }: ViemHyperdriveOptions) {
    super({
      abi: HyperdriveABI,
      address,
      publicClient,
    });
  }
}
