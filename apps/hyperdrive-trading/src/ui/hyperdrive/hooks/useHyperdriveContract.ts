import { HyperdriveContract, ViemHyperdrive } from "@hyperdrive/core";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useHyperdriveContract(address: Address): HyperdriveContract {
  const publicClient = usePublicClient();
  return new ViemHyperdrive({
    address,
    publicClient,
  });
}
