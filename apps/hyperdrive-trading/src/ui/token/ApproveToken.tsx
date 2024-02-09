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
import { useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "./TokenInput";
export default function ApproveToken({
  amountAsBigInt,
  amount,
  hyperdrive,
  activeToken,
  isActiveTokenApprovalRequired,
  activeTokenBalance,
  activeTokenAllowance,
}: {
  hyperdrive: HyperdriveConfig;
  amountAsBigInt: bigint | undefined;
  amount: string | undefined;
  approve: (() => void) | undefined;
  activeToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
  isActiveTokenApprovalRequired: boolean;
  activeTokenAllowance: bigint | undefined;
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

  // useEffect(() => {
  //   console.log(approvedAmount, "approvedAmount");
  // }, [approvedAmount]);
  const isCustomAmountExceedingBalance =
    selectedOption === "Custom" &&
    !!activeTokenBalance && // Ensure activeTokenBalance exists
    !!customAmountAsBigInt && // Ensure customAmountAsBigInt is not undefined
    customAmountAsBigInt > activeTokenBalance.value; // Compare values directly

  const modalId = `approve_token`;
  function closeModal() {
    (window as any)[modalId].close();
  }
  return (
    <button
      className="daisy-btn daisy-btn-circle daisy-btn-warning relative w-full "
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
        <Modal
          modalId="approve_token"
          modalContent={
            <div className="text-base-content ">
              <div className="flex items-center justify-between">
                <button
                  className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
                  onClick={closeModal}
                >
                  <XMarkIcon className="w-6 " title="Close position" />
                </button>
                <div className="flex flex-col items-start">
                  <h5 className="mb-2 font-bold">Approve Tokens</h5>
                  <p className="flex max-w-[250px] text-left text-gray-400">
                    Set a maximum number of tokens to approve for this
                    transaction.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="daisy-form-control ">
                  <label className="daisy-label my-2 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-unlimited"
                      className="checked:bg-red-500 daisy-radio"
                      checked={selectedOption === "Unlimited"}
                      onChange={() => {
                        setSelectedOption("Unlimited");
                        setApprovedAmount(MAX_UINT256);
                      }}
                    />
                    <span className="daisy-label-text ml-2 flex flex-1  text-left">
                      Unlimited
                    </span>
                  </label>
                </div>
                <div className="daisy-form-control">
                  <label className="daisy-label mt-2 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-depositing"
                      className="checked:bg-blue-500 daisy-radio"
                      checked={selectedOption === "Depositing"}
                      onChange={() => {
                        setSelectedOption("Depositing");
                        setApprovedAmount(amountAsBigInt ?? 0n);
                      }}
                    />
                    <span className="daisy-label-text ml-2 flex flex-1  text-left">
                      {activeToken.symbol} Depositing {amount}
                    </span>
                  </label>
                </div>
                <div className="daisy-form-control">
                  <label className="daisy-label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-custom"
                      className="checked:bg-blue-500 daisy-radio"
                      checked={selectedOption === "Custom"}
                      onChange={() => {
                        setSelectedOption("Custom");
                        // For custom, don't immediately set `approvedAmount` here
                        // It will be set in the TokenInput's onChange handler
                      }}
                    />
                    <span className="daisy-label-text ml-2 flex w-full">
                      <TokenInput
                        // The active token that needs to be approved should already be selected so we don't need to show a token selector here.
                        token={<></>}
                        onChange={(newApprovedAmount) => {
                          setAmount(newApprovedAmount);
                          setApprovedAmount(customAmountAsBigInt ?? 0n);
                          setSelectedOption("Custom");
                        }}
                        name={activeToken.symbol}
                        value={customAmount ?? ""}
                        maxValue={activeTokenBalance?.formatted}
                        inputLabel="Custom"
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
                disabled={isCustomAmountExceedingBalance}
                onClick={(e) => {
                  // Close modal and approve token here
                  approve?.();
                }}
                className="daisy-btn daisy-btn-circle daisy-btn-warning relative mt-4 w-full"
              >
                <h5>Approve {activeToken.symbol}</h5>
              </button>

              {isCustomAmountExceedingBalance && (
                <p className="text-center text-sm text-error">
                  Insufficient balance
                </p>
              )}
            </div>
          }
        />
      </button>
    </button>
  );
}
