import { findToken } from "@hyperdrive/appconfig";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  status: QueryStatusWithIdle;
}

export function useTokenAllowance({
  account,
  spender,
  tokenAddress,
  enabled = true,
}: UseTokenAllowanceOptions): useTokenAllowanceResult {
  const appConfig = useAppConfig();
  const queryEnabled = !!spender && !!account && !!tokenAddress && !!enabled;

  const { data, status } = useReadContract({
    query: {
      enabled,
    },
    address: tokenAddress,
    chainId: queryEnabled
      ? findToken({
          tokenAddress,
          tokens: appConfig.tokens,
        })?.chainId
      : undefined,
    abi: erc20Abi,
    functionName: "allowance",
    args: queryEnabled ? [account, spender] : undefined,
  });

  return { tokenAllowance: data, status };
}
