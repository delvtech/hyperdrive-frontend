import { TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address } from "viem";

export function useActiveToken<T1, T2>({
  account,
  tokens,
  defaultActiveToken,
}: {
  account: Address | undefined;
  tokens: [TokenConfig<T1>, TokenConfig<T2>];
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
} {
  const [activeTokenAddress, setActiveToken] = useState(defaultActiveToken);

  const activeToken = tokens.find(
    ({ address }) => address === activeTokenAddress,
  ) as TokenConfig<T1 | T2>;

  const activeTokenBalance = useTokenBalance({
    account,
    tokenAddress: activeTokenAddress,
    decimals: activeToken.decimals,
  });

  return {
    activeToken,
    activeTokenBalance,
    setActiveToken,
  };
}
