import { DSTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseTokenApprovalOptions {
  tokenAddress: `0x${string}`;
  spender: `0x${string}`;
  amount: BigNumber;
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
    args: [spender, amount],
  });
  const { write: approve } = useContractWrite(approveConfig);
  return { approve };
}
