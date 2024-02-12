import { XMarkIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig, TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TokenInput } from "src/ui/token/TokenInput";
import { useApproveToken } from "src/ui/token/hooks/useApproveToken";
export default function ApproveTokenButton({
  hyperdrive,
  amountAsBigInt,
  amount,
  token,
  isApprovalRequired,
  tokenBalance,
}: {
  hyperdrive: HyperdriveConfig;
  amountAsBigInt: bigint | undefined;
  amount: string | undefined;
  token: TokenConfig;
  isApprovalRequired: boolean;
  tokenBalance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
}): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<
    "Unlimited" | "FixedAmount" | "Custom"
  >("Unlimited");
  const {
    amount: customAmount,
    amountAsBigInt: customAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: token.decimals,
  });

  let approvedAmount = MAX_UINT256;
  switch (selectedOption) {
    case "Unlimited":
      approvedAmount = MAX_UINT256;
      break;
    case "FixedAmount":
      approvedAmount = amountAsBigInt ?? 0n;
      break;
    case "Custom":
      approvedAmount = customAmountAsBigInt ?? 0n;
      break;
  }
  const { approve } = useApproveToken({
    tokenAddress: token.address,
    spender: hyperdrive.address,
    amount: approvedAmount,
    enabled: isApprovalRequired,
  });

  const modalId = `approve_token`;
  function closeModal() {
    (window as any)[modalId].close();
  }
  return (
    <>
      <button
        onClick={(e) => {
          // Do this so we don't close the modal
          e.stopPropagation();

          (window as any)[modalId].showModal();
        }}
        className="daisy-btn daisy-btn-circle daisy-btn-warning relative w-full"
      >
        <h5>Approve {token.symbol}</h5>
      </button>
      <Modal
        modalId="approve_token"
        modalContent={
          <>
            <div className="flex items-center justify-between">
              <button
                className="daisy-btn daisy-btn-circle daisy-btn-ghost no-animation daisy-btn-sm absolute right-4 top-4 animate-none"
                onClick={closeModal}
              >
                <XMarkIcon className="w-6 " title="Close position" />
              </button>
              <div className="flex flex-col items-start">
                <h5 className="mb-2 font-bold">Approve {token.symbol}</h5>
                <p className="flex max-w-[250px] text-left text-sm text-gray-400">
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
                  <span className="daisy-label-text ml-2 flex flex-1  text-left">
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
                  <span className="daisy-label-text ml-2 flex flex-1  text-left">
                    {amount} {token.symbol}
                  </span>
                </label>
              </div>
              <div className="daisy-form-control">
                <label className="daisy-label cursor-pointer">
                  <input
                    type="radio"
                    name="radio-custom"
                    className="daisy-radio"
                    checked={selectedOption === "Custom"}
                    onChange={() => {
                      setSelectedOption("Custom");
                    }}
                  />
                  <span className="daisy-label-text ml-2 flex w-full">
                    <TokenInput
                      // The active token that needs to be approved should already be selected so we don't need to show a token selector here.
                      token={token.symbol}
                      onChange={(newApprovedAmount) => {
                        setAmount(newApprovedAmount);
                        setSelectedOption("Custom");
                      }}
                      disabled={selectedOption !== "Custom"}
                      name={token.symbol}
                      value={customAmount ?? ""}
                      inputLabel="Custom amount"
                      stat={
                        tokenBalance
                          ? `Balance: ${formatBalance({
                              balance: tokenBalance?.value,
                              decimals: token.decimals,
                              places: 4,
                            })} ${token.symbol}`
                          : undefined
                      }
                    />
                  </span>
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                approve?.();
              }}
              className="daisy-btn daisy-btn-circle daisy-btn-warning relative mt-4 w-full"
            >
              <h5>Approve {token.symbol}</h5>
            </button>
          </>
        }
      />
    </>
  );
}
