import { XMarkIcon } from "@heroicons/react/24/outline";
import { TokenConfig } from "@hyperdrive/appconfig";
import { useState } from "react";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useAccount, useBalance } from "wagmi";
import { TokenInput } from "./TokenInput";
import { useApproveToken } from "./hooks/useApproveToken";

export function RevokeAllowanceModal({
  token,
  allowance,
  spender,
}: {
  token: TokenConfig<any>;
  allowance: bigint | undefined;
  spender: `0x${string}`;
}): JSX.Element {
  const { address: account } = useAccount();
  const isEth = token.address === ETH_MAGIC_NUMBER;
  const { data: tokenBalance } = useBalance({
    address: account,
    // Fetches the account's eth balance by setting `token` to undefined
    token: token.address === ETH_MAGIC_NUMBER ? undefined : token.address,
  });
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
  let revokedAmount = 0n;
  switch (selectedOption) {
    case "Unlimited":
      revokedAmount = 0n;
      break;
    case "Custom":
      revokedAmount = customAmountAsBigInt ?? 0n;
      break;
  }
  const { approve: revokeAllowance } = useApproveToken({
    tokenAddress: token.address,
    amount: revokedAmount || 0n,
    spender,
    enabled: !isEth,
  });
  const modalId = `revoke_token`;
  function closeModal() {
    (window as any)[modalId].close();
  }
  return (
    <Modal
      modalId="revoke_token"
      modalContent={
        <div>
          <div className="flex items-center justify-between">
            <button
              className="daisy-btn daisy-btn-circle daisy-btn-ghost no-animation daisy-btn-sm absolute right-4 top-4 animate-none"
              onClick={closeModal}
            >
              <XMarkIcon className="w-6 " title="Close position" />
            </button>
            <div className="flex flex-col items-start">
              <h5 className="mb-2 font-bold">Revoke {token.symbol}</h5>
              <p className="flex max-w-[250px] text-left text-sm text-gray-400">
                Revoke {token.symbol} allowance for this account
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
                  Revoke all {token.symbol}
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
                    maxValue={tokenBalance?.formatted}
                    inputLabel="Set custom spending cap"
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
              revokeAllowance?.();
            }}
            className="daisy-btn daisy-btn-circle daisy-btn-warning relative mt-4 w-full"
          >
            <h5>Revoke {token.symbol}</h5>
          </button>
        </div>
      }
    >
      {({ showModal }) => (
        <li>
          <button
            className="disabled:daisy-btn-disabled disabled:cursor-not-allowed disabled:text-neutral-500"
            disabled={!allowance}
            onClick={() => showModal()}
          >
            Revoke Allowance
          </button>
        </li>
      )}
    </Modal>
  );
}
