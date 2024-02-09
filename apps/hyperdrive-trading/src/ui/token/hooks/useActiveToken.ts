import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useState } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { useBalance } from "wagmi";
import { useTokenAllowance } from "./useTokenAllowance";
type DepositTokenType = "baseToken" | "sharesToken";
export function useActiveToken({
  hyperdrive,
  account,
}: {
  hyperdrive: HyperdriveConfig;
  account: Address | undefined;
}): {
  activeTokenType: DepositTokenType;
  activeToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
  activeTokenAllowance: bigint | undefined;
  activeTokenBalance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
  setActiveTokenType: (type: DepositTokenType) => void;
  isActiveTokenApprovalRequired: boolean;
} {
  const appConfig = useAppConfig();
  const [activeTokenType, setActiveTokenType] =
    useState<DepositTokenType>("baseToken");

  const activeToken =
    activeTokenType === "baseToken"
      ? findBaseToken({
          baseTokenAddress: hyperdrive.baseToken,
          tokens: appConfig.tokens,
        })
      : findYieldSourceToken({
          yieldSourceTokenAddress: hyperdrive.sharesToken,
          tokens: appConfig.tokens,
        });

  const { data: activeTokenBalance } = useBalance({
    address: account,
    // Fetches the account's eth balance by setting `token` to undefined
    token:
      activeToken.address === ETH_MAGIC_NUMBER
        ? undefined
        : activeToken.address,
  });

  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress:
      // Eth doesn't require an allowance, so use undefined to turn this hook off
      activeToken.address === ETH_MAGIC_NUMBER
        ? undefined
        : activeToken.address,
  });

  // All tokens besides ETH require you to check that there is sufficient allowance
  const isActiveTokenApprovalRequired =
    activeToken.address !== ETH_MAGIC_NUMBER;

  return {
    activeToken,
    activeTokenType,
    activeTokenAllowance,
    setActiveTokenType,
    activeTokenBalance,
    isActiveTokenApprovalRequired,
  };
}
