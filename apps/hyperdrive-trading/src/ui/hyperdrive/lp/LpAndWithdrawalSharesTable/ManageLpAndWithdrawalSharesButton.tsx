import { Cog8ToothIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useClickAway } from "react-use";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Modal } from "src/ui/base/components/Modal/Modal";
import { ModalHeader } from "src/ui/base/components/Modal/ModalHeader";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { RemoveLiquidityForm } from "src/ui/hyperdrive/lp/RemoveLiquidityForm/RemoveLiquidityForm";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { RedeemWithdrawalSharesForm } from "src/ui/hyperdrive/withdrawalShares/RedeemWithdrawalSharesForm/RedeemWithdrawalSharesForm";
import { useAccount } from "wagmi";
export function ManageLpAndWithdrawalSharesButton({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  // This is a controlled component because the default daisy-ui dropdown classes seem to interfere with focus elements in manage position modals.
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickAway(dropdownRef, () => setIsOpen(false));
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const { lpShares } = useLpShares({
    hyperdriveAddress: hyperdrive.address,
    account,
    chainId: hyperdrive.chainId,
  });
  const yieldSource = appConfig.yieldSources[hyperdrive.yieldSource];

  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
    chainId: hyperdrive.chainId,
  });

  const { baseProceeds: baseProceedsFromPreview } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: balanceOfWithdrawalShares,
      minOutputPerShare: 1n, // TODO: slippage,
      destination: account,
      chainId: hyperdrive.chainId,
    });

  return (
    <>
      <div
        className="relative flex w-full items-center font-inter"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
        >
          <Cog8ToothIcon className="h-5" />
          Manage
        </button>
        {isOpen && (
          <ul
            className={classNames(
              "absolute right-6 top-full z-50 mt-4 w-[270px] rounded-box border border-neutral-content/20 bg-neutral px-4 py-1",
              {
                "w-[300px]": balanceOfWithdrawalShares,
              },
            )}
          >
            {balanceOfWithdrawalShares ? (
              <Modal
                modalId="redeemWithdrawalShares"
                modalHeader={
                  <ModalHeader
                    heading="Confirm Withdraw"
                    subHeading={
                      "Remove liquidity that is queued for withdrawal"
                    }
                  />
                }
                modalContent={
                  <RedeemWithdrawalSharesForm hyperdrive={hyperdrive} />
                }
              >
                {({ showModal }) => (
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        showModal();
                      }}
                      className="flex h-[72px] w-full flex-row items-center justify-start border-b-2 border-b-neutral-content/20 px-0 py-4 hover:bg-neutral hover:text-neutral-content"
                    >
                      <span className="font-bold">Claim from queue</span>
                      <span className="ml-6 rounded-md border border-success/20 bg-success/20 px-1 text-success">
                        {baseProceedsFromPreview !== undefined ? (
                          `+ ${formatBalance({
                            balance: baseProceedsFromPreview,
                            decimals: baseToken?.decimals || 18,
                            places: baseToken?.places,
                          })}`
                        ) : (
                          <Skeleton />
                        )}
                      </span>
                    </button>
                  </li>
                )}
              </Modal>
            ) : null}
            <Modal
              modalId={"add-lp"}
              modalHeader={
                <ModalHeader
                  heading="Add Liquidity"
                  subHeading={`Earn yield by providing liquidity for Longs and
          Shorts. Your liquidity also earns the ${yieldSource.shortName}
          rate when not in use.
          `}
                />
              }
              modalContent={
                <AddLiquidityForm
                  hyperdrive={hyperdrive}
                  onAddLiquidity={(e) => {
                    // preventDefault since we don't want to close the modal while the
                    // tx is temporarily pending the user's signature in their wallet.
                    e.preventDefault();
                  }}
                />
              }
            >
              {({ showModal }) => (
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      showModal();
                    }}
                    className="m-0 flex h-[52px] w-full flex-row items-center justify-start border-b-2 border-b-neutral-content/20 p-0 text-start hover:bg-neutral hover:text-neutral-content"
                  >
                    Add Liquidity
                  </button>
                </li>
              )}
            </Modal>

            <Modal
              modalId="withdrawalLpModal"
              modalHeader={
                <ModalHeader heading="Remove Liquidity" subHeading={"TODO"} />
              }
              modalContent={
                <div>
                  <button
                    className="daisy-btn daisy-btn-circle daisy-btn-ghost daisy-btn-sm absolute right-4 top-4"
                    onClick={() => (window as any)["withdrawalLpModal"].close()}
                  >
                    <XMarkIcon className="w-6" title="Close" />
                  </button>
                  {lpShares && lpShares > 0n ? (
                    <RemoveLiquidityForm
                      hyperdrive={hyperdrive}
                      lpShares={lpShares || 0n}
                    />
                  ) : undefined}
                </div>
              }
            >
              {({ showModal }) => (
                <li>
                  <button
                    onClick={() => {
                      showModal();
                    }}
                    className="m-0 flex h-[52px] w-full flex-row items-center justify-start p-0 text-start hover:bg-neutral hover:text-neutral-content"
                  >
                    Remove Liquidity
                  </button>
                </li>
              )}
            </Modal>
          </ul>
        )}
      </div>
    </>
  );
}
