import { DSTokenABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { useAccount, useContractRead } from "wagmi";

export function useSpenderAllowance(
  token: `0x${string}`,
  spender: `0x${string}`,
): { allowance: BigNumber | undefined } {
  const { address: account } = useAccount();
  const { data: allowance } = useContractRead({
    abi: DSTokenABI,
    address: token,
    functionName: "allowance",
    enabled: !!account,
    args: [account as `0x${string}`, spender],
  });
  return { allowance };
}
