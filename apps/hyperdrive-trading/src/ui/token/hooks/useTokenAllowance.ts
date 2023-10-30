import { Address, erc20ABI, useContractRead } from "wagmi";

interface UseTokenAllowanceOptions {
  account: Address | undefined;
  spender: Address | undefined;
  tokenAddress: Address;
}

interface useTokenAllowanceResult {
  tokenAllowance: bigint | undefined;
  status: "error" | "idle" | "loading" | "success";
}

export function useTokenAllowance({
  account,
  spender,
  tokenAddress,
}: UseTokenAllowanceOptions): useTokenAllowanceResult {
  const enabled = !!spender && !!account;

  const { data, status } = useContractRead({
    enabled,
    address: tokenAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: enabled ? [account, spender] : undefined,
  });

  return { tokenAllowance: data, status };
}
