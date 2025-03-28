import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  HyperdriveConfig,
  TokenConfig,
  getBaseToken,
} from "@delvtech/hyperdrive-appconfig";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { QueryStatusWithIdle } from "src/base/queryStatus";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { AccordionSection } from "src/ui/base/components/AccordionSection/AccordionSection";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { useAccount } from "wagmi";

interface OpenLongPreviewProps {
  hyperdrive: HyperdriveConfig;
  bondAmount: bigint;
  openLongPreviewStatus: QueryStatusWithIdle;
  spotRateAfterOpen: bigint | undefined;
  curveFee: bigint | undefined;
}

export function OpenLongPreview({
  hyperdrive,
  openLongPreviewStatus,
  bondAmount,
  spotRateAfterOpen,
  curveFee,
}: OpenLongPreviewProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { fixedApr } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen((prev) => {
      if (!prev) {
        window.plausible("transactionDetailsOpen", {
          props: {
            chainId: hyperdrive.chainId,
            poolAddress: hyperdrive.address,
            positionType: "long",
            positionSize: fixed(bondAmount, baseToken.decimals).toString(),
            feeAmount: fixed(curveFee ?? 0, baseToken.decimals).toString(),
            connectedWallet: account,
          },
        });
        return true;
      }
      return false;
    });
  }

  return (
    <div className="flex flex-col gap-3.5 px-2">
      <AccordionSection
        isExpanded={isOpen}
        onChange={handleChange}
        heading={
          <OpenLongTransactionDetailsHeader
            bondAmount={bondAmount}
            baseToken={baseToken}
            isDetailsExpanded={isOpen}
          />
        }
      >
        <LabelValue
          label="Size"
          size="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : bondAmount ? (
              <span
                className={classNames(
                  !curveFee
                    ? "text-base-content/80"
                    : "font-medium text-neutral-content",
                )}
              >
                {`${formatBalance({
                  balance: bondAmount,
                  decimals: baseToken.decimals,
                  places: baseToken.places,
                })} hy${baseToken.symbol}`}
              </span>
            ) : (
              "-"
            )
          }
        />
        <LabelValue
          label="Pool fee"
          tooltipContent="Total combined fee paid to LPs and governance to open the long."
          tooltipPosition="right"
          tooltipSize="small"
          size="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : bondAmount ? (
              <span className="text-base-content/80">
                {curveFee
                  ? `${formatBalance({
                      balance: curveFee,
                      decimals: baseToken.decimals,
                      places: baseToken.places,
                    })} hy${baseToken.symbol}`
                  : `0 hy${baseToken.symbol}`}
              </span>
            ) : (
              "-"
            )
          }
        />
        <LabelValue
          size="small"
          label="Fixed APR after open"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-base-content/80": !spotRateAfterOpen,
                })}
              >
                {spotRateAfterOpen ? (
                  <span className="flex gap-2">
                    <span className="text-base-content/80">{`${fixedApr?.formatted}`}</span>
                    <ArrowRightIcon className="h-4 text-base-content/80" />
                    {formatRate({ rate: spotRateAfterOpen })}
                  </span>
                ) : (
                  "-"
                )}
              </span>
            )
          }
        />
        <LabelValue
          label="Fixed APR impact"
          size="small"
          value={
            openLongPreviewStatus === "loading" ? (
              <Skeleton width={100} />
            ) : (
              <span
                className={classNames({
                  "text-error": spotRateAfterOpen,
                  "text-base-content/80": !spotRateAfterOpen,
                })}
              >
                {getMarketImpactLabel(fixedApr?.apr, spotRateAfterOpen)}
              </span>
            )
          }
        />
      </AccordionSection>
    </div>
  );
}

function OpenLongTransactionDetailsHeader({
  bondAmount,
  baseToken,
  isDetailsExpanded,
}: {
  bondAmount: bigint;
  baseToken: TokenConfig;
  isDetailsExpanded: boolean;
}) {
  return (
    <div className="flex w-full items-center justify-between text-neutral-content">
      <p>Transaction Details</p>
      <div className="flex items-center gap-1">
        {isDetailsExpanded ? null : (
          <span>{`${formatBalance({
            balance: bondAmount,
            decimals: baseToken.decimals,
            places: baseToken.places,
          })} hy${baseToken.symbol}`}</span>
        )}
        <ChevronDownIcon
          className={classNames(
            "ml-1 size-6 transition-transform duration-300 ease-in-out",
            {
              "rotate-180": isDetailsExpanded,
            },
          )}
        />
      </div>
    </div>
  );
}

function getMarketImpactLabel(
  currentFixedRate: bigint | undefined,
  spotRateAfterOpenLong: bigint | undefined,
) {
  if (spotRateAfterOpenLong === undefined || currentFixedRate === undefined) {
    return "-";
  }
  const changeInFixedApr = currentFixedRate - spotRateAfterOpenLong;

  const isChangeInFixedAprLessThanOneBasisPoint =
    parseFixed("0.0001").gt(changeInFixedApr); // .01% === .0001

  if (isChangeInFixedAprLessThanOneBasisPoint) {
    return "-<0.01%";
  }
  return `-${formatRate({ rate: changeInFixedApr })}`;
}
