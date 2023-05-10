import { DSTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseTokenApproveOptions {
  tokenAddress: Address;
  spender: Address;
  amount: bigint | undefined;
}

export function useTokenApprove({
  tokenAddress,
  spender,
  amount,
}: UseTokenApproveOptions): { approve: (() => void) | undefined } {
  const approveEnabled = amount !== undefined;
  const { config: approveConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: DSTokenABI, // tokens are a DSToken on goerli, see: https://github.com/dapphub/ds-token
    functionName: "approve",
    enabled: approveEnabled,
    args: approveEnabled ? [spender, BigNumber.from(amount)] : undefined,
  });
  const { write: approve } = useContractWrite(approveConfig);
  return { approve };
}
