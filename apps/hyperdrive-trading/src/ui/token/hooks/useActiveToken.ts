import { TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Address } from "viem";
import { useBalance } from "wagmi";

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

  const { data: activeTokenBalance } = useBalance({
    address: account,
    token:
      activeToken.address === ETH_MAGIC_NUMBER
        ? undefined // Fetches eth balance by setting `token` to undefined
        : activeToken.address,
  });

  return {
    activeToken,
    activeTokenBalance,
    setActiveToken,
  };
}
