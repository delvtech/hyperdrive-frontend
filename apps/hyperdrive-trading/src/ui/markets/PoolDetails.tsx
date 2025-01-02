import {
  appConfig,
  getBaseToken,
  getToken,
  getYieldSource,
  HyperdriveConfig,
  makeAddressUrl,
} from "@delvtech/hyperdrive-appconfig";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Link, useSearch } from "@tanstack/react-router";
import classNames from "classnames";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { AccordionSection2 } from "src/ui/base/components/AccordionSection/AccordionSection";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { AddLiquidityForm } from "src/ui/hyperdrive/lp/AddLiquidityForm/AddLiquidityForm";
import { OpenShortForm } from "src/ui/hyperdrive/shorts/OpenShortForm/OpenShortForm";
import { AssetStack } from "src/ui/markets/AssetStack";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { faqData2 } from "src/ui/onboarding/faqData2";
import { useAccount } from "wagmi";

export function PoolDetails({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const {
    // If no search param is specified, we default to showing the
    // Longs side of the market
    position: activePosition = "long",
  } = useSearch({
    from: MARKET_DETAILS_ROUTE,
  });

  const { marketState } = useMarketState({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

  return (
    <div className="flex w-[515px] flex-col gap-9">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center py-2 text-xs font-semibold text-neutral-content"
        >
          <ArrowLeftIcon className="mr-1 size-3" />
          Back to All Pools
        </Link>
        <h1 className="flex items-center gap-2 text-h2">
          <AssetStack
            hyperdriveAddress={hyperdrive.address}
            hyperdriveChainId={hyperdrive.chainId}
          />
          {yieldSource.shortName}
        </h1>
        {marketState?.isPaused && (
          <CustomBanner description="This market has been paused. You may close your positions, but no new positions may be opened." />
        )}
      </div>
      <div className="flex flex-col gap-16">
        {(() => {
          switch (activePosition) {
            case "long":
              return <OpenLongForm hyperdrive={hyperdrive} />;
            case "short":
              return <OpenShortForm hyperdrive={hyperdrive} />;
            case "lp":
              return <AddLiquidityForm hyperdrive={hyperdrive} />;
          }
        })()}

        <AboutThisPool hyperdrive={hyperdrive} />
        <FAQ />
      </div>
    </div>
  );
}
function AboutThisPool({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const baseToken = getBaseToken({
    appConfig,
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
  });
  const sharesToken = getToken({
    appConfig,
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });
  const chainConfig = appConfig.chains[hyperdrive.chainId];
  return (
    // Add mx-2 so this lines up with the rest of the form
    <div className="mx-2 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <AccordionSection2
          heading={
            <div
              className={classNames(
                "pb-1 text-left text-md font-normal text-base-content/80 hover:text-white group-data-[open]:text-white",
              )}
            >
              <h4>Pool Information</h4>
            </div>
          }
          onChange={(open) =>
            open &&
            window.plausible("aboutPoolOpen", {
              props: {
                chainId: hyperdrive.chainId,
                poolAddress: hyperdrive.address,
              },
            })
          }
        >
          <div className="flex flex-col gap-4 text-md leading-bodyText text-base-content/80">
            <LabelValue
              label="Chain"
              value={
                <div className="flex items-center gap-2">
                  <img
                    src={chainConfig.iconUrl}
                    className="size-6 rounded-full"
                  />
                  {chainConfig.name}
                </div>
              }
            />
            <LabelValue
              label="Pool address"
              value={
                <ExternalLink
                  href={makeAddressUrl(hyperdrive.address, chainConfig)}
                  className="daisy-link"
                  newTab
                >
                  <div className="flex items-center gap-2">
                    {formatAddress(hyperdrive.address)}
                    <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
                  </div>
                </ExternalLink>
              }
            />
            <LabelValue
              label="Base token"
              value={
                <ExternalLink
                  href={makeAddressUrl(baseToken.address, chainConfig)}
                  className="daisy-link"
                  newTab
                >
                  <Tooltip
                    position="left"
                    className="gap-2"
                    tooltip={baseToken.name}
                  >
                    <img
                      src={baseToken.iconUrl}
                      className="size-6 rounded-full"
                    />
                    {formatAddress(baseToken.address)}
                    <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
                  </Tooltip>
                </ExternalLink>
              }
            />
            {sharesToken ? (
              <LabelValue
                label="Shares token"
                value={
                  <ExternalLink
                    href={makeAddressUrl(sharesToken.address, chainConfig)}
                    newTab
                    className="daisy-link"
                  >
                    <Tooltip
                      position="left"
                      className="gap-2"
                      tooltip={sharesToken.name}
                    >
                      <img
                        src={sharesToken.iconUrl}
                        className="size-6 rounded-full"
                      />
                      {formatAddress(sharesToken.address)}
                      <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
                    </Tooltip>
                  </ExternalLink>
                }
              />
            ) : null}
          </div>
        </AccordionSection2>
      </div>
    </div>
  );
}
function FAQ() {
  const { address: account } = useAccount();
  return (
    // Add mx-2 so the FAQ lines up with the rest of the form
    <div className="mx-2 flex flex-col gap-6">
      <h4>FAQ</h4>

      <div className="flex flex-col gap-6">
        {faqData2.map(({ question, answer }, i) => (
          <AccordionSection2
            key={i}
            heading={
              <div
                className={classNames(
                  "pb-1 text-left text-md font-normal text-base-content/80 hover:text-white group-data-[open]:text-white",
                )}
              >
                {question}
              </div>
            }
            onChange={(open) =>
              open &&
              window.plausible("faqOpen", {
                props: {
                  name: question,
                  connectedWallet: account,
                },
              })
            }
          >
            <div className="flex flex-col gap-4 text-md leading-bodyText text-base-content/80">
              {answer}
            </div>
          </AccordionSection2>
        ))}
      </div>
    </div>
  );
}
