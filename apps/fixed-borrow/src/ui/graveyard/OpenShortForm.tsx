import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { ApproveAllowanceButton } from "src/ui/token/ApproveAllowanceButton";
import { useOpenShort } from "src/ui/shorts/hooks/useOpenShort";
import { useOpenShortPreview } from "src/ui/shorts/hooks/useOpenShortPreview";
import { Address, useAccount, useToken } from "wagmi";

interface OpenShortFormProps {
  hyperdrivePoolAddress: Address;
  debtTokenAddress: Address;
  /**
   * The amount of debt to short.
   */
  debtToShort: BigNumber | undefined;
}

export function OpenShortForm({
  debtToShort,
  debtTokenAddress,
  hyperdrivePoolAddress,
}: OpenShortFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  // const { openShortPreview } = useOpenShortPreview({
  //   hyperdrivePool: hyperdrivePoolAddress,
  //   bondAmount: debtToShort,
  //   maxDeposit: debtToShort,
  //   destination: account,
  //   asUnderlying: true,
  // });
  // const formattedOpenShortPreview =
  //   openShortPreview && debtToShort?.gt(0)
  //     ? formatUnits(openShortPreview, debtTokenMetadata?.decimals)
  //     : undefined;
  const { openShort, openShortStatus } = useOpenShort({
    hyperdrivePool: hyperdrivePoolAddress,
    bondAmount: debtToShort,
    maxDeposit: debtToShort,
    destination: account,
    asUnderlying: true,
  });

  return (
    <div className="flex w-full flex-col ">
      <div className="daisy-form-control">
        <label className="daisy-label">
          <span className="daisy-label-text">Hyperdrive Short</span>
          <span className="daisy-label-text">
            Existing shorts: (
            <button className="daisy-link">
              {/* TODO: Make a modal open up on click to show your shorts */}5
            </button>
            )
          </span>
        </label>
        <label className="daisy-input-group">
          <span className="shrink-0">You Pay</span>
          <input
            type="number"
            className="daisy-input-bordered daisy-input text-info focus:border-info w-full appearance-none !text-opacity-100"
            // value={formattedOpenShortPreview || ""}
          />
          <span>{debtTokenMetadata?.symbol}</span>
        </label>
      </div>

      {debtToShort?.gt(0) ? (
        <div className="mt-2 flex flex-col justify-between gap-2 self-end md:flex-row">
          <ApproveAllowanceButton
            amount={debtToShort.toBigInt()}
            tokenAddress={debtTokenAddress}
            spender={hyperdrivePoolAddress}
          />
          <button
            className={classNames(
              "daisy-btn-outline daisy-btn-active daisy-btn ",
            )}
          >
            12 months
          </button>
          <button
            onClick={() => openShort?.()}
            disabled={!openShort || openShortStatus === "loading"}
            className={classNames("daisy-btn-outline daisy-btn-info daisy-btn")}
          >
            Open short position
          </button>
        </div>
      ) : null}
    </div>
  );
}
