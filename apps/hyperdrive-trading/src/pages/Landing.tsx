import {
  BoltIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PositionCard } from "src/ui/hyperdrive/PositionCard";
import { useCurrentFixedAPR } from "src/ui/hyperdrive/hooks/useCurrentFixedAPR";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

export function Landing(): ReactElement | null {
  const { appConfig } = useAppConfig();
  if (appConfig) {
    // eslint-disable-next-line no-console
    console.log("appConfig", appConfig);
  }

  if (!appConfig) {
    return null;
  }
  const hyperdrive = appConfig?.hyperdrives[0];
  return (
    <div className="flex h-full justify-center bg-base-100 py-8 px-4">
      <CommonHeadTags />
      <PositionCards hyperdrive={hyperdrive} />
    </div>
  );
}

function PositionCards({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { fixedAPR } = useCurrentFixedAPR(hyperdrive);
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  const { marketState } = useMarketState(hyperdrive.address);
  const { vaultRate } = useVaultRate({
    // TODO: temporary for now until this available via addresses.json
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });
  return (
    <div className="flex h-[90vh] max-w-6xl flex-col items-center justify-evenly">
      <div className="flex flex-wrap justify-center gap-16">
        <PositionCard
          title={`Long hy${hyperdrive.baseToken.symbol}`}
          subtitle={`Earn ${fixedAPR?.formatted || "-"}% APR on ${
            hyperdrive.baseToken.symbol
          } `}
          description={`1 hy${hyperdrive.baseToken.symbol} is always worth 1
          ${hyperdrive.baseToken.symbol} at maturity. It's a predictable
          fixed rate yield.`}
          icon={<ClockIcon className="mb-2 h-16" />}
          checklist={[
            "Fixed rate included in the price",
            "Minimal risk and maintenance",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title={`Short hy${hyperdrive.baseToken.symbol}`}
          subtitle={`Earn ${vaultRate?.formatted || "-"}% APY on ${
            hyperdrive.baseToken.symbol
          }`}
          description={`Profit when hy${hyperdrive.baseToken.symbol} price drops, while
          maximizing exposure to the yield source.`}
          icon={<BoltIcon className="mb-2 h-16" />}
          checklist={[
            `Fixed rate up, hy${hyperdrive.baseToken.symbol} price down`,
            "Maximize exposure to yield source",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Add Liquidity"
          subtitle={`Earn trading fees and interest`}
          description="Take the other side of every Long and Short. Earn fees and the
          yield source rate."
          icon={<SquaresPlusIcon className="mb-2 h-16" />}
          checklist={[
            `Single-sided deposit with ${hyperdrive.baseToken.symbol}`,
            "Idle liquidity earns yield source rate",
            "No terms or manual LP rollovers",
          ]}
          emphasized
        />
      </div>

      <div className="daisy-btn-neutral daisy-btn-md daisy-btn mt-10 w-60 justify-between gap-0 hover:daisy-btn-ghost">
        <span className="flex-1 text-center">Select Market</span>
      </div>
      <FAQ />
    </div>
  );
}
