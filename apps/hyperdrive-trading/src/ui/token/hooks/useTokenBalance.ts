import { appConfig } from "@hyperdrive/appconfig";
import { ZERO_ADDRESS } from "src/base/constants";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address, erc20Abi, formatUnits } from "viem";
import { useBalance, useChainId, useReadContract } from "wagmi";

/**
 * Hook to retrieve the token balance for a specified account. Supports
 * fetching the native ETH balance by using a special ETH magic number address.
 * The hook will be disabled if the token address provided is the zero address.
 */
export function useTokenBalance({
  account,
  tokenAddress,
  decimals,
  tokenChainId,
}: {
  account: Address | undefined;
  tokenAddress: Address | undefined;
  decimals: number;
  tokenChainId?: number;
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
  const isZeroAddress = tokenAddress === ZERO_ADDRESS;

  const chainId = useChainId();

  const { data: ethBalance, status: ethBalanceStatus } = useBalance({
    address: account,
    query: {
      enabled: isEth,
    },
    chainId: tokenChainId,
  });

  const { data: tokenBalance, status: tokenBalanceStatus } = useReadContract({
    address: tokenAddress,
    chainId: tokenChainId,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: account ? [account] : undefined,
    query: {
      enabled: account && !isEth && !isZeroAddress,
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
   * FIXME: The StETHHyperdrive contract and much of hyperdrive math operates on
   * shares, but the MockLido contract stores account balances in base and
   * calculates share price based on the current timestamp. This means an
   * account's stETH balance remains constant while the amount of shares it
   * represents decreases every second. This is different from how the real Lido
   * contract works, where stETH balances update every rebase and the amount of
   * shares they represent remains constant.
   *
   * Because of this accounting difference, the accuracy of any calculations
   * based on share balance/price will slowly drift over time, and transactions
   * prepared with an account's full share balance are likely to revert once
   * submitted since the price will have changed. To accommodate this, the
   * balance is truncated to the nearest .0001 base.
   */
  const isSteth = appConfig.hyperdrives.find(
    (hyperdrive) =>
      hyperdrive.yieldSource === "lidoSteth" &&
      hyperdrive.poolConfig.vaultSharesToken === tokenAddress,
  );
  if (tokenBalance && isTestnetChain(chainId) && isSteth) {
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
