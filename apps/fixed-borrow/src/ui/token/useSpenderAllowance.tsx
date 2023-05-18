import { DSTokenABI } from "@hyperdrive/spark";
import { Address, useAccount, useContractRead } from "wagmi";

export function useSpenderAllowance({
  tokenAddress,
  spender,
}: {
  tokenAddress: Address;
  spender: Address;
}): {
  allowance: bigint | undefined;
  status: "loading" | "success" | "error" | "idle";
} {
  const { address: account } = useAccount();
  const { data: allowance, status } = useContractRead({
    abi: DSTokenABI,
    address: tokenAddress,
    functionName: "allowance",
    enabled: !!account,
    args: [account as Address, spender],
  });
  return { allowance: allowance, status };
}
