import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { useAccount } from "wagmi";

interface FixedAprCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function FixedAprCta({ hyperdrive }: FixedAprCtaProps): ReactElement {
  const { address: account } = useAccount();
  const { isFlagEnabled: isNewDesign } = useFeatureFlag("new-design");
  const { fixedApr, fixedRateStatus } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const label = "Fixed APR";

  return (
    <Link
      to="/market/$chainId/$address"
      params={{
        address: hyperdrive.address,
        chainId: hyperdrive.chainId.toString(),
      }}
      search={{ position: "long" }}
      onClick={(e) => {
        e.stopPropagation();
        window.plausible("positionCtaClick", {
          props: {
            chainId: hyperdrive.chainId,
            poolAddress: hyperdrive.address,
            positionType: "long",
            statName: label,
            statValue: fixedApr ? fixed(fixedApr.apr, 18).toString() : "",
            connectedWallet: account,
          },
        });
      }}
    >
      <PoolStat
        label={label}
        value={
          fixedApr ? (
            <PercentLabel
              value={formatRate({
                rate: fixedApr.apr,
                includePercentSign: false,
              })}
              className="text-h4"
            />
          ) : (
            "-"
          )
        }
        isLoading={fixedRateStatus === "loading"}
        action={
          isNewDesign ? null : (
            <Link
              to="/market/$chainId/$address"
              params={{
                address: hyperdrive.address,
                chainId: hyperdrive.chainId.toString(),
              }}
              search={{ position: "long" }}
              className="daisy-btn h-10 min-h-10 w-full rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-400 sm:h-8 sm:bg-gray-600 sm:hover:bg-gray-500 md:w-28"
              onClick={(e) => {
                e.stopPropagation();
                window.plausible("positionCtaClick", {
                  props: {
                    chainId: hyperdrive.chainId,
                    poolAddress: hyperdrive.address,
                    positionType: "long",
                    statName: label,
                    statValue: fixedApr
                      ? fixed(fixedApr.apr, 18).toString()
                      : "",
                    connectedWallet: account,
                  },
                });
              }}
            >
              Open Long
            </Link>
          )
        }
      />
    </Link>
  );
}
