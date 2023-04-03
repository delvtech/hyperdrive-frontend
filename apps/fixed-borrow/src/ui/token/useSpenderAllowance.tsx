import { DSTokenABI } from "@hyperdrive/spark";
import { Address, useAccount, useContractRead } from "wagmi";

export function useSpenderAllowance(
  token: Address,
  spender: Address,
): { allowance: bigint | undefined } {
  const { address: account } = useAccount();
  const { data: allowance } = useContractRead({
    abi: DSTokenABI,
    address: token,
    functionName: "allowance",
    enabled: !!account,
    args: [account as Address, spender],
    select: (allowance) => allowance.toBigInt(),
  });
  return { allowance };
}
