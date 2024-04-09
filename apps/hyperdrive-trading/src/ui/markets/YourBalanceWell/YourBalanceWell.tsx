import { ERC20 } from "@delvtech/hyperdrive-artifacts/ERC20";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { MAX_UINT256 } from "src/base/constants";
import { cloudChain } from "src/chains/cloudChain";
import { SupportedChainId } from "src/chains/supportedChains";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { RevokeAllowanceModalButton } from "src/ui/token/RevokeAllowanceModalButton";
import { useApproveToken } from "src/ui/token/hooks/useApproveToken";
import { useDepositBaseForShares } from "src/ui/token/hooks/useDepositBaseForShares";
import { useMaxMintAmount } from "src/ui/token/hooks/useMaxMintAmount";
import { useMintToken } from "src/ui/token/hooks/useMintToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { Address } from "viem";
import { foundry, sepolia } from "viem/chains";
import { useAccount, useChainId, useReadContract } from "wagmi";

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
        <p className="mb-2 text-sm text-neutral-content">Available Assets</p>
        <div className="flex flex-col gap-2">
          <AvailableAsset
            targetToken={baseToken}
            baseToken={baseToken}
            spender={hyperdrive.address}
          />
          <AvailableAsset
            targetToken={sharesToken}
            baseToken={baseToken}
            spender={hyperdrive.address}
          />
        </div>
      </div>
    </Well>
  );
}
function AvailableAsset({
  targetToken,
  baseToken,
  spender,
}: {
  spender: Address;
  baseToken: TokenConfig<EmptyExtensions>;
  targetToken: TokenConfig<any>;
}) {
  const { address: account } = useAccount();
  const isTargetingEth = targetToken.address === ETH_MAGIC_NUMBER;

  const { balance: targetTokenBalance, status: targetTokenBalanceStatus } =
    useTokenBalance({
      account: account,
      tokenAddress: targetToken.address,
      decimals: targetToken.decimals,
    });

  const { balance: baseTokenBalance } = useTokenBalance({
    account: account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  // If you can spend more than the total supply of the token, then it's
  // effectively an infinite approval. See revoke.cash:
  // https://github.com/RevokeCash/revoke.cash/blob/823a1d2541bf1177f43511bf8983f49c8fc7811d/lib/utils/allowances.ts#L244
  const { tokenAllowance: allowance } = useTokenAllowance({
    account,
    spender,
    tokenAddress: targetToken.address,
    enabled: !isTargetingEth,
  });
  const { data: totalSupply } = useReadContract({
    abi: ERC20.abi,
    functionName: "totalSupply",
    address: targetToken.address,
    query: { enabled: !isTargetingEth },
  });
  const isUnlimited = !!totalSupply && !!allowance && allowance > totalSupply;

  const { maxMintAmount } = useMaxMintAmount(baseToken);

  let baseAmountToDepositForShares = undefined;
  if (maxMintAmount && baseTokenBalance?.value) {
    baseAmountToDepositForShares =
      maxMintAmount < baseTokenBalance?.value
        ? maxMintAmount
        : baseTokenBalance?.value;
  }

  // Some shares tokens need base tokens to be deposited in order to mint
  const needsDeposit =
    targetToken.address !== baseToken.address &&
    !targetToken.tags.includes("steth");

  const { tokenAllowance: sharesTokenToSpendBaseTokenAllowance } =
    useTokenAllowance({
      account,
      spender: targetToken.address,
      tokenAddress: baseToken.address,
      enabled: !isTargetingEth && needsDeposit,
    });

  const hasEnoughAllowance =
    !!sharesTokenToSpendBaseTokenAllowance &&
    !!baseTokenBalance &&
    sharesTokenToSpendBaseTokenAllowance <= baseTokenBalance.value;

  const { approve: approveSharesTokenToSpendBaseToken } = useApproveToken({
    tokenAddress: baseToken.address,
    spender: targetToken.address,
    amount: MAX_UINT256,
    enabled: needsDeposit && hasEnoughAllowance,
  });

  const hasEnoughAllowanceForDeposit =
    !!baseAmountToDepositForShares &&
    !!sharesTokenToSpendBaseTokenAllowance &&
    sharesTokenToSpendBaseTokenAllowance > baseAmountToDepositForShares;

  const { depositBaseForShares } = useDepositBaseForShares({
    sharesToken: targetToken,
    baseTokenSymbol: baseToken.symbol,
    baseAmount: baseAmountToDepositForShares,
    destination: account,
    enabled: needsDeposit && hasEnoughAllowanceForDeposit,
  });

  const { mint } = useMintToken({
    token: targetToken,
    destination: account,
  });

  const chainId = useChainId() as SupportedChainId;
  const isTestnetChain = [cloudChain.id, sepolia.id, foundry.id].includes(
    chainId,
  );
  const hasFaucet = chainId === sepolia.id;

  return (
    <div className="flex whitespace-nowrap ">
      <div className="flex items-center gap-1 text-h5 font-bold">
        {targetTokenBalanceStatus === "loading" ||
        targetTokenBalance === undefined ? (
          <Skeleton className="w-52" />
        ) : (
          <>
            <img src={targetToken.iconUrl} className="h-8 rounded-full  p-1" />
            {formatBalance({
              balance: targetTokenBalance.value || 0n,
              decimals: targetToken.decimals,
              places: 4,
            })}{" "}
            {targetToken.symbol}
          </>
        )}
      </div>

      {(isTargetingEth && hasFaucet) || !isTargetingEth ? (
        <div className="daisy-dropdown daisy-dropdown-end">
          <div tabIndex={0} role="button" className="daisy-btn daisy-btn-sm">
            <EllipsisVerticalIcon className="h-5" />
          </div>
          <ul
            tabIndex={0}
            className="daisy-menu daisy-dropdown-content z-[1] w-52 rounded-lg bg-base-100 p-4 shadow"
          >
            {isTargetingEth && chainId === sepolia.id ? (
              <li>
                <a
                  href="https://faucetlink.to/sepolia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to Sepolia faucet
                </a>
              </li>
            ) : undefined}
            {!isTargetingEth && targetTokenBalance ? (
              <>
                <li className="daisy-menu-title flex-row justify-between text-xs text-neutral-content">
                  <span>Allowance</span>
                  <span className="font-normal">
                    {isUnlimited
                      ? "Unlimited"
                      : formatBalance({
                          balance: allowance || 0n,
                          decimals: targetToken.decimals,
                          places: 4,
                        })}
                  </span>
                </li>
                <RevokeAllowanceModalButton
                  allowance={allowance}
                  token={targetToken}
                  spender={spender}
                />
                {isTestnetChain && needsDeposit ? (
                  <>
                    <li
                      className={classNames(
                        !approveSharesTokenToSpendBaseToken ||
                          hasEnoughAllowance
                          ? "daisy-disabled"
                          : undefined,
                      )}
                    >
                      <button
                        disabled={
                          !approveSharesTokenToSpendBaseToken ||
                          hasEnoughAllowance
                        }
                        onClick={() => approveSharesTokenToSpendBaseToken?.()}
                      >
                        {`1. Approve ${targetToken.symbol} for ${baseToken.symbol}`}
                      </button>
                    </li>
                    <li
                      className={classNames(
                        !depositBaseForShares ? "daisy-disabled" : undefined,
                      )}
                    >
                      <button
                        disabled={!depositBaseForShares}
                        onClick={() => depositBaseForShares?.()}
                      >
                        {`2. Deposit ${baseToken.symbol} for ${targetToken.symbol}`}
                      </button>
                    </li>
                  </>
                ) : undefined}

                {isTestnetChain && !needsDeposit ? (
                  <li>
                    <button disabled={!mint} onClick={() => mint?.()}>
                      Mint
                    </button>
                  </li>
                ) : undefined}
              </>
            ) : undefined}
          </ul>
        </div>
      ) : undefined}
    </div>
  );
}
