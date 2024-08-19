import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";

export function AssetStack({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const appConfig = useAppConfig();
  const hyperdrive = appConfig.hyperdrives.find(
    (hyperdrive) => hyperdrive.address === hyperdriveAddress,
  )!;
  const baseToken = appConfig.tokens.find(
    (token) => hyperdrive.poolConfig.baseToken === token.address,
  );
  const sharesToken = appConfig.tokens.find(
    (token) => hyperdrive.poolConfig.vaultSharesToken === token.address,
  );
  return (
    <div
      className={
        /* DaisyUI note: overflow-visible enables tooltips to be shown in the daisy-avatar-group */
        "daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse"
      }
    >
      {hyperdrive.poolConfig.baseToken &&
      hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
        <div
          className="daisy-avatar daisy-tooltip daisy-tooltip-top w-12 scale-75 overflow-visible before:bg-base-100 sm:scale-100"
          data-tip={baseToken?.symbol}
        >
          <img src={baseToken?.iconUrl} />
        </div>
      ) : null}
      {hyperdrive.poolConfig.vaultSharesToken &&
      hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
        <div
          className="daisy-avatar daisy-tooltip daisy-tooltip-top w-12 scale-75 overflow-visible before:bg-base-100 sm:scale-100"
          data-tip={sharesToken?.symbol}
        >
          <img src={sharesToken?.iconUrl} />
        </div>
      ) : null}
    </div>
  );
}
