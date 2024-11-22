import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { useAccount } from "wagmi";

interface FixedAprCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function FixedAprCta({ hyperdrive }: FixedAprCtaProps): ReactElement {
  const { address: account } = useAccount();
  const { fixedApr, fixedRateStatus } = useFixedRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const label = "Fixed APR";

  return (
    <PoolStat
      label={label}
      value={
        fixedApr ? (
          <PercentLabel
            value={formatRate({
              rate: fixedApr.apr,
              includePercentSign: false,
            })}
          />
        ) : (
          "-"
        )
      }
      isLoading={fixedRateStatus === "loading"}
      variant="gradient"
      action={
        <Link
          to="/market/$chainId/$address"
          params={{
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          }}
          search={{ position: "long" }}
          className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
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
          Long
        </Link>
      }
    />
  );
}
