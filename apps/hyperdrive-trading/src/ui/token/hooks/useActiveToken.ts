import type { TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import type { Address } from "viem";

export function useActiveToken<T1, T2>({
  account,
  tokens,
  defaultActiveToken,
}: {
  account: Address | undefined;
  tokens: [TokenConfig<T1>, TokenConfig<T2>] | [TokenConfig<any>]; // Remove TokenConfig<any> to after Sepolia. Temporary fix to avoid users losing their testnet ETH to Lido.
  defaultActiveToken: Address;
}): {
  activeToken: TokenConfig<T1 | T2>;
  activeTokenBalance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
  setActiveToken: (tokenAddress: Address) => void;
  isActiveTokenEth: boolean;
} {
  const [activeTokenAddress, setActiveToken] = useState(defaultActiveToken);

  const activeToken = tokens.find(
    ({ address }) => address === activeTokenAddress,
  ) as TokenConfig<T1 | T2>;

  const { balance: activeTokenBalance } = useTokenBalance({
    account,
    tokenAddress: activeTokenAddress,
    decimals: activeToken.decimals,
  });

  return {
    activeToken,
    activeTokenBalance,
    setActiveToken,
    isActiveTokenEth: activeTokenAddress === ETH_MAGIC_NUMBER,
  };
}
