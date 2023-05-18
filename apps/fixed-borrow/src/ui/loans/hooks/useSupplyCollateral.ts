import { PoolABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import {
  Address,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

export function useSupplyCollateral(
  token: Address,
  amount: bigint,
  onBehalfOf: Address | undefined,
): {
  supply: (() => void) | undefined;
  isPendingWalletAction: boolean;
  isTxProcessing: boolean;
} {
  const { config: supplyConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.pool,
    abi: PoolABI,
    functionName: "supply",
    enabled: !!onBehalfOf,
    args: [
      token,
      amount,
      onBehalfOf as Address, // safe to cast because enabled is set
      0, // an optional referral code, 0 for now
    ],
  });
  const {
    write: supply,
    isLoading: isPendingWalletAction,
    data, // contains the hash of the pending tx
  } = useContractWrite(supplyConfig);

  const { status: txStatus } = useWaitForTransaction({
    hash: data?.hash,
  });
  return {
    supply,
    isPendingWalletAction,
    isTxProcessing: txStatus === "loading",
  };
}
