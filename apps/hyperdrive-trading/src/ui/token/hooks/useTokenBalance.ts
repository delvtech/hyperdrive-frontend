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
}):
  | {
      formatted: string;
      value: bigint;
    }
  | undefined {
  const isEth = tokenAddress === ETH_MAGIC_NUMBER;

  const { data: ethBalance } = useBalance({
    address: account,
    query: {
      enabled: isEth,
    },
  });

  const { data: tokenBalance } = useReadContract({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    query: {
      enabled: account && !isEth,
    },
  });

  if (isEth && ethBalance) {
    return {
      formatted: formatUnits(ethBalance.value, decimals),
      value: ethBalance.value,
    };
  }

  if (!isEth && tokenBalance !== undefined) {
    return {
      formatted: formatUnits(tokenBalance, decimals),
      value: tokenBalance,
    };
  }
}
