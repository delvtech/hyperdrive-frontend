import { QueryStatusWithIdle } from "src/base/queryStatus";
import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

interface UseTokenAllowanceOptions {
  account: Address | undefined;
  spender: Address | undefined;
  tokenAddress: Address | undefined;
  tokenChainId?: number | undefined;
  enabled?: boolean;
}

interface useTokenAllowanceResult {
  tokenAllowance: bigint | undefined;
  status: QueryStatusWithIdle;
}

export function useTokenAllowance({
  account,
  spender,
  tokenAddress,
  tokenChainId,
  enabled = true,
}: UseTokenAllowanceOptions): useTokenAllowanceResult {
  const queryEnabled = !!spender && !!account && !!tokenAddress && !!enabled;

  const { data, status } = useReadContract({
    query: {
      enabled: queryEnabled,
    },
    address: tokenAddress,
    chainId: tokenChainId,
    abi: erc20Abi,
    functionName: "allowance",
    args: queryEnabled ? [account, spender] : undefined,
  });

  return { tokenAllowance: data, status };
}
