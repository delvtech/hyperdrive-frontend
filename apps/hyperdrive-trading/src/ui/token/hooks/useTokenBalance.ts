import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address, erc20Abi, formatUnits } from "viem";
import { useBalance, useReadContract } from "wagmi";

/**
 * Hook to get the token balance for an account. Supports the eth magic number
 * address to fetch the native eth balance as well.
 */
export function useTokenBalance({
  account,
  tokenAddress,
  decimals,
}: {
  account: Address | undefined;
  tokenAddress: Address | undefined;
  decimals: number;
}): {
  balance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
  status: "error" | "success" | "loading";
} {
  const isEth = tokenAddress === ETH_MAGIC_NUMBER;

  const { data: ethBalance, status: ethBalanceStatus } = useBalance({
    address: account,
    query: {
      enabled: isEth,
    },
  });

  const { data: tokenBalance, status: tokenBalanceStatus } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    query: {
      enabled: account && !isEth,
    },
  });

  if (isEth) {
    return {
      balance:
        ethBalance !== undefined
          ? {
              formatted: formatUnits(ethBalance.value, decimals),
              value: ethBalance.value,
            }
          : undefined,
      status: ethBalanceStatus,
    };
  }

  return {
    balance:
      tokenBalance !== undefined
        ? {
            formatted: formatUnits(tokenBalance, decimals),
            value: tokenBalance,
          }
        : undefined,
    status: tokenBalanceStatus,
  };
}
