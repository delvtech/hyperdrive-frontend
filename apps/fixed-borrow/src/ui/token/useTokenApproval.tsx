import { DSTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { Address, useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseTokenApprovalOptions {
  tokenAddress: Address;
  spender: Address;
  amount: bigint;
}

export function useTokenApproval({
  tokenAddress,
  spender,
  amount,
}: UseTokenApprovalOptions): { approve: (() => void) | undefined } {
  const { config: approveConfig } = usePrepareContractWrite({
    address: tokenAddress,
    abi: DSTokenABI, // tokens are a DSToken on goerli, see: https://github.com/dapphub/ds-token
    functionName: "approve",
    args: [spender, BigNumber.from(amount)],
  });
  const { write: approve } = useContractWrite(approveConfig);
  return { approve };
}
