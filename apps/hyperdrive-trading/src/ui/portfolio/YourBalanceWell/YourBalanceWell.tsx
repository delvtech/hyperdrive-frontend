import { findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { Address, parseUnits } from "viem";
import { useAccount, useBalance, useChainId } from "wagmi";

export function YourBalanceWell({
  tokenAddress,
}: {
  tokenAddress: Address;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const token = findBaseToken({
    baseTokenAddress: tokenAddress,
    tokens: appConfig.tokens,
  });
  const { data: balance } = useBalance({
    address: account,
    token: tokenAddress,
  });

  const chainId = useChainId();
  const { mint } = useMintBaseToken({
    amount: parseUnits("1000000", token.decimals),
    baseToken: token,
    destination: account,
  });

  console.log(mint);

  return (
    <Well elevation="flat">
      <div className="flex items-center gap-4">
        <Stat
          label="Your available balance"
          value={
            <div className="text-h6 -mt-1 flex items-center gap-1">
              {formatBalance({
                balance: balance?.value || 0n,
                decimals: token.decimals,
                places: 4,
              })}{" "}
              {token.symbol}
              <button
                disabled={!mint}
                className="daisy-btn daisy-btn-outline daisy-btn-xs ml-1"
                onClick={() => mint?.()}
              >
                Mint
              </button>
            </div>
          }
        />
      </div>
    </Well>
  );
}
