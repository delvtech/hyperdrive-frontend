import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

interface UseTokenAllowanceOptions {
  account: Address | undefined;
  spender: Address | undefined;
  tokenAddress: Address | undefined;
  enabled?: boolean;
}

interface useTokenAllowanceResult {
  tokenAllowance: bigint | undefined;
  status: "error" | "idle" | "loading" | "success";
}

export function useTokenAllowance({
  account,
  spender,
  tokenAddress,
  enabled = true,
}: UseTokenAllowanceOptions): useTokenAllowanceResult {
  const queryEnabled = !!spender && !!account && !!tokenAddress && !!enabled;

  const { data, status } = useReadContract({
    query: {
      enabled,
    },
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "allowance",
    args: queryEnabled ? [account, spender] : undefined,
  });

  return { tokenAllowance: data, status };
}
