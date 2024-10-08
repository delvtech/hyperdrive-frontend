import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Well } from "src/ui/base/components/Well/Well";
import { useApproveToken } from "src/ui/token/hooks/useApproveToken";
import { Address } from "viem";
export function ApproveTokenChoices({
  spender,
  amountAsBigInt,
  amount,
  token,
}: {
  spender: Address | undefined;
  amountAsBigInt: bigint | undefined;
  amount: string | undefined;
  token: TokenConfig;
}): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<
    "Unlimited" | "FixedAmount"
  >("FixedAmount");

  let approvedAmount = MAX_UINT256;
  switch (selectedOption) {
    case "Unlimited":
      approvedAmount = MAX_UINT256;
      break;
    case "FixedAmount":
      approvedAmount = amountAsBigInt ?? 0n;
      break;
  }
  const { approve, pendingWalletSignatureStatus, isTransactionMined } =
    useApproveToken({
      tokenAddress: token.address,
      spender: spender,
      amount: approvedAmount,
      enabled: token.address !== ETH_MAGIC_NUMBER,
      tokenChainId: token.chainId,
    });

  return (
    <div className="flex flex-col gap-4">
      <Well transparent elevation="flat">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <h5 className="mb-2 font-bold">Approve {token.symbol}</h5>
            <p className="flex text-left text-sm text-neutral-content">
              Approve this market to spend your {token.symbol}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <div className="daisy-form-control">
            <label className="daisy-label my-2 cursor-pointer">
              <input
                type="radio"
                name="radio-unlimited"
                className="daisy-radio"
                checked={selectedOption === "Unlimited"}
                onChange={() => {
                  setSelectedOption("Unlimited");
                }}
              />
              <span className="daisy-label-text ml-2 flex flex-1 text-left">
                Unlimited {token.symbol}
              </span>
            </label>
          </div>
          <div className="daisy-form-control">
            <label className="daisy-label mt-2 cursor-pointer">
              <input
                type="radio"
                name="radio-depositing"
                className="daisy-radio"
                checked={selectedOption === "FixedAmount"}
                onChange={() => {
                  setSelectedOption("FixedAmount");
                }}
              />
              <span className="daisy-label-text ml-2 flex flex-1 text-left">
                {amount} {token.symbol}
              </span>
            </label>
          </div>
        </div>
      </Well>
      {pendingWalletSignatureStatus === "loading" ||
      (pendingWalletSignatureStatus === "success" && !isTransactionMined) ? (
        <button
          disabled
          className="daisy-btn daisy-btn-circle daisy-btn-warning relative w-full disabled:bg-warning disabled:text-base-100 disabled:opacity-30"
        >
          <div className="daisy-loading daisy-loading-spinner" />
          Approving
        </button>
      ) : (
        <button
          onClick={(e) => {
            // Do this so we don't close the modal
            e.preventDefault();
            approve?.();
          }}
          className="daisy-btn daisy-btn-circle daisy-btn-warning relative w-full"
        >
          <h5>Approve {token.symbol}</h5>
        </button>
      )}
    </div>
  );
}
