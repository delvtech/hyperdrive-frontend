import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useDevLogging } from "src/ui/hyperdrive/hooks/useDevLogging";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";

export function Market(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;

  useDevLogging(market);

  return (
    <div className="flex h-full justify-center bg-base-100 py-8 px-4">
      <CommonHeadTags />
      <MarketDetailsBody hyperdrive={market} />
    </div>
  );
}
