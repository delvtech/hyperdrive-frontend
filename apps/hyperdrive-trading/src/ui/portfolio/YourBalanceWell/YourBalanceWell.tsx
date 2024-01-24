import { ReactElement } from "react";
import { TokenConfig } from "src/token/TokenConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { parseUnits } from "viem";
import { useAccount, useBalance, useChainId } from "wagmi";

export function YourBalanceWell({
  token,
}: {
  token: TokenConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: balance } = useBalance({
    address: account,
    token: token.address,
  });
  const chainId = useChainId();
  const { mint } = useMintBaseToken({
    amount: parseUnits("1000000", token.decimals),
    baseToken: token.address,
    destination: account,
  });

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
              {chainId === 31337 ? (
                <button
                  disabled={!mint}
                  className="daisy-btn daisy-btn-outline daisy-btn-xs ml-1"
                  onClick={() => mint?.()}
                >
                  Mint
                </button>
              ) : undefined}
            </div>
          }
        />
      </div>
    </Well>
  );
}
