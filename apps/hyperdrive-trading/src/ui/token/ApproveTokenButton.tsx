import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
} from "@hyperdrive/appconfig";
import { useEffect, useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TokenInput } from "src/ui/token/TokenInput";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenPicker } from "./TokenPicker";
export default function ApproveTokenButton({
  hyperdrive,
  amountAsBigInt,
  amount,
  activeToken,
  isActiveTokenApprovalRequired,
  activeTokenBalance,
}: {
  hyperdrive: HyperdriveConfig;
  amountAsBigInt: bigint | undefined;
  amount: string | undefined;
  activeToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
  isActiveTokenApprovalRequired: boolean;
  activeTokenBalance:
    | {
        formatted: string;
        value: bigint;
      }
    | undefined;
}): JSX.Element {
  const [approvedAmount, setApprovedAmount] = useState<bigint>(MAX_UINT256);
  const [selectedOption, setSelectedOption] = useState<
    "Unlimited" | "Depositing" | "Custom"
  >("Unlimited");

  const { approve } = useTokenApproval({
    tokenAddress: activeToken.address,
    spender: hyperdrive.address,
    amount: approvedAmount,
    enabled: isActiveTokenApprovalRequired,
  });

  const {
    amount: customAmount,
    amountAsBigInt: customAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
  });

  useEffect(() => {
    if (selectedOption === "Custom") {
      setApprovedAmount(customAmountAsBigInt ?? 0n);
    }
  }, [customAmountAsBigInt, selectedOption]);

  const isCustomAmountExceedingBalance =
    selectedOption === "Custom" &&
    !!activeTokenBalance && // Ensure activeTokenBalance exists
    !!customAmountAsBigInt && // Ensure customAmountAsBigInt is not undefined
    customAmountAsBigInt > activeTokenBalance.value; // Compare values

  const modalId = `approve_token`;
  function closeModal() {
    (window as any)[modalId].close();
  }
  return (
    <>
      <button
        className="daisy-btn daisy-btn-circle daisy-btn-warning relative w-full"
        onClick={(e) => {
          // Do this so we don't close the modal
          e.preventDefault();
          approve?.();
        }}
      >
        <h5>Approve {activeToken.symbol}</h5>
        <button
          onClick={(e) => {
            // Do this so we don't close the modal
            e.stopPropagation();

            (window as any)[modalId].showModal();
          }}
          className="daisy-dropdown absolute right-4"
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6" />
        </button>
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
                <h5 className="mb-2 font-bold">Approve Tokens</h5>
                <p className="flex max-w-[250px] text-left text-sm text-gray-400">
                  Set a maximum number of tokens to approve for this
                  transaction.
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
                      setApprovedAmount(MAX_UINT256);
                    }}
                  />
                  <span className="daisy-label-text ml-2 flex flex-1  text-left">
                    Unlimited {activeToken.symbol}
                  </span>
                </label>
              </div>
              <div className="daisy-form-control">
                <label className="daisy-label mt-2 cursor-pointer">
                  <input
                    type="radio"
                    name="radio-depositing"
                    className="daisy-radio"
                    checked={selectedOption === "Depositing"}
                    onChange={() => {
                      setSelectedOption("Depositing");
                      setApprovedAmount(amountAsBigInt ?? 0n);
                    }}
                  />
                  <span className="daisy-label-text ml-2 flex flex-1  text-left">
                    {amount} {activeToken.symbol}
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
                      setApprovedAmount(customAmountAsBigInt ?? 0n);
                    }}
                  />
                  <span className="daisy-label-text ml-2 flex w-full">
                    <TokenInput
                      // The active token that needs to be approved should already be selected so we don't need to show a token selector here.
                      token={
                        <TokenPicker
                          tokens={[activeToken.symbol]}
                          activeToken={activeToken.symbol}
                          onChange={() => {}}
                        />
                      }
                      onChange={(newApprovedAmount) => {
                        setAmount(newApprovedAmount);
                        setSelectedOption("Custom");
                      }}
                      name={activeToken.symbol}
                      value={customAmount ?? ""}
                      maxValue={activeTokenBalance?.formatted}
                      inputLabel="Custom amount"
                      stat={
                        activeTokenBalance
                          ? `Balance: ${formatBalance({
                              balance: activeTokenBalance?.value,
                              decimals: activeToken.decimals,
                              places: 4,
                            })} ${activeToken.symbol}`
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
              <h5>Approve {activeToken.symbol}</h5>
            </button>
          </>
        }
      />
    </>
  );
}
