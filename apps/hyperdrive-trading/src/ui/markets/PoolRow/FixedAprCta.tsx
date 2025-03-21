import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { useFixedRate } from "src/ui/hyperdrive/longs/hooks/useFixedRate";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";

interface FixedAprCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function FixedAprCta({ hyperdrive }: FixedAprCtaProps): ReactElement {
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
            className="text-h4"
          />
        ) : (
          "-"
        )
      }
      isLoading={fixedRateStatus === "loading"}
    />
  );
}
