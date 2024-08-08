import {
  EntityFungibleToken,
  EntityTokenTransferQuote,
  ServerChainBalance,
} from "@delvtech/gopher";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { MutationStatus, useMutation } from "@tanstack/react-query";
import { PropsWithChildren, ReactElement } from "react";
import toast from "react-hot-toast";
import { parseError } from "src/network/parseError";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useApproveToken } from "src/ui/token/hooks/useApproveToken";
import { Address, Hash, parseUnits } from "viem";
import { useChainId, useSendTransaction } from "wagmi";

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
  const chainId = useChainId();

  if (!account) {
    return <ConnectWalletButton />;
  }

  return (
    <div className="space-y-4">
      {solution?.map((quote) => {
        const chainBalance = balances?.find(
          (b) => b.chainId === quote.sourceChain,
        );

        if (!chainBalance) {
          return null;
        }

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
                <ApproveButton
                  chainId={chainId}
                  token={token}
                  quote={quote}
                  balance={chainBalance}
                />
                {BridgeButton()}
              </div>
            </CollapseSection>
          </Well>
        );
      })}
    </div>
  );
}

interface ApproveButtonProps {
  chainId: number;
  token: EntityFungibleToken;
  quote: EntityTokenTransferQuote;
  balance: ServerChainBalance;
}

function ApproveButton({
  chainId,
  token,
  quote,
  balance,
}: ApproveButtonProps): ReactElement {
  const { openChainModal } = useChainModal();
  const isConnectedToSourceChain = balance.chainId === chainId;

  const { approve } = useApproveToken({
    tokenAddress: token.addresses[chainId] as Address,
    spender: quote.transaction.to as Address,
    amount: parseUnits(quote.amount, token.decimals),
  });

  function onApprove() {
    if (!isConnectedToSourceChain && openChainModal) {
      openChainModal();
    }

    if (isConnectedToSourceChain && approve) {
      approve();
    }
  }

  return (
    <button
      type="button"
      className="daisy-btn daisy-btn-circle daisy-btn-primary w-32 disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
      onClick={onApprove}
    >
      {isConnectedToSourceChain ? "Approve" : "Switch Network"}
    </button>
  );
}

interface BridgeButtonProps {
  solution: EntityTokenTransferQuote;
}

function BridgeButton({ solution }: BridgeButtonProps): ReactElement {
  const { sendBridgeTransaction, bridgeTransactionStatus } =
    useSendBridgeTransaction(solution);

  return (
    <button
      type="button"
      onClick={sendBridgeTransaction}
      className="daisy-btn daisy-btn-circle daisy-btn-primary w-32 disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
    >
      {bridgeTransactionStatus === "loading" ? (
        <div className="daisy-loading daisy-loading-spinner" />
      ) : (
        "Bridge"
      )}
    </button>
  );
}

function useSendBridgeTransaction(
  solution: EntityTokenTransferQuote | undefined,
): {
  sendBridgeTransaction: (() => void) | undefined;
  bridgeTransactionStatus: MutationStatus;
} {
  const { sendTransaction } = useSendTransaction();

  const isMutationEnabled = !!solution;

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      if (!isMutationEnabled) {
        return;
      }

      return sendTransaction({
        to: solution.transaction.to as Address,
        data: solution.transaction.data as Hash,
      });
    },
    onError(error) {
      const message = parseError({
        error,
      });
      toast.error(message);
    },
  });

  return {
    sendBridgeTransaction: isMutationEnabled ? mutate : undefined,
    bridgeTransactionStatus: status,
  };
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
