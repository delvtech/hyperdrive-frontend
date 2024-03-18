import { ERC20 } from "@delvtech/hyperdrive-artifacts/ERC20";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useApproveToken } from "src/ui/token/hooks/useApproveToken";
import { useMintToken } from "src/ui/token/hooks/useMintToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address, parseUnits } from "viem";
import { useAccount, useReadContract } from "wagmi";

export function YourBalanceWell({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();

  // base token
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  // shares token
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  return (
    <Well elevation="flat">
      <div className="flex flex-col">
        <p className="mb-1 text-sm text-neutral-content">Available Assets</p>
        <div className="flex flex-col">
          <AvailableAsset token={baseToken} spender={hyperdrive.address} />
          <AvailableAsset token={sharesToken} spender={hyperdrive.address} />
        </div>
      </div>
    </Well>
  );
}
function AvailableAsset({
  token,
  spender,
}: {
  spender: Address;
  token: TokenConfig<any>;
}) {
  const { address: account } = useAccount();
  const tokenBalance = useTokenBalance({
    account: account,
    tokenAddress: token.address,
    decimals: token.decimals,
  });

  // If you can spend more than the total supply of the token, then it's
  // effectively an infinite approval. See revoke.cash:
  // https://github.com/RevokeCash/revoke.cash/blob/823a1d2541bf1177f43511bf8983f49c8fc7811d/lib/utils/allowances.ts#L244
  const { tokenAllowance: allowance } = useTokenAllowance({
    account,
    spender,
    tokenAddress: token.address,
  });
  const { data: totalSupply } = useReadContract({
    abi: ERC20.abi,
    functionName: "totalSupply",
    address: token.address,
  });
  const isUnlimited = !!totalSupply && !!allowance && allowance > totalSupply;

  const { mint } = useMintToken({
    amount: parseUnits("500000000", token.decimals),
    token: token,
    destination: account,
  });
  const { approve: revokeAllowance } = useApproveToken({
    tokenAddress: token.address,
    amount: 0n,
    spender,
  });
  return (
    <div className="flex whitespace-nowrap ">
      <div className="flex items-center gap-1 font-bold">
        <img src={token.iconUrl} className="h-8 rounded-full  p-1" />
        {formatBalance({
          balance: tokenBalance?.value || 0n,
          decimals: token.decimals,
          places: 4,
        })}{" "}
        {token.symbol}
      </div>

      <div className="daisy-dropdown daisy-dropdown-end">
        <div tabIndex={0} role="button" className="daisy-btn daisy-btn-sm">
          <EllipsisVerticalIcon className="h-4" />
        </div>
        <ul
          tabIndex={0}
          className="daisy-menu daisy-dropdown-content z-[1] w-52 rounded-box bg-base-100 p-4 shadow"
        >
          <li className="daisy-menu-title flex-row justify-between text-xs text-neutral-content">
            <span>Allowance</span>
            <span className="font-normal">
              {isUnlimited
                ? "Unlimited"
                : formatBalance({
                    balance: allowance || 0n,
                    decimals: token.decimals,
                    places: 4,
                  })}
            </span>
          </li>
          <li>
            <button
              className="disabled:daisy-btn-disabled disabled:cursor-not-allowed disabled:text-neutral-500"
              disabled={!allowance}
              onClick={() => revokeAllowance?.()}
            >
              <span>Revoke Allowance</span>
            </button>
          </li>
          {import.meta.env.DEV ? (
            <li>
              <button disabled={!mint} onClick={() => mint?.()}>
                Mint
              </button>
            </li>
          ) : undefined}
        </ul>
      </div>
    </div>
  );
}
