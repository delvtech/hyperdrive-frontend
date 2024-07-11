import {
  EntityFungibleToken,
  EntityTokenTransferQuote,
  ServerChainBalance,
} from "@delvtech/gopher";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { PropsWithChildren, ReactElement } from "react";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address, parseUnits } from "viem";

interface BridgeAssetsActionButtonProps {
  account: Address | undefined;
  token: EntityFungibleToken;
  solution: EntityTokenTransferQuote[] | undefined;
  balances: ServerChainBalance[] | undefined;
}

export function BridgeAssetsActionButtons({
  account,
  token,
  solution,
  balances,
}: BridgeAssetsActionButtonProps): ReactElement {
  if (!account) {
    return <ConnectWalletButton />;
  }

  return (
    <div className="space-y-4">
      {solution?.map((quote) => {
        const chainBalance = balances?.find(
          (b) => b.chainId === quote.sourceChain,
        );
        const chainBalanceBefore = parseUnits(
          chainBalance?.balance || "0",
          token.decimals!,
        );
        const chainBalanceAfter =
          chainBalanceBefore - parseUnits(quote.amount!, token.decimals!);
        return (
          <Well key={quote.sourceChain}>
            <CollapseSection
              heading={`Bridge ${quote.amount} ${token.symbol} from Base`}
            >
              <LabelValue
                label={
                  <div className="text-left">
                    <div>Balance</div>
                    <div>Fee</div>
                  </div>
                }
                value={
                  <div>
                    <div className="space-x-4">
                      <span>
                        {formatBalance({
                          balance: chainBalanceBefore,
                          decimals: token.decimals!,
                        })}
                      </span>
                      <span>{"-->"}</span>
                      <span className="text-error">
                        {formatBalance({
                          balance: chainBalanceAfter,
                          decimals: token.decimals!,
                        })}
                      </span>
                    </div>
                    <div className="flex">{`$${quote.fee?.amountUSD}`}</div>
                  </div>
                }
              />
              <div className="flex justify-between">
                <button className="daisy-btn daisy-btn-circle daisy-btn-primary w-32 disabled:bg-primary disabled:text-base-100 disabled:opacity-30">
                  Approve
                </button>
                <button className="daisy-btn daisy-btn-circle daisy-btn-primary w-32 disabled:bg-primary disabled:text-base-100 disabled:opacity-30">
                  Bridge
                </button>
              </div>
            </CollapseSection>
          </Well>
        );
      })}
    </div>
  );
}

export function CollapseSection({
  heading,
  children,
}: PropsWithChildren<{
  heading: string;
}>): ReactElement {
  return (
    <div className="daisy-collapse justify-normal rounded-none text-sm">
      <input type="checkbox" className="min-h-0" />
      <div className=" daisy-collapse-title mb-3 min-h-0 p-0 font-medium">
        <div className="flex justify-between gap-4">
          <span>{heading}</span>
          <span className="text-xs">
            {/* Click to expand */}
            <ChevronDownIcon className="h-4 focus:rotate-180 focus:transition" />
          </span>
        </div>
      </div>
      <div className="daisy-collapse-content space-y-2 px-0">{children}</div>
    </div>
  );
}
