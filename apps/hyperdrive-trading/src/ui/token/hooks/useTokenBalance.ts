import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { getIsReth } from "src/vaults/isReth";
import { getIsSteth } from "src/vaults/isSteth";
import { Address, erc20Abi, formatUnits } from "viem";
import { useBalance, useChainId, useReadContract } from "wagmi";

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
  const config = useAppConfig();
  const chainId = useChainId();

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

  /**
   * FIXME: The steth and reth hyperdrive contracts and much of the hyperdrive
   * math operate on shares (as recommended by the protocols), but the MockLido
   * and MockRocketPool contracts store account balances in base and calculate
   * share price based on the current timestamp. This means an account's
   * stETH/rETH balance remains constant while the amount of shares it
   * represents decreases every second. This is different from how the real Lido
   * and Rocket Token contracts work, where stETH/rETH balances update every
   * rebase and the amount of shares they represent remains constant.
   *
   * Because of this accounting difference in the mocks, the accuracy of any
   * calculations based on share balance/price will slowly drift every second,
   * and transactions prepared with an account's full share balance are likely
   * to revert once submitted since the price will have changed. To accommodate
   * this, the balance is truncated to the nearest .0001 base.
   */
  const tokenConfig = config.tokens.find(
    ({ address }) => address === tokenAddress,
  );
  if (
    tokenConfig &&
    tokenBalance &&
    (chainId === 42069 || chainId === 11155111) &&
    (getIsSteth(tokenConfig) || getIsReth(tokenConfig))
  ) {
    const truncatedBalance = tokenBalance - (tokenBalance % BigInt(1e14));
    return {
      balance: {
        formatted: formatUnits(truncatedBalance, decimals),
        value: truncatedBalance,
      },
      status: tokenBalanceStatus,
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
