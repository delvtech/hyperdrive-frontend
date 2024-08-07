import { TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address } from "viem";

export function useActiveToken({
  account,
  tokens,
  defaultActiveToken,
}: {
  account: Address | undefined;
  tokens: TokenConfig[];
  defaultActiveToken: Address;
}): {
  activeToken: TokenConfig;
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
  ) as TokenConfig;

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
