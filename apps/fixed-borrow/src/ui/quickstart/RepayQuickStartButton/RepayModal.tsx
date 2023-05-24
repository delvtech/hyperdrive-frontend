import { Dialog, Transition } from "@headlessui/react";
import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { Fragment, ReactElement } from "react";
import { formatUnits } from "viem";
import { Button } from "src/ui/base/Button/Button";
import { Well } from "src/ui/base/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { RepayButton } from "src/ui/loans/RepayButton/RepayButton";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { Address, useAccount, useToken } from "wagmi";

interface RepayModalProps {
  tokenAddress: Address;
  isOpen: boolean;
  onClose: () => void;
}

export function RepayModal({
  tokenAddress,
  isOpen,
  onClose,
}: RepayModalProps): ReactElement {
  const { address: account } = useAccount();
  const { currentDebt } = useUserCurrentDebt(account, tokenAddress);
  const { data: token } = useToken({ address: tokenAddress });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md overflow-hidden rounded-2xl bg-inputBg px-8 py-7 text-left align-middle shadow-xl ring-1 ring-dawn transition-all">
              <Dialog.Title
                as="h4"
                className="font-semi mb-4 font-bold text-lightText"
              >
                Repay DAI
              </Dialog.Title>
              <div className="space-y-6">
                <p className="text-h6 text-lightText">
                  Repay your DAI debt. This can also be done on{" "}
                  <a href="">Spark</a>.
                </p>
                <Well>
                  <div className="flex justify-between  gap-4 bg-midnight ">
                    <span className=" text-h6 font-semibold uppercase text-secondaryText">
                      Repay
                    </span>
                    <span className=" text-h6 font-bold text-lightText">
                      {formatBalance(
                        formatUnits(currentDebt || 0n, token?.decimals),
                      )}{" "}
                      {token?.symbol}
                    </span>
                  </div>
                </Well>
                <div className="flex w-full justify-center gap-4 pt-2">
                  <ApproveAllowanceButton
                    tokenAddress={tokenAddress}
                    amount={currentDebt}
                    spender={SparkGoerliAddresses.pool}
                  />
                  <RepayButton
                    tokenAddress={tokenAddress}
                    amount={currentDebt}
                  />
                  <Button size="md" variant="dark" onClick={onClose} block>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
