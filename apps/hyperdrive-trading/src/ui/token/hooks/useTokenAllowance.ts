import { Address, erc20ABI, useContractRead } from "wagmi";

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

  const { data, status } = useContractRead({
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: queryEnabled ? [account, spender] : undefined,
    enabled: queryEnabled,
  });

  return { tokenAllowance: data, status };
}
