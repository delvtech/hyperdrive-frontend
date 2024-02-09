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
import { TokenInput } from "src/ui/token/TokenInput";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
export default function ApproveToken({
  activeToken,
  isActiveTokenApprovalRequired,
  amountAsBigInt,
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
  activeToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
  amountAsBigInt: bigint | undefined;
  isActiveTokenApprovalRequired: boolean;
  approve: (() => void) | undefined;
}): JSX.Element {
  const [approvedAmount, setApprovedAmount] = useState<bigint | undefined>(
    MAX_UINT256,
  );
  function handleApprovalSelection() {
    // Handle approval selection here
  }

  const { approve } = useTokenApproval({
    tokenAddress: activeToken.address,
    spender: hyperdrive.address,
    amount: MAX_UINT256,
    enabled: isActiveTokenApprovalRequired,
  });

  const modalId = `approve_token`;
  function closeModal() {
    (window as any)[modalId].close();
  }
  return (
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
              <div className="mt-4 lg:w-[50%]">
                <div className="daisy-form-control ">
                  <label className="daisy-label my-2 cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="checked:bg-red-500 daisy-radio"
                      checked
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
                      name="radio-10"
                      className="checked:bg-blue-500 daisy-radio"
                      checked
                    />
                    <span className="daisy-label-text ml-2 flex flex-1  text-left">
                      Dai Depositing 4.000
                    </span>
                  </label>
                </div>
                <div className="daisy-form-control">
                  <label className="daisy-label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="checked:bg-blue-500 daisy-radio"
                      checked
                    />
                    <span className="daisy-label-text ml-2 flex flex-1  text-left">
                      <TokenInput
                        onChange={() => console.log("TOken change")}
                        name="Custom"
                        inputLabel="Custom"
                      />
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  // Close modal and approve token here
                }}
                className="daisy-btn daisy-btn-circle daisy-btn-warning relative mt-4 w-full"
              >
                <h5>Approve {activeToken.symbol}</h5>
              </button>
            </div>
          }
        />
      </button>
    </button>
  );
}
