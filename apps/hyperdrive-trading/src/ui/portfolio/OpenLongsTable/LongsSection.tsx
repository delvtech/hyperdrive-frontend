import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { OpenLongForm } from "src/ui/hyperdrive/longs/OpenLongForm/OpenLongForm";
import { LongPositionsAndFaqTabs } from "./PositionsAndFaqTabs";
interface LongsSectionProps {
  hyperdrive: Hyperdrive;
}

export function LongsSection({ hyperdrive }: LongsSectionProps): ReactElement {
  return (
    <div className="flex flex-col gap-10 pt-8">
      <div className="flex max-h-[535px] gap-16">
        {/* positions and faq */}
        <LongPositionsAndFaqTabs hyperdrive={hyperdrive} />

        {/* form */}
        <div className="max-w-sm">
          <h5 className="mb-3 font-bold">Open long</h5>
          <Well>
            <OpenLongForm hyperdrive={hyperdrive} />
          </Well>
        </div>
      </div>
    </div>
  );
}
